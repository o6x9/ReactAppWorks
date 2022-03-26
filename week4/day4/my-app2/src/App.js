
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./redux/actions/todoActions"



function App() {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState("")
  const todos = useSelector((state) => console.log(state))
  console.log(todos)
  const addTodo = () => {
    dispatch(actions.addTodo(todoInput))
  }
  return (
    <div className="App">
      <h1>To Do List</h1>
      <input type="text"
        placeholder="add todo here.." value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
      <button onClik=""> add </button>

    </div>
  )
}
export default App;