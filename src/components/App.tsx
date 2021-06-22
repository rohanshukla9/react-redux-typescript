import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";


interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}



class _App extends React.Component<AppProps> {

  onButtonClick = (): void => {
    this.props.fetchTodos()
  }

  displayType = <T, U>(id: T, name: U): void  =>{
    console.log(typeof(id) + ", " + typeof(name));
  } 

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>
    })
  }

  // componentDidMount() {
  //   this.props.fetchTodos();
  // }
  render(){
    return <div> <button onClick={this.onButtonClick}>Fetch</button>
    {/* {this.displayType<number, string>(1, "Rohan")} */}
    {this.renderList()}
    </div>

  }
}

const mapStateToProps = ({todos}: StoreState): {todos: Todo[]} => {
  return {
    todos
  }
}

export const App = connect(
  mapStateToProps,
  {fetchTodos}
)(_App);