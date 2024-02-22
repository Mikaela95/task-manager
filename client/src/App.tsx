import { Grid, GridItem, Heading, Center } from "@chakra-ui/react";
import InputTodo from "./components/InputTodo";

function App() {
  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={6}
    >
      <GridItem colSpan={12}>
        <Center bg="#142d4c" h="100px" color="white">
          <Heading>Task Manager</Heading>
        </Center>
      </GridItem>
      <GridItem colSpan={3} bg="#385170"></GridItem>
      <GridItem colSpan={6} bg="#9fd3c7">
        <InputTodo />
      </GridItem>
      <GridItem colSpan={3} bg="#385170"></GridItem>
    </Grid>
  );
}

export default App;

