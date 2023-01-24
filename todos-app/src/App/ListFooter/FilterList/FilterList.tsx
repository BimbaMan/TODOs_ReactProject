import React from "react";
import "../../../App.css";

type FilterListProps = {
  filterTodosHandler(filterValue: string): void;
};

const FilterList: React.FC<FilterListProps> = ({ filterTodosHandler }) => {
  const setClassName = (flag: string): void => {
    const selectedAll = document.querySelectorAll("li > a");
    for (let element of selectedAll) {
      if (element.textContent === flag) {
        element.className = "selected";
      } else {
        element.className = "";
      }
    }
    switch (flag) {
      case "All": {
        filterTodosHandler(flag);
        break;
      }
      case "Active": {
        filterTodosHandler(flag);
        break;
      }
      case "Completed": {
        filterTodosHandler(flag);
        break;
      }
    }
  };

  return (
    <ul className="filters">
      <li>
        <a className="selected" onClick={() => setClassName("All")}>
          All
        </a>
      </li>{" "}
      <li>
        <a className="" onClick={() => setClassName("Active")}>
          Active
        </a>
      </li>{" "}
      <li>
        <a className="" onClick={() => setClassName("Completed")}>
          Completed
        </a>
      </li>
    </ul>
  );
};

export default FilterList;
