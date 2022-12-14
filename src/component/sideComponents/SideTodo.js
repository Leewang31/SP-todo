import React, {useState} from 'react'
import {TodoDelete, TodoEditSave} from "./SideStyleComponent";
import {fetchDelete, fetchPut} from "../../util/api";

const SideTodo = ({id, isChecked, todo}) => {
    const [isCheck, setIsCheck] = useState(isChecked);
    const [textEdit, setTextEdit] = useState(false);
    const [text, setText] = useState(todo);
    const onDelete = (e) => {
        e.preventDefault();
        fetchDelete('http://localhost:3001/todos/', id)
    }
    const onCheck = (e) => {
        e.preventDefault();
        const data = {
            "id": id,
            "todo": todo,
            "isDone": !isChecked,
        }
        fetchPut('http://localhost:3001/todos/', id, data)
    }
    const onText = () => {
        setTextEdit(true)
    }
    const nonText = (e) => {
        setTextEdit(false)
        e.preventDefault();
        const data = {
            "id": id,
            "todo": text,
            "isDone": isChecked,
        }
        fetchPut('http://localhost:3001/todos/', id, data)

    }

    return (
        <div className='side-todo'
             style={isCheck ? {"background-color": "var(--main--hover--color)"} : {"background-color": "var(--main--bg--color)"}}>
            <input className='side-todo-checkbox' type='checkbox'
                   checked={isCheck}/><label htmlFor="side-todo-checkbox" onClick={onCheck}></label>
            <span className='side-todo-text' onClick={onText}>
                {textEdit ? <input type='text' value={text} onChange={(e) => {
                    setText(e.target.value)
                }}/> : <input type='text' value={todo} disabled/>}
            </span>
            {textEdit ? <TodoEditSave onClick={nonText}><img src='/img/done_outline.svg'/></TodoEditSave> : <div/>}
            <TodoDelete onClick={onDelete}>
                <img src='/img/close.svg'/>
            </TodoDelete>
        </div>
    )
}
export default SideTodo
