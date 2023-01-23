import React, { useState, createRef } from "react";
import type { ITodo, TodoListType } from "../../../DataStructure";
import "../../../App.css";

interface Props {
  todo: ITodo;
}

interface State {
  onEdit: boolean;
}

const TodoListItem: React.FC<Props> = ({ todo }) => {
  const reverseCompleted = (id: ITodo["id"]): void => {};

  return (
    <li className="todo-item">
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          // onChange={() => }
        />
        <label>{todo.text}</label>
        <button className="destroy" />
      </div>
    </li>
  );
};

export default TodoListItem;
