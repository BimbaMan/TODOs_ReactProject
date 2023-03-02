import { Timestamp } from "firebase/firestore";

export type Todo = {
  date: Timestamp;
  id: string;
  text: string;
  completed: boolean;
};
