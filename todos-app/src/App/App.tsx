import React from "react";
import NewTodoInput from "./NewTodoInput/NewTodoInput";
import "../App.css";

const App: React.FC = () => {
  return (
    <section className="todoapp">
      <NewTodoInput />
    </section>
  );
};

export default App;
