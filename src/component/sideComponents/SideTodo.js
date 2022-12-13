import React, {useState} from 'react'
import {TodoDelete} from "./SideStyleComponent";
import {fetchDelete} from "../../util/api";

const SideTodo = ({id, isChecked, todo}) => {
    const [isCheck, setIsCheck] = useState(isChecked);
    const onDelete = (e) => {
        e.preventDefault();
        fetchDelete('http://localhost:3001/todos/', id)
    }
    const onCheck = (e) => {
        setIsCheck(!isCheck)
        // ! 체크여부 업데이트
    }
    const onText = ()=>{
        alert('텍스트 업데이트 예정')
        // ! 텍스트 업데이트
    }

    return (
        <div className='side-todo'
             style={isCheck ? {"background-color": "var(--main--hover--color)"} : {"background-color": "var(--main--bg--color)"}}>
            <input className='side-todo-checkbox' type='checkbox'
                   checked={isCheck}/><label htmlFor="side-todo-checkbox" onClick={onCheck}></label>
            <span className='side-todo-text' onClick={onText}>{todo}</span>
            <TodoDelete onClick={onDelete}>
                <img src='/img/close.svg'/>
            </TodoDelete>
        </div>
    )
}
export default SideTodo
