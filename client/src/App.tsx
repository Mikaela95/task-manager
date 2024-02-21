import React, { useEffect, useState } from "react";
import { Grid, GridItem, Heading, Center } from "@chakra-ui/react";
import axios from "axios";

function App() {
  const [tasks, setTask] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:4000/test").then((res) => {
      const tasks = res.data;
      setTask(tasks);
    });
  }, []);

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
      <div>
        {tasks.map((task) => (
          <div key={task.id}>{task.name}</div>
        ))}
      </div>
    </Grid>
  );
}

export default App;
