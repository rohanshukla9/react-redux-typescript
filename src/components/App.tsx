import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";
import '../index.css'

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
  deleteTodo(id: number): any;
}



class _App extends React.Component<AppProps> {

  onButtonClick = (): void => {
    this.props.fetchTodos()
  }

  onDeleteClick = (id: number): void => {
    this.props.deleteTodo(id)
  }

  displayType = <T, U>(id: T, name: U): void  =>{
    console.log(typeof(id) + ", " + typeof(name));
  } 

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div className="flex mb-4 items-center" key={todo.id}>
          {!todo.completed ? <p className="w-full text-grey-darkest">  {todo.title}</p> :  <p className="w-full line-through text-green">{todo.title}</p>}   
           
            <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
            <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={() => this.onDeleteClick(todo.id)} key={todo.id}>Remove</button>
        </div>
      );
    });
  }

  // componentDidMount() {
  //   this.props.fetchTodos();
  // }
  render(){
    return (
      <div className="h-100 w-full flex items-center justify-center bg-teal-300 font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
              <h1 className="text-grey-darkest">Todo List</h1>  <button onClick={this.onButtonClick}>Fetch</button>
              <div className="flex mt-4">
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
                  <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
              </div>
          </div>
          <div>
              {this.renderList()}
          </div>
        </div>
      </div>
    )

  }
}

const mapStateToProps = ({todos}: StoreState): {todos: Todo[]} => {
  return {
    todos
  }
}

export const App = connect(
  mapStateToProps,
  {fetchTodos, deleteTodo}
)(_App);