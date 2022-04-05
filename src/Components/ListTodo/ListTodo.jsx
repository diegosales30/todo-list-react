import "./ListTodo.css";

const ListTodo = ({ newTodo, removeTodo }) => {
  return (
    <>
      {newTodo.length === 0 ? (
        <div>
          <h3>Que pena!! 😞</h3>
          <h3>Ainda não há tarefas</h3>
        </div>
      ) : (
        <ul className="ul-todo-list">
          {newTodo.map((currentTodo, index) => (
            <li className="list-todos" key={index}>
              <div>
                <h5>{currentTodo}</h5>
              </div>
              <div>
                <button onClick={() => removeTodo(index)}>X</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default ListTodo;
