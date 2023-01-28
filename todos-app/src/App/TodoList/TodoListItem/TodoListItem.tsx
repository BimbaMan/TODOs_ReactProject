import { Todo } from "../../models/Todos";
import "../../../App.css";

type Props = {
  todo: Todo;
  onToggle(id: string): void;
  onRemove(id: string): void;
};

const TodoListItem = ({ todo, onToggle, onRemove }: Props) => {
  const switchStyle = (t: Todo): string => {
    if (t.completed) {
      return "completed";
    } else {
      return "";
    }
    document.getElementById("toggle-all");
  };

  return (
    <li key={todo.id} className={switchStyle(todo)}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            onToggle(todo.id);
          }}
        />
        <label>{todo.text}</label>
        <button className="destroy" onClick={() => onRemove(todo.id)} />
      </div>
    </li>
  );
};

export default TodoListItem;
