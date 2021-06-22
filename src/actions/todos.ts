import { ActionTypes } from './types';
import axios from 'axios';
import { Dispatch } from 'redux';


export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

//pass this interface to dispatch generic function, strictly we are saying Typescript that we dont want anything else other than what is defined below
//highly recommended
export interface FetchTodosActions {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodosAction {
  type: ActionTypes.deleteTodo,
  payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async(dispatch: Dispatch) => {

    //get is an generic function
    const response = await axios.get<Todo[]>(url);


    //make sure we pass in correct types and properties to the object

    dispatch<FetchTodosActions>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    })

  }
} 

export const deleteTodo = (id: number): DeleteTodosAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  }
}