import React from 'react'
import Button from 'react-bootstrap/Button';
import { ITask } from '../../interfaces/';
import '../../stylesheets/Task.css';

interface Props {
  task: ITask,
  id: number,
  completeTask: (id: number) => void,
  deleteTask: (id:number) => void
}



function Task({task, id, completeTask, deleteTask}: Props) {
  return (
    <div className='task-box'>
        <p className={task.completed ? 'completed' : ''}>{task.description}</p>
        <div className='bt-box'>
          <Button onClick={()=>{completeTask(id)}} variant={task.completed ? 'success' : 'danger'}>
            {task.completed ? 'Completed' : 'Pendding'}
          </Button>
          <i onClick={()=>{deleteTask(id)}} className="bi bi-x"></i>
        </div>
    </div>
  )
}

export default Task