const TodoNew = (props) => {
  console.log(props);
  const { addNewTodo } = props;
  // addNewTodo("huy")

  const handleClick = () => {
    alert("click me");
  };

  const handleOnChange = (event) => {
    console.log("handleOnChange", event.target.value);
  };
  return (
    <div className="todo-new">
      <input type="text" placeholder="" 
        onChange={(event) => handleOnChange(event.target.value)} />
      <button
        style={{ cursor: "pointer" }}
        className="btn"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};

export default TodoNew;
