import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  //todos
  const [todos, setTodos] = useState([]);

  const [edit, setEdit] = useState({
    todo: {},
    isEdit: false,
  });

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (text) => {
    setTodos([{ text: text, id: crypto.randomUUID() }, ...todos]);
  };

  const editTodo = (oldTodo) => {
    setEdit({
      todo: oldTodo,
      isEdit: true,
    });
  };

  const updateTodo = (oldId, newText) => {
    const updatedTodo = {
      id: oldId,
      text: newText,
    };

    setTodos(todos.map((item) => (item.id === oldId ? updatedTodo : item)));

    setEdit({ todo: {}, isEdit: false });
  };

  return (
    <>
      <Navbar />
      <div className="container p-5">
        <Form addTodo={addTodo} edit={edit} updateTodo={updateTodo} />
        <ListGroup todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
      </div>
    </>
  );
}

export default App;
