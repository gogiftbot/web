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
import { config } from "@/lib/services/config.service";

export const useConnectWallet = (props: {
  isLoading?: boolean;
  accountId?: string;
}): [
  () => React.ReactNode,
  {
    onSend: (props: { value: number }) => Promise<void>;
    isLoading: boolean;
    isConnected: boolean;
  }
] => {
  const connectionRestored = useIsConnectionRestored();
  const [tonConnectUi] = useTonConnectUI();
  const walletAddress = useTonAddress();

  const [isLoading, setIsLoading] = useState(false);
  const [onConnectIsLoading, setOnConnectIsLoading] = useState(false);

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
    async ({ value }: { value: number }) => {
      if (!props.accountId) return;
      setIsLoading(true);
      try {
        const tx: SendTransactionRequest = {
          validUntil: Math.floor(Date.now() / 1000) + 600,
          messages: [
            {
              address: config.TON_ADDRESS,
              amount: toNano(value.toFixed(9)).toString(),
              payload: beginCell()
                .storeUint(0, 32)
                .storeStringTail(
                  JSON.stringify({
                    accountId: props.accountId,
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
    [props.accountId]
  );

  const Component = () => (
    <Box w="full">
      {!connectionRestored || props.isLoading ? (
        <Skeleton h="40px" borderRadius="lg" />
      ) : (
        <>
          {walletAddress ? (
            <>
              <HStack>
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
              </HStack>
            </>
          ) : (
            <TonButton
              pallette="blue"
              isLoading={onConnectIsLoading}
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
