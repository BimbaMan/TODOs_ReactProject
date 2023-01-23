import React, { useState } from "react";
import { ITodo, TodoListType } from "../../DataStructure";
import FilterList from "./FilterList/FilterList";

const ListFooter: React.FC<TodoListType> = ({ todos }) => {
  // const [todos, setTodos] = useState<ITodo[]>([]);
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

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default ListFooter;
