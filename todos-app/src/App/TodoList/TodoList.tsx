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
  let toggleAllState = todos.every((todo) => {
    return todo.completed === true;
  });

  useEffect(() => {
    todos.forEach((todo) => {
      if (todo.completed === toggleAllState) {
        onToggle(todo.id);
      }
    });
  }, [isChecked]);

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={toggleAllState}
        onChange={() => setIsChecked(!isChecked)}
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
