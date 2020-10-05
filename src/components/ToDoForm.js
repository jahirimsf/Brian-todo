import React,{useState, useEffect, useRef} from 'react'

function ToDoForm(props) {
    const [input,setInput] = useState("");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = (e)=> {
        setInput(e.target.value)
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
         })
        setInput("");
    };

    return (
        <form className="todo_form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <input 
            type="text" 
            placeholder="Update your item" 
            className="todo_input edit"
            onChange={handleChange}
            value={input}
            ref={inputRef}
            >         
            </input>
            <button className="todo_button edit">Update</button>
            </>
            ) : (
                <>
                <input 
            type="text" 
            placeholder="Add a todo" 
            className="todo_input"
            onChange={handleChange}
            value={input}
            ref={inputRef}
            >         
            </input>
            <button className="todo_button">Add todo</button>
            </>
            )}
            
            
        </form>
    )
}

export default ToDoForm
