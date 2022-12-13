import {fetchPost} from "../../util/api";
import {useState} from "react";

const SideTodoCreate = ({isCreate}) => {

    const [todo,setTodo] = useState("")

    const btnCancel = () =>{
        alert('cancel')
        isCreate(false)
    }
    const btnSave = (e) =>{
        e.preventDefault();
        const data = {
            "todo":todo,
            "isDone":false,
        }
        fetchPost('http://localhost:3001/todos',data)
        isCreate(false)
    }
    return (<div className='side-todo-create'>
        <div className='side-todo-create-todo'>
            <input type='text' onChange={(e)=>setTodo(e.target.value)}/>
        </div>
            <div className='side-todo-create-todo-buttons'>
                <button className='side-todo-create-todo-button-cancel' onClick={btnCancel}>cancel</button>
                <button className='side-todo-create-todo-buttons-save' onClick={btnSave}>save</button>
            </div>
        </div>
    )
}
export default SideTodoCreate