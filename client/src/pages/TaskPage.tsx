import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TaskContainer from '../components/container/TaskContainer'
import Footer from '../components/dashboard/Footer';
import NavBar from '../components/dashboard/NavBar'


import { userInfo } from '../services';

function TaskPage() {

  const navigate = useNavigate();

  const [name, setName] = useState<string>('');
  


  useEffect(()=>{
      const token = sessionStorage.getItem('x-access-token');
      const id = sessionStorage.getItem('id');
      if(token && id){
        userInfo(token,id).then((res)=>{
          if(res.status === 200){
            const user = res.data.user;
            setName(user.name);
          }else {
            navigate('/');
          }
        }).catch((error)=>{console.log(error)})
      } else{
        navigate('/');
      }
  },[]);



  return (
    <>
      <NavBar 
      name= {name}/>
      <TaskContainer/>

      <Footer />
    </>
      
  
  )
}

export default TaskPage