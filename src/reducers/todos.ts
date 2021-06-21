import { Todo, FetchTodosActions } from "../actions";
import { ActionTypes } from "../actions/types";

export const todosReducer = (state: Todo[] = [], action: FetchTodosActions) => {

  switch(action.type){
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
}