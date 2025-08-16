import { useState } from "react";

const TodoNew = (props) => {
    //useStae hook (getter / setter)

    // const valueInput = "zindo";

    const [valueInput, setValueInput] = useState("zindo");

    const { addNewTodo } = props;
    // addNewTodo("huy") // fire

    const handleClick = () => {
        addNewTodo(valueInput)
    };

    const handleOnChange = (name) => {
        setValueInput(name);
    };

    return (
        <div className="todo-new">
            <input
                type="text"
                placeholder=""
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                style={{ cursor: "pointer" }}
                className="btn"
                onClick={handleClick}
            >
                Add
            </button>
            <div>My text input is = {valueInput}</div>
        </div>
    );
};

export default TodoNew;
