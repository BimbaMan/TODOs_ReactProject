import { Todo } from "../models/Todos";
import TodoListItem from "./TodoListItem/TodoListItem";

type Props = {
  todos: Todo[];
  onToggle(id: string): void;
  onRemove(id: string): void;
};

const TodoList = ({ todos, onToggle, onRemove }: Props) => {
  const handleToggleAll = () => {
    todos
      .filter((todo) => todo.completed === allCompleted)
      .forEach((todo) => onToggle(todo.id));
  };

  const allCompleted = todos.every((todo) => {
    return todo.completed === true;
  });

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={allCompleted}
        onChange={handleToggleAll}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
