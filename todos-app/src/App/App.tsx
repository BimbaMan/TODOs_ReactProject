import { useEffect, useState } from "react";
import NewTodoInput from "./NewTodoInput/NewTodoInput";
import TodoList from "./TodoList/TodoList";
import ListFooter from "./ListFooter/ListFooter";
import { Todo } from "./models/Todos";
import { FilterType } from "./models/Filters";
import "../App.css";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filterTodos, setFilterTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>("All");

  useEffect(() => {
    setFilterTodos(todos);
    switch (filter) {
      case "All": {
        break;
      }
      case "Active": {
        setFilterTodos((prev) =>
          prev.filter((todo) => todo.completed === false)
        );
        break;
      }
      case "Completed": {
        setFilterTodos((prev) =>
          prev.filter((todo) => todo.completed === true)
        );
        break;
      }

      default:
        break;
    }
  }, [todos, filter]);

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
    <section className="todoapp">
      <NewTodoInput onAdd={addHandler} />
      {todos.length ? (
        <>
          <TodoList
            todos={filterTodos}
            onToggle={toggleTodoHandler}
            onRemove={removeTodoHandler}
          />
          <ListFooter
            todos={filterTodos}
            onRemove={removeTodoHandler}
            filterTodosHandler={filterTodosHandler}
          />
        </>
      ) : null}
    </section>
  );
};

export default App;
