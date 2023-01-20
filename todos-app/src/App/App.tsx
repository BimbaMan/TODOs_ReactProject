import React from "react";
import NewTodoInput from "./NewTodoInput/NewTodoInput";
import TodoList from "./TodoList/TodoList";
import ListFooter from "./ListFooter/ListFooter";
import "../App.css";

const App: React.FC = () => {
  return (
    <section className="todoapp">
      <NewTodoInput />
      {0 ? (
        //I need a condition to call functions (maybe use recoil?)
        <>
          <TodoList />
          <ListFooter />
        </>
      ) : null}
    </section>
  );
};

export default App;
