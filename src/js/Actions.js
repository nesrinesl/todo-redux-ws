import AddTask from "../components/AddTask"
import { Delete_Task, Done_Task, Edit_Task } from "./ActionsTypes"



export const add_task =(newTask)=>{
return{
    type:AddTask,
    payload:newTask
}
}
export const dlete_task =(id)=>{
    return{
        type:Delete_Task,
        payload:id
    }
    }

    export const done_task =(id)=>{
        return{
            type:Done_Task,
            payload:id
        }
        }

        export const edit_task =(id,newTitle,newDescription)=>{
            return{
                type:Edit_Task,
                payload:{id,newTitle,newDescription}
            }
            }
            
