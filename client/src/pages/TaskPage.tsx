import React, { useEffect, useState } from 'react'

//React Router
import { useNavigate, useSearchParams } from 'react-router-dom'

//Components
import TaskContainer from '../components/container/TaskContainer'
import Footer from '../components/dashboard/Footer';
import NavBar from '../components/dashboard/NavBar'


import { userInfo } from '../services';

function TaskPage() {

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  

  const [name, setName] = useState<string>('');
  


  useEffect(()=>{
      const token = sessionStorage.getItem('x-access-token');
      const id = searchParams.get("id");
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