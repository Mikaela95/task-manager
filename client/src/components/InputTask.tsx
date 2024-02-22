import { Input, FormControl, FormErrorMessage } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export default function InputTask() {
  const [input, setInput] = useState({
    description: "",
  });
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  function handleInputChange(e: any) {
    setInput({
      ...input,
      description: e.target.value,
    });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      axios
        .post("/todos", {
          description: input.description,
        })
        .then((response) => {
          console.log(response);
        });
      setInput({ description: "" });
      setError({
        isError: false,
        message: "",
      });
    } catch (error) {
      console.error("Error submitting task: ", error);
      setError({
        isError: true,
        message: "Failed to submit task :(. Please try again",
      });
    }
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
              handleSubmit(e);
            }
          }}
          onChange={handleInputChange}
        />
      )}
    </FormControl>
  );
}
