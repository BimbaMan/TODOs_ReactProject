import { Todo } from "../models/Todos";
import FilterList from "./FilterList/FilterList";

type Props = {
  todos: Todo[];
  onRemove(id: string): void;
  filterTodosHandler(filterValue: string): void;
};

const ListFooter = ({ todos, onRemove, filterTodosHandler }: Props) => {
  const completedCount: number = todos.filter(
    (todo) => todo.completed === true
  ).length;
  const backlogCount: number = todos.filter(
    (todo) => todo.completed === false
  ).length;

  const clearCompleted = () => {
    todos.forEach((todo) => {
      if (todo.completed) {
        onRemove(todo.id);
      }
    });
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        {backlogCount === 1 ? (
          <>
            <strong>{backlogCount}</strong> item left
          </>
        ) : (
          <>
            <strong>{backlogCount}</strong> items left
          </>
        )}
      </span>

      <FilterList filterTodosHandler={filterTodosHandler} />
      {completedCount > 0 && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default ListFooter;
