import { Flex, Spinner } from "@chakra-ui/react";

export const Spin = () => {
  return (
    <Flex
      width={"100%"}
      height={"90vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Spinner size="xl" />
    </Flex>
  );
};
