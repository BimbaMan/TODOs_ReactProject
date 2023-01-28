import { FilterType } from "../../models/Filters";
import "../../../App.css";

type Props = {
  filterTodosHandler(filterValue: string): void;
};

const FilterList = ({ filterTodosHandler }: Props) => {
  const setClassName = (flag: FilterType): void => {
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
