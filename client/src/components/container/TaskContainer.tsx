import React, { useState, useEffect} from 'react'
import { ITask } from '../../interfaces/'
import TaskForm from '../forms/TaskForm'
import Task from '../pure/Task'
import '../../stylesheets/TaskContainer.css'

//Bootstraps components
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
// HTTP Requests to server
import {saveTasks, userInfo} from '../../services'



function TaskContainer() {

    const [tasks, setTasks] = useState<ITask[]>([]);
    const [saveChanges, setSaveChanges] = useState<boolean>(false);

    useEffect(()=>{
        const token = sessionStorage.getItem('x-access-token');
        const id = sessionStorage.getItem('id');
        if(token && id){
            userInfo(token,id).then((res)=>{
              if(res.status === 200){
                const user = res.data.user;
                setTasks(user.tasks);
              }

            }).catch((error)=>{console.log(error)})
          }
    },[]);

    const createTask = (task:ITask)=>{
        const CopyTasks = [...tasks];
        CopyTasks.push(task);
        setTasks(CopyTasks);
        setSaveChanges(true);
    };

    const completeTask = (id:number) =>{
        const CopyTasks = [...tasks];
        CopyTasks[id].completed = !CopyTasks[id].completed;
        setTasks(CopyTasks);
        setSaveChanges(true);

    };

    const deleteTask = (id:number)=>{
        const CopyTasks = [...tasks];
        CopyTasks.splice(id,1);
        setTasks(CopyTasks);
        setSaveChanges(true);
    };

    const handleTasks = ()=>{
        const token = sessionStorage.getItem('x-access-token');
        const id = sessionStorage.getItem('id');
        const copyTasks = [...tasks];
        if (token && id){
            
            saveTasks(copyTasks, token, id).then((res)=>{
                let userTasks = res.data.tasks.tasks;
                setTasks(userTasks);
                setSaveChanges(false);
            })
        }
    }


  return (
    <>
        <div className='task-container'>
            <TaskForm createTask={createTask} />
            {tasks.length < 1 ?
            <h1 className='no-tasks'>No Tasks</h1>
            :
            tasks.map((task, index)=>{
                return (<Task
                    key={index}
                    id={index}
                    task={task}
                    completeTask={completeTask}
                    deleteTask={deleteTask} />)
            })}
            
        </div>
    
        {saveChanges ?  
            <Button onClick={handleTasks} variant="primary" size="lg" className='mt-2 save-bt'>
                Save changes
            </Button>
         
            : 

            <Alert variant='success' className='mt-2 save-bt'>
            No changes detected.
            </Alert>
         
         }
    </>
  )
}

export default TaskContainer