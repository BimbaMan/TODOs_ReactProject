import React, { useState, createRef, useEffect } from "react";
import type { ITodo } from "../../../DataStructure";
import "../../../App.css";

interface Props {
  todo: ITodo;
}

interface State {
  onEdit: boolean;
}

const TodoListItem: React.FC<Props> = ({ todo }) => {
  // const editInput = createRef<HTMLInputElement>();
  // const init: State = { onEdit: false };
  // const [state, setState] = useState(init);

  return (
    <li className="todo-item">
      <div className="view">
        <label>{todo.text}</label>
        <button className="destroy" />
      </div>
    </li>
  );
};

export default TodoListItem;
