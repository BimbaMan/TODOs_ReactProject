import React, { createRef, useState } from "react";
import { ITodo } from "../../DataStructure";
import "../../App.css";
import setUUID from "../../UUID";

interface ITodoInputProps {
  onAdd(input: ITodo): void;
}

const NewTodoInput: React.FC<ITodoInputProps> = (props) => {
  const textInput: React.RefObject<HTMLInputElement> =
    createRef<HTMLInputElement>();

  function addTodo(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (textInput.current === null) {
      return;
    }

    if (e.key === "Enter" && textInput.current.value.trim() === "") {
      textInput.current.value = "";
    } else if (e.key === "Enter" && textInput.current.value.trim().length > 0) {
      const todo: ITodo = {
        id: setUUID(),
        text: textInput.current.value.trim(),
        completed: false,
      };

      props.onAdd(todo);

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
