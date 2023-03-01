import { useEffect, useState } from "react";
import NewTodoInput from "./NewTodoInput/NewTodoInput";
import TodoList from "./TodoList/TodoList";
import ListFooter from "./ListFooter/ListFooter";
import MainHeader from "./MainHeader/MainHeader";
import { Todo } from "./models/Todos";
import { FilterType } from "./models/Filters";
import Copyright from "./Copyright/Copyright";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, database } from "./Firebase/FirebaseConfig";
import AuthForm from "./Auth/AuthForm";
import { User } from "firebase/auth";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>("All");
  const filteredTodos =
    filter === "Active"
      ? todos.filter((todo) => !todo.completed)
      : filter === "Completed"
      ? todos.filter((todo) => todo.completed)
      : todos;
  const [user, setUser] = useState<User | null>(auth.currentUser);

  const filterTodosHandler = (filterValue: FilterType) => {
    setFilter(filterValue);
  };

  const addHandler = (input: Todo) => {
    setTodos((prev) => [...prev, input]);
    addTodoFirebase(input);
  };

  const toggleTodoHandler = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          //todo.completed = !todo.completed;
          toggleTodoFirestore(todo);
        }
        return todo;
      })
    );
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    removeTodoFirebase(id);
  };

  const updateUser = (user: User | null) => {
    setUser(user);
  };

  //create todo in firebase
  const addTodoFirebase = async (input: Todo) => {
    await addDoc(collection(database, "todos"), {
      text: input.text,
      completed: input.completed,
      userId: user?.uid,
    });
  };
  //read todo from firebase
  useEffect(() => {
    try {
      const q = query(
        collection(database, "todos"),
        where("userId", "==", user?.uid)
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const todosArr: Todo[] = [];
        querySnapshot.forEach((doc) => {
          todosArr.push({ ...(doc.data() as Todo), id: doc.id });
        });

        setTodos(todosArr);
      });
      return () => unsubscribe();
    } catch (error) {}
  }, [user]);

  //update todo in firebase
  const toggleTodoFirestore = async (todo: Todo) => {
    await updateDoc(doc(database, "todos", todo.id), {
      completed: !todo.completed,
    });
  };
  //delete todo in firebase
  const removeTodoFirebase = async (id: string) => {
    todos.map((todo) => {
      if (todo.id === id) {
        deleteDoc(doc(database, "todos", todo.id));
      }
      return todo;
    });
  };

  return (
    <>
      {user === null ? (
        <AuthForm updateUser={updateUser} />
      ) : (
        <section>
          <MainHeader user={user} updateUser={updateUser} />
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
      )}
    </>
  );
};

export default App;
