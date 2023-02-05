import React, { useEffect, useState } from 'react'
import TaskContainer from '../components/container/TaskContainer'
import Footer from '../components/dashboard/Footer';
import NavBar from '../components/dashboard/NavBar'


function FreePage() {


  const [name, setName] = useState<string>('User');
  


  return (
    <>
      <NavBar 
      name= {name}/>
      <TaskContainer/>
      <Footer />
    </>
      
  
  )
}

export default FreePage