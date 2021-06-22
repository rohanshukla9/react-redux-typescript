import { FetchTodosActions, DeleteTodosAction } from "./todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodo
  //by default typescript assigns 0 to fetchtodos if we dont provide a unique string
}

export type Action = FetchTodosActions | DeleteTodosAction;