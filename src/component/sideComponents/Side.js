import {TodoButton} from "./SideStyleComponent";
import useFetch from "../../util/useFetch";
import SideTodo from "./SideTodo";
import React, {useState} from "react";
import SideTodoCreate from "./SideTodoCreate";

const Side = () => {
    const [datas, isPending, error] = useFetch("http://localhost:3001/todos");
    const [create, isCreate] = useState(false)
    const createTodo = (e) =>{
        isCreate(true)
    }
    return (
        <div className='side'>
            {error && <div>error</div>}
            {!create?<TodoButton onClick={createTodo}>What<br/>should<br/>I do<br/>today ?</TodoButton>:<SideTodoCreate isCreate={isCreate}/>}
            <hr className='side-title-hr'/>
            {isPending && <div>Loading</div>}
            {datas && <div>
                {datas.map((data) =>
                    <li className='side-title-li' key={data.id}>
                        <SideTodo id={data.id} isChecked={data.isDone} todo={data.todo}/>
                        <hr className='side-todo-hr'/>
                    </li>
                )}
            </div>}
        </div>
    )
}
export default Side
