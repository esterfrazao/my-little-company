import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import Header from "../../components/Header";
import { useAuth } from "../../providers/clients";

const Profile = ({ authenticated }) => {
  const { clientInfo } = useAuth();
  if (!authenticated) {
    return <Navigate replace to="/" />;
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      direction="column"
      justify="space-between"
      bg="var(--dark-blue)"
    >
      <Header />
      <Spacer />
      <Flex
        padding="15px"
        width="85%"
        direction="column"
        justify="space-around"
        shadow="0 0 40px 0 var(--medium-blue3)"
      >
        <Flex>
          <Heading>{clientInfo?.name}</Heading>
        </Flex>
        <Flex direction="column">
          <Flex>
            <Heading>Seu Número</Heading>
            <Text>{clientInfo?.phone_number} </Text>
          </Flex>
          <Flex>
            <Heading>Seu Email</Heading>
            <Text>{clientInfo?.email} </Text>
          </Flex>
        </Flex>
      </Flex>
      <Spacer />
    </Flex>
  );
};

export default Profile;
