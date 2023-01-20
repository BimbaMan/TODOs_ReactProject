import { Todo, AppState } from "../../DataStructure";
import React, { ReactElement } from "react";
import TodoListItem from "./TodoListItem/TodoListItem";

const TodoList: React.FC = () => {
  function toggleAllCheckbox(e: React.ChangeEvent<HTMLInputElement>): void {
    //TODO write function
  }

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={toggleAllCheckbox}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list"></ul>
    </section>
  );
};

export default TodoList;
