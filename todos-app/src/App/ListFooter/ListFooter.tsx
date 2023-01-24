import React, { useState } from "react";
import { ITodo, todoListType } from "../../DataStructure";
import FilterList from "./FilterList/FilterList";

type TodoListFooterProps = {
  todos: ITodo[];
  onRemove(id: string): void;
  filterTodosHandler(filterValue: string): void;
};

const ListFooter: React.FC<TodoListFooterProps> = ({
  todos,
  onRemove,
  filterTodosHandler,
}) => {
  const completed: number = todos.filter(
    (todo) => todo.completed === true
  ).length;
  const backlog: number = todos.filter(
    (todo) => todo.completed === false
  ).length;

  const clearCompleted = () => {
    todos.forEach((todo) => {
      if (todo.completed === true) {
        onRemove(todo.id);
      }
    });
  };

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

      <FilterList filterTodosHandler={filterTodosHandler} />
      {completed > 0 && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default ListFooter;
