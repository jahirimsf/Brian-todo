import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function ToDo({todos, completeTodo,removeTodo,updateTodo }) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = (value) => {
        updateTodo(edit.id, value)

        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id){
        return <ToDoForm edit={edit} onSubmit={submitUpdate}/>
    }
    return todos.map((todo, index) => (
        <div 
        className={todo.isComplete ? 'todo_row complete' : 'todo_row'}
        key={index}>
            <div className="todo_text" key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                onClick={() => removeTodo(todo.id)}
                    className="delete_icon"
                />
                <TiEdit 
                    onClick={() => setEdit({id: todo.id, value: todo.text})}
                    className="edit_icon"
                />
            </div>
        </div>
    ));
}

export default ToDo
