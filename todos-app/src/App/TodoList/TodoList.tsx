import { useEffect, useState } from "react";
import { Todo } from "../models/Todos";
import TodoListItem from "./TodoListItem/TodoListItem";

type Props = {
  todos: Todo[];
  onToggle(id: string): void;
  onRemove(id: string): void;
};

const TodoList = ({ todos, onToggle, onRemove }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    let state: boolean;
    if (isChecked) {
      state = false;
    } else {
      state = true;
    }
    todos.forEach((todo) => {
      if (todo.completed === state) {
        onToggle(todo.id);
      }
    });
  }, [isChecked]);

  const toggleAllCheckboxes = (): void => {
    setIsChecked(!isChecked);
  };

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={toggleAllCheckboxes}
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
