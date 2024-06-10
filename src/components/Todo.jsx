export const Todo = ({todo={}}) => {
  return (
    <div className="todo-item">
      <p className="todo-text">{todo.todo}</p>
      <span className="todo-date">completado : {todo.completed.toString()}</span>
    </div>
  );
};
