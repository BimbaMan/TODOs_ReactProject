import React, { useState, createRef, useEffect } from "react";

import type { Todo, TodoListType } from "../../../DataStructure";
import "../../../App.css";

interface Props {
  todo: Todo;
}

interface State {
  onEdit: boolean;
}

const TodoListItem: React.FC<Props> = ({ todo }) => {
  const editInput = createRef<HTMLInputElement>();
  const init: State = { onEdit: false };
  const [state, setState] = useState(init);

  const onDoubleClick = (): void => {
    setState({ onEdit: true });
  };

  return (
    <li className="todo-item">
      <div className="view" data-testid="view">
        <label>{todo.text}</label>
        <button className="destroy" />
      </div>
    </li>
  );
};

export default TodoListItem;
