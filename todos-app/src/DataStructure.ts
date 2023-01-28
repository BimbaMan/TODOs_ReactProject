import { useState } from "react";

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export type todoListType = {
  todos: ITodo[];
};
