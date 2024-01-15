import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { dlete_task, done_task, edit_task } from '../js/Actions';

const TodoCard = ({task}) => {
  const [showEdit,setShowEdit]=useState(false);
  const [showDelete,SetShowDelete]=useState(false);


  const [newTitle,setNewTitle]=useState("");
  const [newDescription,setNewDescription]=useState("");

const handleCloseEdit =()=>setShowEdit(false);
const handleShowEdit =()=>setShowEdit(true);

const handleCloseDelete =()=>SetShowDelete(false);
const handleShowDelete =()=>SetShowDelete(true);
  
const dispatch =useDispatch()



const handleDeleteTask=()=>{
  dispatch(dlete_task(task.id))
}
const handleDoneTask=()=>{
  dispatch(done_task(task.id))
}
const handleEditTask=()=>{
  dispatch(edit_task(task.id,newTitle,newDescription))
  handleCloseEdit()
}
  return (
    <div style={{background:task.isDone?"lightblue":"white",border:"1px solid"}} >
      <h3>{task.title}</h3>
      <h4>{task.description}</h4>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <Button onClick={handleDoneTask} variant='outline-success'>Done</Button>
        <Button onClick={handleShowEdit} variant='warning'>Edit</Button>
        <Button onClick={()=>handleShowDelete()} variant='danger'>x</Button>


      </div>
{/*modal delete*/}
<Modal showDelete={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Are you sure you want to delete this task! 
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDeleteTask}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

{/*edit task
 */}
      <Modal
        show={showEdit}
        onHide={handleCloseEdit}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit task </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control onChange={(e)=>setNewTitle(e.target.value)}  placeholder='Edit the title' />
        <Form.Control  onChange={(e)=>setNewDescription(e.target.value)}  placeholder='Edit the description' />
        </Modal.Body>
       

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button onClick={()=>handleEditTask()} variant="primary">Edit</Button>
        </Modal.Footer>
      </Modal>


    </div>

  )
}

export default TodoCard