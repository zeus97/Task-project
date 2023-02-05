import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/forms/RegisterForm'
import '../stylesheets/HomePage.css';

import Modal from 'react-bootstrap/Modal';

import LoginForm from '../components/forms/LoginForm';

import { userInfo } from '../services';
import Footer from '../components/dashboard/Footer';


function HomePage() {

  const navigate = useNavigate();

  useEffect(()=>{
    const token = sessionStorage.getItem('x-access-token');
      const id = sessionStorage.getItem('id');
      if(token && id){
        userInfo(token,id).then((res)=>{
          if(res.status === 200){
             navigate('/me');
          }
        })
      }
  },[])
  
  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  
  return (
    <div className='home-page'>
      <header>
        <nav>
          <p onClick={handleShow}>Log in</p>
          <p onClick={()=>{navigate('/free')}}>Try it free</p>
        </nav>
      </header>
      <h1 className='home-page-title'>Task Manager</h1>
      <RegisterForm/>

      {
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton />
          <LoginForm />
        </Modal>
      }

      <Footer />
    </div>
  )
}

export default HomePage