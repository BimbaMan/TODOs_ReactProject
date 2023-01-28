import React, { useState } from "react";
import NewTodoInput from "./NewTodoInput/NewTodoInput";
import TodoList from "./TodoList/TodoList";
import ListFooter from "./ListFooter/ListFooter";
import { ITodo } from "../DataStructure";
import "../App.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (input: ITodo) => {
    setTodos((prev) => [...prev, input]);
  };

  const toggleHandler = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <section className="todoapp">
      <NewTodoInput onAdd={addHandler} />
      {todos.length ? (
        <>
          <TodoList
            todos={todos}
            onToggle={toggleHandler}
            onRemove={removeHandler}
          />
          <ListFooter todos={todos} onRemove={removeHandler} />
        </>
      ) : null}
    </section>
  );
};

export default App;
