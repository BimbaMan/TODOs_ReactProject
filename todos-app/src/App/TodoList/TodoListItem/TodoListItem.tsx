import { Todo } from "../../models/Todos";

type Props = {
  todo: Todo;
  onToggle(id: string): void;
  onRemove(id: string): void;
};

const TodoListItem = ({ todo, onToggle, onRemove }: Props) => {
  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
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
