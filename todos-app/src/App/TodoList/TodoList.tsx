import React, { ReactElement, useState } from "react";
import { ITodo } from "../../DataStructure";
import TodoListItem from "./TodoListItem/TodoListItem";

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: string): void;
  onRemove(id: string): void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  const toggleAllCheckbox = (): void => {
    todos.forEach((todo) => {
      onToggle(todo.id);
    });
  };

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={toggleAllCheckbox}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
