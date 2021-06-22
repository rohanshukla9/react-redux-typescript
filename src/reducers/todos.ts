import {Todo, FetchTodosActions, ActionTypes} from "../actions";

export const todosReducer = (state: Todo[] = [], action: FetchTodosActions) => {

  switch(action.type){
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
}