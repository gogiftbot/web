import { Skeleton } from "@/components/Skeleton";
import { Box, HStack, Text } from "@chakra-ui/react";
import { beginCell, toNano } from "@ton/ton";
import {
  useTonConnectUI,
  useIsConnectionRestored,
  useTonAddress,
  SendTransactionRequest,
} from "@tonconnect/ui-react";
import { useCallback, useEffect, useState } from "react";
import { TonButton } from "./Buttons";

export const useConnectWallet = (props: {
  isLoading?: boolean;
}): [
  () => React.ReactNode,
  {
    onSend: (props: { bonusId?: string; value: string }) => Promise<void>;
    isLoading: boolean;
    isConnected: boolean;
  }
] => {
  const connectionRestored = useIsConnectionRestored();
  const [tonConnectUi] = useTonConnectUI();
  const walletAddress = useTonAddress();

  const [isLoading, setIsLoading] = useState(false);
  const [onConnectIsLoading, setOnConnectIsLoading] = useState(false);
  const [accountId, setAccountId] = useState<string | undefined>(undefined);
  const [address, setAddress] = useState("");
  const [exchangeRates, setExchangeRates] = useState<
    { Toncoin: number; Caerus: number } | undefined
  >(undefined);

  useEffect(() => {
    const handleStatusChange = async () => {
      const currentAddress = tonConnectUi.wallet?.account.address;
      if (currentAddress) {
        // await accountUpdateWallet({
        //   variables: { payload: { address: currentAddress } },
        // });
      }
    };

    tonConnectUi.onStatusChange(handleStatusChange);

    return () => {
      tonConnectUi.onStatusChange(() => {});
    };
  }, [tonConnectUi]);

  const onSend = useCallback(
    async (props: { bonusId?: string; value: string }) => {
      setIsLoading(true);
      try {
        if (!exchangeRates?.Toncoin) throw new Error("INVALID_EXCHANGE_RATE");
        const tonAmount = parseFloat(props.value) / exchangeRates.Toncoin;

        const tx: SendTransactionRequest = {
          validUntil: Math.floor(Date.now() / 1000) + 600,
          messages: [
            {
              address,
              amount: toNano(tonAmount.toFixed(9)).toString(),
              payload: beginCell()
                .storeUint(0, 32)
                .storeStringTail(
                  JSON.stringify({
                    accountId,
                    bonusId: props.bonusId,
                  })
                )
                .endCell()
                .toBoc()
                .toString("base64"),
            },
          ],
        };
        await tonConnectUi.sendTransaction(tx);
      } catch (e: any) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    },
    [exchangeRates, accountId]
  );

  const Component = () => (
    <Box w="full">
      {!connectionRestored ? (
        <Skeleton h="40px" borderRadius="lg" />
      ) : (
        <>
          {walletAddress ? (
            <>
              <HStack>
                {/* <CustomTextInput
                  placeholder="Your wallet"
                  dynamicValue={walletAddress}
                  isEditable={false}
                /> */}
                <TonButton
                  pallette="blue"
                  onClick={async () => {
                    await tonConnectUi.disconnect();
                    // await accountUpdateWallet({
                    //   variables: { payload: { address: null } },
                    // });
                  }}
                >
                  <Text>Disconnect</Text>
                </TonButton>
                {/* <ControlButton
                  w={undefined}
                  px="20px"
                  label="Disconnect"
                  bgColor="#0098EA"
                  color="content"
                  _focus={{
                    bgColor: "#0098EA",
                  }}
                  _hover={{
                    bgColor: "#0098EA",
                  }}
                  _active={{
                    bgColor: "#0098EA",
                  }}
                  onEvent={async () => {
                    await tonConnectUi.disconnect();
                    // await accountUpdateWallet({
                    //   variables: { payload: { address: null } },
                    // });
                  }}
                /> */}
              </HStack>
            </>
          ) : (
            <TonButton
              pallette="blue"
              onClick={async () => {
                try {
                  setOnConnectIsLoading(true);
                  await tonConnectUi.openModal();
                } catch (e: any) {
                  console.log(e);
                } finally {
                  setOnConnectIsLoading(false);
                }
              }}
            >
              <Text>Connect wallet</Text>
            </TonButton>
            // <ControlButton
            //   isLoading={onConnectIsLoading}
            //   label="Connect"
            //   bgColor="#0098EA"
            //   color="content"
            //   _focus={{
            //     bgColor: "#0098EA",
            //   }}
            //   _hover={{
            //     bgColor: "#0098EA",
            //   }}
            //   _active={{
            //     bgColor: "#0098EA",
            //   }}
            //   onEvent={async () => {
            // try {
            //   setOnConnectIsLoading(true);
            //   await tonConnectUi.openModal();
            // } catch (e: any) {
            //   console.log(e);
            // } finally {
            //   setOnConnectIsLoading(false);
            // }
            //   }}
            // />
          )}
        </>
      )}
    </Box>
  );

  return [
    Component,
    {
      onSend,
      isLoading,
      isConnected: !!walletAddress,
    },
  ];
};
