import { Divider, Text, IconButton, Checkbox } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { CiStar } from "react-icons/ci";

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
  }>(
    /* () => {
    // Create an object with each todo item's ID as key and false as value
    const initialFavouriteStatus: { [key: string]: boolean } = {};
    todos.forEach((todo: any) => {
      initialFavouriteStatus[todo.todo_id] = false;
    });
    return initialFavouriteStatus;
    
  } */ {}
  );
  console.log("fav status: ", favouriteStatus);
  console.log("todos: ", todos);

  const toggleFavourite = (todoId: string) => {
    setFavouriteStatus((prevStaus) => ({
      ...prevStaus,
      [todoId]: !prevStaus[todoId],
    }));
  };

  return (
    <>
      {todos.map((todo: any) => (
        <div key={todo.todo_id}>
          <Text style={{ display: "inline", marginLeft: "1rem" }}>
            {todo.description}
          </Text>
          {/* <IconButton
            aria-label="complete task"
            colorScheme="blue"
            isRound={true}
            icon={completedTasks[todo.todo_id] ? <Checkbox /> : <></>}
            onClick={() => onDeleteTask(todo.todo_id)}
          /> */}
          <Checkbox
            onChange={() => onDeleteTask(todo.todo_id)}
            style={{ verticalAlign: "middle", margin: "0.8em" }}
          />
          <IconButton
            aria-label="favourite"
            as={CiStar}
            /* color={favouriteStatus[todo.todo_id] ? "yellow" : "black"} */
            color={todo.favourite ? "yellow" : "black"}
            backgroundColor={"transparent"}
            onClick={() => {
              const updatedFavourite = !favouriteStatus[todo.todo_id];
              onFavouriteTask(todo, updatedFavourite);
              toggleFavourite(todo.todo_id);
            }}
          />
          <Divider />
        </div>
      ))}
    </>
  );
}
