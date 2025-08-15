const TodoNew = (props) => {
  console.log(props)
  const {addNewTodo} = props
  addNewTodo("huy")
  return (
    <div className="todo-new">
      <input type="text" placeholder="" />
      <button className="btn">Add</button>
    </div>
  );
};

export default TodoNew;
