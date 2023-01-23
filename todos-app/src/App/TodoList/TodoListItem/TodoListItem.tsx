import React, { useState, createRef } from "react";
import { ITodo } from "../../../DataStructure";
import "../../../App.css";

type TodoListItemsProps = {
  todo: ITodo;
  onToggle(id: string): void;
};

interface State {
  onEdit: boolean;
}

const TodoListItem: React.FC<TodoListItemsProps> = ({ todo, onToggle }) => {
  const init: State = { onEdit: false };
  const [state, setState] = useState(init);

  const SwitchStyle = (t: ITodo, onEdit: boolean): string => {
    switch (true) {
      case onEdit && t.completed:
        return "completed editing";
      case onEdit && !t.completed:
        return "editing";
      case !onEdit && t.completed:
        return "completed";
      case !onEdit && !t.completed:
        return "";

      default:
        return "";
    }
  };

  return (
    <li key={todo.id} className={SwitchStyle(todo, state.onEdit)}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle.bind(null, todo.id)}
        />
        <label>{todo.text}</label>
        <button className="destroy" />
      </div>
    </li>
  );
};

export default TodoListItem;
