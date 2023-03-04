import React, { createRef } from "react";
import { Todo } from "../models/Todos";
import generateUUID from "../uuid/UUIDGenerator";

type Props = {
  onAdd(input: Todo): void;
};

const NewTodoInput = ({ onAdd }: Props) => {
  const textInput: React.RefObject<HTMLInputElement> =
    createRef<HTMLInputElement>();

  function addTodo(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (textInput.current === null) {
      return;
    }
    e.preventDefault();

    if (e.key === "Enter" && textInput.current.value.trim() === "") {
      textInput.current.value = "";
    } else if (e.key === "Enter" && textInput.current.value.trim().length > 0) {
      const todo: Todo = {
        id: generateUUID(),
        text: textInput.current.value.trim(),
        completed: false,
      };

      onAdd(todo);

      textInput.current.value = "";
    }
  }

  return (
    <header className="header">
      <h1>TODOs</h1>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        ref={textInput}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => addTodo(e)}
        autoFocus
      />
    </header>
  );
};

export default NewTodoInput;
