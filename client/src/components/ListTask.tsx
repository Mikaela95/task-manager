import { Divider, Text, IconButton } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function ListTask({ todos, onDeleteTask }: any) {
  // Key todo_id: Value has it been completed Bool
  const [completedTasks, setCompletedTasks] = useState<{
    [key: string]: boolean;
  }>({});

    
  return (
    <>
      {todos.map((todo: any) => (
        <Text fontSize="md" key={todo.todo_id}>
          {todo.description}
          <IconButton
            aria-label="complete task"
            colorScheme="pink"
            isRound={true}
            icon={completedTasks[todo.todo_id] ? <CheckIcon /> : <></>}
            onClick={() => onDeleteTask(todo.todo_id)}
          />
          <Divider />
        </Text>
      ))}
    </>
  );
}
