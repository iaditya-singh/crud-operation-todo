import React, { useEffect, useState } from "react";

const Form = ({ addTodo, edit, updateTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit.isEdit === false) {
      addTodo(text);
    } else {
      updateTodo(edit.todo.id, text);
    }

    setText("");
  };

  useEffect(() => {
    setText(edit.todo.text);
  }, [edit]);

  return (
    <form className="my-3" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="form-control rounded-0"
        placeholder="Enter Text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className="my-3 btn btn-success w-100 rounded-0">Save</button>
    </form>
  );
};

export default Form;
