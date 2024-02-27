import { Grid, GridItem, Heading, Center } from "@chakra-ui/react";
import InputTask from "./components/InputTask";
import ListTask from "./components/ListTask";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState<any[]>([]);
  const [input, setInput] = useState({
    description: "",
  });

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      axios.get("http://localhost:4000/todos").then((res) => {
        const todos = res.data;
        setTodos(todos);
      });
    } catch (error) {
      console.error("Unable to get tasks: ", error);
    }
  };

  const handleAddTodo = async (newTodo: any) => {
    console.log("newTodo: ", newTodo.target.value);
    try {
      await axios.post("/todos", {
        description: newTodo.target.value,
      });
      getTodos();
      setInput({ description: "" });
    } catch (error) {
      console.error("Error submitting task: ", error);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await axios.delete(`http://localhost:4000/todos/${id}`);
      getTodos();
    } catch (error: any) {
      console.error(error.message);
    }
  };
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
      <GridItem colSpan={3} bg="#385170">
        <Heading>Done Tasks</Heading>
      </GridItem>
      <GridItem colSpan={6} bg="#9fd3c7">
        <InputTask
          onAddTask={handleAddTodo}
          input={input}
          setInput={setInput}
        />
        <ListTask todos={todos} onDeleteTask={handleDeleteTodo} />
      </GridItem>
      <GridItem colSpan={3} bg="#385170">
        <Heading>Important Tasks</Heading>
      </GridItem>
    </Grid>
  );
}

export default App;
