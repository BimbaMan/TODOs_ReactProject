import React from "react";
import FilterList from "./FilterList/FilterList";

const ListFooter: React.FC = () => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>1</strong> item left
      </span>

      <FilterList />

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default ListFooter;
