import { Input, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { useState } from "react";

export default function InputTask({ onAddTask, input, setInput }: any) {
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  function handleInputChange(e: any) {
    setInput(e.target.value);
  }

  return (
    <FormControl>
      {error.isError ? (
        <FormErrorMessage>{error.message}</FormErrorMessage>
      ) : (
        <Input
          value={input.description}
          placeholder="Feed the pets"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onAddTask(e);
            }
          }}
          onChange={handleInputChange}
        />
      )}
    </FormControl>
  );
}
