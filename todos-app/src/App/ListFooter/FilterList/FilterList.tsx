import { FilterType } from "../../models/Filters";
import { useState } from "react";

type Props = {
  filterTodosHandler(filterValue: string): void;
};

const FilterList = ({ filterTodosHandler }: Props) => {
  const [filter, setFilter] = useState<FilterType>("All");

  const setClassName = (flag: FilterType): void => {
    setFilter(flag);
    filterTodosHandler(flag);
  };

  return (
    <ul className="filters">
      <li>
        <a
          className={filter === "All" ? "selected" : ""}
          onClick={() => setClassName("All")}
        >
          All
        </a>
      </li>{" "}
      <li>
        <a
          className={filter === "Active" ? "selected" : ""}
          onClick={() => setClassName("Active")}
        >
          Active
        </a>
      </li>{" "}
      <li>
        <a
          className={filter === "Completed" ? "selected" : ""}
          onClick={() => setClassName("Completed")}
        >
          Completed
        </a>
      </li>
    </ul>
  );
};

export default FilterList;
