export interface Todo {
  // id: string;
  text: string;
  completed: boolean;
}

export type TodoListType = Todo[];

//export TodoListType TodoList= {};
//I NEED A GLOBAL VARIABLE YodoList

export interface AppState {
  todoList: TodoListType;
}
