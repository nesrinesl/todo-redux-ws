import { Add_Task, Delete_Task, Done_Task, Edit_Task } from "./ActionsTypes"

const intialState = {
  listTasks: [
    {
      id: Math.random(),
      title: "task 1",
      desription: "desription 1",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "task 2",
      desription: "desription 2",
      isDone: true,
    },
    {
      id: Math.random(),
      title: "task 3",
      desription: "desription 3",
      isDone: false,
    },
  ],
}


 export const todoReducer =(state=intialState,{type,payload})=>{
    switch (type) {
        case Add_Task:
          return {...state,listTasks:[...state.listTasks,payload]}
            case Delete_Task:
              return {...state,listTasks:state.listTasks.filter((task)=>task.id!==payload)}
              case Done_Task:
                return {...state,listTasks:state.listTasks.map((task)=>task.id===payload? {...task,isDone:!task.isDone}:task)}
           case Edit_Task:
            return{...state,listTasks:state.listTasks.map((task)=>task.id===payload.id ?{...task,title:payload.newTitle,desription:payload.newDescription}:task)}
    
        default:
           return state
    }
}
