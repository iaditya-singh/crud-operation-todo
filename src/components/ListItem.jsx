const ListItem = ({ todo, removeTodo, editTodo }) => {
  return (
    <>
      <li className="list-group-item rounded-0">
        <p className="text-secondary">{todo.id}</p>
        <h4>{todo.text}</h4>
        <span className="float-end">
          <button
            className="btn btn-sm btn-warning rounded-0 mx-1"
            onClick={() => editTodo(todo)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-danger rounded-0 mx-1"
            onClick={() => removeTodo(todo.id)}
          >
            Delete
          </button>
        </span>
      </li>
    </>
  );
};

export default ListItem;
