import { Divider, Text, IconButton } from "@chakra-ui/react";


export default function ImportantTasks({ favTodos }: any) {
  console.log("favourite todos: ", favTodos);
  return (
    <>
      {favTodos.map((favTodo: any) => (
        <Text fontSize="md" key={favTodo.todo_id}>
          {favTodo.description}
        </Text>
      ))}
    </>
  );
}
