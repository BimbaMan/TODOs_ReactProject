import { useEffect, useState } from "react";
import NewTodoInput from "./NewTodoInput/NewTodoInput";
import TodoList from "./TodoList/TodoList";
import ListFooter from "./ListFooter/ListFooter";
import MainHeader from "./MainHeader/MainHeader";
import { Todo } from "./models/Todos";
import { FilterType } from "./models/Filters";
import Copyright from "./Copyright/Copyright";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(LoadTodosFromLocalStorage);
  const [filter, setFilter] = useState<FilterType>("All");
  const filteredTodos =
    filter === "Active"
      ? todos.filter((todo) => !todo.completed)
      : filter === "Completed"
      ? todos.filter((todo) => todo.completed)
      : todos;

  useEffect(() => {
    updateLocalStorage();
  }, [todos]);

  const updateLocalStorage = () => {
    window.localStorage.setItem("TODOS_STATE", JSON.stringify(todos));
  };

  function LoadTodosFromLocalStorage(): Todo[] {
    const stringifiedJSON: string | null =
      window.localStorage.getItem("TODOS_STATE");
    if (typeof stringifiedJSON === "string") {
      return JSON.parse(stringifiedJSON);
    }
    return [];
  }

  const filterTodosHandler = (filterValue: FilterType) => {
    setFilter(filterValue);
  };

  const addHandler = (input: Todo) => {
    setTodos((prev) => [...prev, input]);
  };

  const toggleTodoHandler = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <section>
      <MainHeader />
      <section className="todoapp">
        <NewTodoInput onAdd={addHandler} />
        {todos.length ? (
          <>
            <TodoList
              todos={filteredTodos}
              onToggle={toggleTodoHandler}
              onRemove={removeTodoHandler}
            />
            <ListFooter
              todos={filteredTodos}
              onRemove={removeTodoHandler}
              filterTodosHandler={filterTodosHandler}
            />
          </>
        ) : null}
      </section>
      <Copyright />
    </section>
  );
};

export default App;
