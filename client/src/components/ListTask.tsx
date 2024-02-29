import { Divider, Text, IconButton } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

export default function ListTask({
  todos,
  onDeleteTask,
  onFavouriteTask,
}: any) {
  // Key todo_id: Value has it been completed Bool
  const [completedTasks, setCompletedTasks] = useState<{
    [key: string]: boolean;
  }>({});

  const [favouriteStatus, setFavouriteStatus] = useState<{
    [key: string]: boolean;
  }>(() => {
    // Create an object with each todo item's ID as key and false as value
    const initialFavouriteStatus: { [key: string]: boolean } = {};
    todos.forEach((todo: any) => {
      initialFavouriteStatus[todo.todo_id] = false;
    });
    return initialFavouriteStatus;
  });

  const toggleFavourite = (todoId: string) => {
    setFavouriteStatus((prevStaus) => ({
      ...prevStaus,
      [todoId]: !prevStaus[todoId],
    }));
  };

  console.log("todos: ", todos);

  return (
    <>
      {todos.map((todo: any) => (
        <Text fontSize="md" key={todo.todo_id}>
          {todo.description}
          <IconButton
            aria-label="complete task"
            colorScheme="blue"
            isRound={true}
            icon={completedTasks[todo.todo_id] ? <CheckIcon /> : <></>}
            onClick={() => onDeleteTask(todo.todo_id)}
          />
          <IconButton
            aria-label="favourite"
            as={CiStar}
            color={favouriteStatus[todo.todo_id] ? "yellow" : "black"}
            backgroundColor={"transparent"}
            onClick={() => {
              const updatedFavourite = !favouriteStatus[todo.todo_id];
              onFavouriteTask(todo, updatedFavourite);
              toggleFavourite(todo.todo_id);
            }}
          />
          <Divider />
        </Text>
      ))}
    </>
  );
}
