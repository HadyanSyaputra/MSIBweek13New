import React from "react";
import { Box } from "@chakra-ui/react";
import BookForm from "../components/BookForm";

const NewBookPage = () => (
  <Box
    transition="background 0.3s ease"
    bgColor="gray.300"
    boxShadow="xl"
    borderRadius="md"
    shadow="dark-lg"
    p={8}
    maxW="500px"
    mx="auto"
    mt={10}
    color="black"
    fontFamily="sans-serif"
  >
    <BookForm />
  </Box>
);

export default NewBookPage;
