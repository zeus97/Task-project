import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import { ITask } from '../../interfaces'
import '../../stylesheets/TaskForm.css'

interface Props {
    createTask: (task:ITask) => void
}

function TaskForm({createTask}:Props) {

    

    const [newTask, setNewtask] = useState<ITask>({
        description: '',
        completed: false
    })

    const [error, setError] = useState<boolean>(false);
  

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        if(newTask.description.length === 0 ){
            setError(true);
        } else{
            setError(false);
            createTask(newTask);
            setNewtask({
                description: '',
                completed: false
            })
        }

        

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        let input = {
            description: e.target.value,
            completed: false
        };
        setNewtask(input);
    }
  return (
    <>
        <form className='form-task' onSubmit={handleSubmit}>
            <label htmlFor='description'>Your Task</label>
            <input onChange={handleChange}
            type='text'
            name='description'
            value={newTask.description}
            placeholder='New task...'
            id='description'
            />
            <Button variant='primary' type="submit"  className='btn-task' > Create </Button>
        </form>

        {error && <div className='error-box'>
                <i className="bi bi-x-circle "></i>
                <h1 className='error-msg'>Define a task</h1> 
                </div>  }
    
    
    </>
  )
}

export default TaskForm