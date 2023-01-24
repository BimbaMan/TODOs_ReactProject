import React, { useState } from "react";
import NewTodoInput from "./NewTodoInput/NewTodoInput";
import TodoList from "./TodoList/TodoList";
import ListFooter from "./ListFooter/ListFooter";
import { ITodo } from "../DataStructure";
import "../App.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filters, setFilters] = useState<ITodo[]>([]);

  const filterTodosHandler = (filterValue: string) => {
    setFilters(todos);
    switch (filterValue) {
      case "All": {
        setFilters(todos);
        break;
      }
      case "Active": {
        filter(false);
        break;
      }
      case "Completed": {
        filter(true);
        break;
      }

      default:
        break;
    }
  };

  function filter(state: boolean): void {
    setFilters((prev) => prev.filter((todo) => todo.completed === state));
  }

  const addHandler = (input: ITodo) => {
    setTodos((prev) => [...prev, input]);
    setFilters((prev) => [...prev, input]);
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
    setFilters(todos);
  };

  const removeHandler = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    //setTodos((prev) => prev.filter((todo) => todo.id !== id));
    setFilters(todos); //asyc methods need to work one by one
    console.log(todos);
    console.log(filters);
  };

  return (
    <section className="todoapp">
      <NewTodoInput onAdd={addHandler} />
      {todos.length ? (
        <>
          <TodoList
            todos={filters}
            onToggle={toggleHandler}
            onRemove={removeHandler}
          />
          <ListFooter
            todos={filters}
            onRemove={removeHandler}
            filterTodosHandler={filterTodosHandler}
          />
        </>
      ) : null}
    </section>
  );
};

export default App;
