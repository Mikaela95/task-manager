import { Divider, Text, IconButton } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";

export default function InputTodo() {
  const [tasks, setTask] = useState<any[]>([]);
  const [completedTasks, setCompletedTasks] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    axios.get("http://localhost:4000/todos").then((res) => {
      const tasks = res.data;
      setTask(tasks);
    });
  }, []);

  function handleComplete(id: number) {
    setCompletedTasks((prevCompletedTasks) => ({
      ...prevCompletedTasks,
      [id]: !prevCompletedTasks[id],
    }));
  }

  return (
    <>
      {tasks.map((task) => (
        <Text fontSize="md" key={task.todo_id}>
          {task.description}
          <IconButton
            aria-label="complete task"
            colorScheme="pink"
            isRound={true}
            icon={completedTasks[task.todo_id] ? <CheckIcon /> : <></>}
            onClick={() => handleComplete(task.todo_id)}
          />
          <Divider />
        </Text>
      ))}
    </>
  );
}
