import React, { createRef } from "react";
import { AppState, Todo } from "../../DataStructure";
import "../../App.css";
//import setUUID from "../../UUID";

const NewTodoInput: React.FC = () => {
  const textInput: React.RefObject<HTMLInputElement> =
    createRef<HTMLInputElement>();

  function addTodo(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (textInput.current === null) {
      return;
    }
    if (e.key === "Enter" && textInput.current.value.trim().length > 0) {
      const todo: Todo = {
        // id: setUUID(),
        text: textInput.current.value.trim(),
        completed: false,
      };

      //TODO: Add object todo to AppList

      //console.log(todo);

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
