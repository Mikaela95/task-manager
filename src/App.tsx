import React from "react";
import "./App.css";
import { Input, Grid, GridItem, Heading, Center } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem colSpan={5}>
        <Center bg="tomato" h="100px" color="white">
          <Heading>Task Manager</Heading>
        </Center>
      </GridItem>
    </Grid>
  );
}

export default App;
