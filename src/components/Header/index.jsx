import { Text, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import { BiLogIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/clients";

const Header = () => {
  const navigate = useNavigate();
  const { clientInfo, logout } = useAuth();

  return (
    <Flex
      align="center"
      height="10vh"
      bgColor="whiteAlpha.200"
      color="lavender"
      padding="0 10px 5px"
      boxShadow="1px 2px 20px 0px lavender"
      width="100%"
    >
      <Heading
        cursor="pointer"
        onClick={() => navigate("/dashboard")}
        size="2xl"
        as="h2"
      >
        My Little Company
      </Heading>
      <Spacer />
      <HStack spacing="4" cursor="pointer" onClick={() => navigate("/profile")}>
        <Text fontSize="1.5rem" fontWeight="semibold">
          {clientInfo?.name?.split(" ")[0]}
        </Text>
        <BiLogIn onClick={logout} size="2rem" />
      </HStack>
    </Flex>
  );
};

export default Header;
