import { useState } from "react";
import "./InputTodo.css";

const InputTodo = ({ todo }) => {
  const [inputTodo, setInput] = useState([]);

  return (
    <div className="input-todo">
      <div>
        <input
          className="input"
          type="text"
          placeholder="Adicionar tarefa"
          value={inputTodo}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>
      <div>
        <button className="btn-add-todo" onClick={() => todo(inputTodo)}>
          Adicionar
        </button>
      </div>
    </div>
  );
};
export default InputTodo;
