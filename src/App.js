import "./App.css";
import InputTodo from "./Components/InputTodo/InputTodo";
import ListTodo from "./Components/ListTodo/ListTodo";
import { useState } from "react";
function App() {
  const [newTodo, setNewTodo] = useState([]);

  const todo = (valueInput) => {
    setNewTodo([...newTodo, valueInput]);
  };

  const removeTodo = (indexInput) => {
    const remove = newTodo.filter((current, index) => index !== indexInput);
    setNewTodo(remove);
  };
  console.log(newTodo);
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-principal">
          <div className="todo-title">
            <h2>Lista de tarefas</h2>
          </div>
          <InputTodo todo={todo} />
          <div className="container-todo">
            <ListTodo newTodo={newTodo} removeTodo={removeTodo} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
