import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_task } from '../js/Actions'
import { Button, Form } from 'react-bootstrap'

const AddTask = () => {
    const dispatch=useDispatch()
    const [todo,setTodo]=useState("")
    const handelAddTask =()=>{
        dispatch(add_task({id:Math.random(),title:todo.slice(0,5).concat("..."),description:todo,isDone:false}))
    }
  return (
    <div style={{display:'flex',margin:"6px 20px"}}>
<Form.Control onChange={(e)=>setTodo(e.target.value)} placeholder='Add a new task here '/>
<Button onClick={()=>handelAddTask()}>ADD TASK</Button>
    </div>
  )
}

export default AddTask