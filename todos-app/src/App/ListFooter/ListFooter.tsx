import React, { useState } from "react";
import { ITodo, todoListType } from "../../DataStructure";
import FilterList from "./FilterList/FilterList";

type TodoListFooterProps = {
  todos: ITodo[];
};
const ListFooter: React.FC<TodoListFooterProps> = ({ todos }) => {
  const completed: number = todos.filter(
    (todo) => todo.completed === true
  ).length;
  const backlog: number = todos.filter(
    (todo) => todo.completed === false
  ).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        {backlog === 1 ? (
          <>
            <strong>{backlog}</strong> item left
          </>
        ) : (
          <>
            <strong>{backlog}</strong> items left
          </>
        )}
      </span>

      <FilterList />
      {completed > 0 && (
        <button className="clear-completed">Clear completed</button>
      )}
    </footer>
  );
};

export default ListFooter;
