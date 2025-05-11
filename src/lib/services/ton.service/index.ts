import { AccountEvent, TonApiClient } from "@ton-api/client";
import { Address, fromNano } from "@ton/core";
import prisma, { PrismaTransaction } from "@/lib/prisma";
import { TransactionType } from "@/generated/prisma";
import { config } from "../config.service";

type DepositTX = {
  from: string;
  amount: number;
  lt: bigint;
  timestamp: number;
  accountId?: string;
};

export class TonService {
  public readonly tonApi: TonApiClient;
  private readonly address = Address.parse(config.TON_ADDRESS);

  constructor() {
    this.tonApi = new TonApiClient({
      baseUrl: "https://tonapi.io",
      apiKey: config.TON_API_KEY,
    });
  }

  public async onDepositTx() {
    // const paymentService = new NowPaymentsService(this.context);

    const transaction = await prisma.ton_transaction.findFirstOrThrow({
      select: {
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const startDate = Math.floor(
      new Date(transaction.createdAt).getTime() / 1000
    );

    const { events } = await this.tonApi.accounts.getAccountEvents(
      this.address,
      {
        limit: 100,
        start_date: startDate,
      }
    );

    const depositTxs: DepositTX[] = events.flatMap((event) =>
      this.parseEvent({ event })
    );

    for (const depositTx of depositTxs) {
      try {
        await prisma.$transaction(async (tx) => {
          const account = await tx.account.findUniqueOrThrow({
            where: {
              id: depositTx.accountId,
            },
            select: { id: true },
          });

          // const paymentTransaction = await paymentService.deposit(
          //   {
          //     id: payment.id,
          //     accountId: account.id,
          //     amount,
          //     currency: "ton",
          //   },
          //   tx
          // );

          await tx.ton_transaction.create({
            data: {
              amount: depositTx.amount,
              from: depositTx.from,
              to: this.address.toString({
                urlSafe: true,
                bounceable: false,
              }),
              lt: depositTx.lt.toString(),
              accountId: account.id,
              type: TransactionType.deposit,
            },
          });

          // await new TransactionService(this.context).requestTransactionDeposit(
          //   payment
          // );

          // await new AccountService(
          //   this.context,
          //   await new AccountDTO(this.context).prismaToModel({
          //     id: payment.accountId,
          //   })
          // ).publishAccount();
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  private parseEvent({ event }: { event: AccountEvent }): DepositTX[] {
    const deposits: DepositTX[] = [];

    for (const action of event.actions) {
      if (action.TonTransfer?.comment && action.TonTransfer?.amount) {
        try {
          const data: { accountId?: string } = JSON.parse(
            action.TonTransfer.comment!
          );

          if (!data.accountId) throw new Error("INVALID_TX_COMMENT");

          deposits.push({
            from: action.TonTransfer.sender.address.toString({
              urlSafe: true,
              bounceable: false,
            }),
            amount: parseFloat(fromNano(action.TonTransfer.amount)),
            lt: BigInt(event.lt),
            timestamp: event.timestamp,
            accountId: data.accountId,
          });
        } catch (error: any) {
          console.log(action.TonTransfer, error);
        }
      }
    }

    return deposits;
  }

  // public static async getTransactions(
  //   tonService: TonService,
  //   lastTransaction: { lt: string } | null,
  // ): Promise<Tx[]> {
  //   const wallet = await tonService.getWallet();
  //   const walletAddress = await wallet.getAddress();

  //   const txs = await tonService.client.provider.getTransactions(
  //     walletAddress.toString(),
  //     10,
  //     undefined,
  //     undefined,
  //     lastTransaction?.lt,
  //   );

  //   return txs;
  // }

  // public async send(payload: { address: string; amount: number }) {
  //   const exchangeRate = await this.getExchangeRate();

  //   const tonAmount = payload.amount / exchangeRate;

  //   const balance = await this.getBalance();

  //   this.context.logger.debug(
  //     `[service] TonService (send) exchangeRate: ${exchangeRate} tonAmount:${tonAmount} address:${payload.address} balance:${balance}`,
  //   );

  //   if (balance < tonAmount)
  //     throw new Error(ErrorMessage.InfluenceTonWalletBalance);

  //   const wallet = await this.getWallet();
  //   const seqno = await wallet.methods.seqno().call();

  //   const keyPair = await this.getKeyPair();
  //   const transfer = wallet.methods.transfer({
  //     secretKey: keyPair.secretKey,
  //     toAddress: payload.address,
  //     amount: TonWeb.utils.toNano(tonAmount.toFixed(9)),
  //     seqno: seqno ?? 0,
  //     sendMode: 3,
  //   });

  //   await transfer.send();
  // }

  // public async getWallet() {
  //   const keyPair = await this.getKeyPair();
  //   const wallet = new this.client.wallet.all.v4R2(this.client.provider, {
  //     publicKey: keyPair.publicKey,
  //   });

  //   return wallet;
  // }

  // private async getBalance(): Promise<number> {
  //   const wallet = await this.getWallet();

  //   const walletAddress = await wallet.getAddress();
  //   const balance = await this.client.getBalance(walletAddress);

  //   return parseFloat(TonWeb.utils.fromNano(balance));
  // }

  // private async getKeyPair() {
  //   const seed = await TonMnemonic.mnemonicToSeed(
  //     config.TONCENTER_API_MNEMONIC,
  //   );
  //   return TonWeb.utils.nacl.sign.keyPair.fromSeed(seed);
  // }

  // private async cacheExchangeRate(value: number) {
  //   await this.context.cache.set(this.CACHE_KEY, value, 60 * 60);
  // }

  // public async getExchangeRates(): Promise<{
  //   Toncoin: number;
  //   Caerus: number;
  // }> {
  //   const cachedExchangeRate = await this.context.cache.get<number>(
  //     this.CACHE_KEY
  //   );

  //   const token = await this.context.prisma.exchangeRate.findUniqueOrThrow({
  //     where: {
  //       token: "Caerus",
  //     },
  //     select: {
  //       rate: true,
  //     },
  //   });

  //   if (cachedExchangeRate)
  //     return { Toncoin: cachedExchangeRate, Caerus: token.rate };

  //   const url = new URL(`${this.apiUrl}/data/price`);

  //   url.searchParams.append("fsym", "TON");
  //   url.searchParams.append("tsyms", "USD");
  //   url.searchParams.append("api_key", config.CRYPTO_COMPARE_API_KEY);

  //   const response = await fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (!response.ok) {
  //     throw new Error(
  //       `Failed to fetch TON/USD exchange rate: ${response.statusText}`
  //     );
  //   }

  //   const data = (await response.json()) as { USD: number };

  //   await this.cacheExchangeRate(data.USD);

  //   return { Toncoin: data.USD, Caerus: token.rate };
  // }
}
