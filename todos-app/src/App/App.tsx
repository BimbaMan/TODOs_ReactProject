import { useEffect, useState } from "react";
import NewTodoInput from "./NewTodoInput/NewTodoInput";
import TodoList from "./TodoList/TodoList";
import ListFooter from "./ListFooter/ListFooter";
import MainHeader from "./MainHeader/MainHeader";
import { Todo } from "./models/Todos";
import { FilterType } from "./models/Filters";
import Copyright from "./Copyright/Copyright";

import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, dataBase } from "./Firebase/FirebaseConfig";
import AuthForm from "./Auth/AuthForm";
import { User } from "firebase/auth";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(LoadTodosFromLocalStorage);
  const [filter, setFilter] = useState<FilterType>("All");
  const filteredTodos =
    filter === "Active"
      ? todos.filter((todo) => !todo.completed)
      : filter === "Completed"
      ? todos.filter((todo) => todo.completed)
      : todos;

  const [authing, setAuthing] = useState<boolean>(true);

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
  ///////////////////////////////////////////////////////////FIREBASE/////////////////////////////////////////////////////////////////////////////
  //TODO: 1) auth always! (later add anonimus user) 2) firestore

  // //create todo
  // //read todo from firebase
  // useEffect(() => {
  //   const q = query(collection(dataBase, "todos"));
  //   // const q = query(
  //   //   collection(dataBase, "todos"),
  //   //   where("userId", "==", userid /*from app state*/)
  //   // );
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     let todosArr: Todo[] = [];
  //     querySnapshot.forEach((doc) => {
  //       todosArr.push({ ...(doc.data() as Todo), id: doc.id });
  //     });
  //     setTodos(todosArr);
  //   });
  //   return () => unsubscribe();
  // }, []);
  // //update todo in firebase
  // //delete todo

  // //react-router (to redirect routes)
  // //or render auth then app

  const updateAuthing = () => {
    setAuthing(!authing);
  };

  const [user, setUser] = useState<User | null>(auth.currentUser);

  const updateUser = (user: User | null) => {
    setUser(user);

    //updateAuthing();
  };

  return (
    <>
      {!authing ? (
        <section>
          <MainHeader
            setAuthing={updateAuthing}
            user={user}
            updateUser={updateUser}
          />
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
      ) : (
        <AuthForm setAuthing={updateAuthing} updateUser={updateUser} />
      )}
    </>
  );
};

export default App;
