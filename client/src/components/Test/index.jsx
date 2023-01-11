import React, { useState } from "react";
import {
  FormControl,
  VStack,
  Input,
  Button,
  Stack,
  Textarea,
  Heading,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";

function Test() {
  const [notes, setNotes] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/", {
      method: "POST",
      body: JSON.stringify({ inputValue }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((text) => setNotes(text));

    setInputValue("");
  };

  const handleClear = () => {
    setNotes([]);
  };

  return (
    <Box background="#FAF9F6">
      <Box
        margin="auto"
        display="flex"
        width="80%"
        height="100vh"
        justifyContent="center"
      >
        <VStack w="70%">
          <Heading mt={10}>
            <Text color="teal.500">In 5</Text>: Five points about anything.
          </Heading>

          <FormControl as="form" onSubmit={handleSubmit}>
            <Input
              id="note"
              value={inputValue}
              onChange={handleChange}
              placeholder="Search..."
            />
            <Flex justify="space-between">
              <Button mt={4} variantColor="teal" type="submit">
                Submit
              </Button>
              <Button mt={4} onClick={handleClear}>
                Clear All
              </Button>
            </Flex>
            <Stack mt={4}>
              <Textarea
                pl={4}
                pt={-4}
                mt={4}
                height="50vh"
                size="xl"
                value={notes}
                placeholder="Your results will appear here..."
                resize="vertical"
                readOnly
              />
              {/* <List>
            {notes.map((note, index) => (
              <ListItem key={index}>
              <ListIcon icon="check-circle" color="green.500" />
              {note}
              </ListItem>
              ))}
            </List> */}
            </Stack>
          </FormControl>
        </VStack>
      </Box>
    </Box>
  );
}

export default Test;
