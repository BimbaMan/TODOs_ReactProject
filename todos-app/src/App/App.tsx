import React, { useState } from "react";
import NewTodoInput from "./NewTodoInput/NewTodoInput";
import TodoList from "./TodoList/TodoList";
import ListFooter from "./ListFooter/ListFooter";
import { ITodo } from "../DataStructure";
import setUUID from "../UUID";
import "../App.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (input: ITodo) => {
    setTodos((prev) => [input, ...prev]);
  };

  return (
    <section className="todoapp">
      <NewTodoInput onAdd={addHandler} />
      {todos.length ? (
        <>
          <TodoList todos={todos} />
          <ListFooter todos={todos} />
        </>
      ) : null}
    </section>
  );
};

export default App;
