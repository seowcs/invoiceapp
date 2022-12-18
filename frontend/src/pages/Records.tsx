import {
  Flex,
  Heading,
  SimpleGrid,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";
import Navbar from "../components/Navbar";
import background from "../images/royalbluewhite.svg";
import { TbFileInvoice } from "react-icons/tb";
import InvCard from "../components/Card";

const Records = () => {
  return (
    <div>
      <Flex
        direction="column"
        align="center"
        justify="flex-start"
        bgImage={background}
        width="100%"
        height="100vh"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        position="absolute"
      >
        <Navbar />
        <Flex width="90%" justify="space-between" align="center">
          <Heading alignSelf="flex-start" m="20px 0 30px">
            Your <span style={{ color: "#5a9f4d" }}>Records</span>
          </Heading>

          <InputGroup pr="1px" width="50%" size="md">
            <Input variant="solid" pr="4.5rem" placeholder="Search" />
            <InputRightElement width="56px">
              <IconButton h="2rem" aria-label="search" icon={<SearchIcon />} />
            </InputRightElement>
          </InputGroup>

          <Button bgColor="royalblue" color="white">
            Export All
          </Button>
        </Flex>

        <SimpleGrid minChildWidth="200px" width="90%" spacing="40px">
          <InvCard />
          <InvCard />
          <InvCard />
          <InvCard />
        </SimpleGrid>
      </Flex>
    </div>
  );
};

export default Records;
