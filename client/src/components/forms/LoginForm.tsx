import React, { useState } from 'react'
import '../../stylesheets/LoginForm.css';
import { useNavigate } from 'react-router-dom'
// Formik and Yup
import { Formik} from 'formik';
import * as yup from 'yup';
//Bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// HTTP request to log in
import { LoginUser } from '../../services';

import { Auth } from '../../interfaces';

function LoginForm() {

    const initialValues: Auth = {
        email: '',
        password:''
    };

    const schema = yup.object().shape({
        email: yup.string().email('Invalid email format').required('Email is required'),
        password: yup.string().required('Password is required')
    });

    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const navigate = useNavigate();

  return (
    <div>
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, actions)=>{
            const authUser: Auth = {
                email: values.email,
                password: values.password
            };
            LoginUser(authUser).then((res)=>{
                if(res.data.status === 200){
                    sessionStorage.setItem('x-access-token',res.data.token);
                    sessionStorage.setItem('id',res.data.id);
                    navigate(`/me?id=${res.data.id}`);
                } else if(res.data.status === 404){
                    setMessage(res.data.message);
                    setError(true);
                }
            }).catch((error)=>{
                setMessage('An error ocurred');
                setError(true);
                console.log(`[LOGIN ERROR]: ${error}`)})
            .finally(()=>{
                actions.setSubmitting(false);
                actions.resetForm();
            })
        }}>

            {
                ({errors, values, touched, isSubmitting, handleSubmit, handleChange} ) => {
                    return (
                        isSubmitting ? <div className="spinner-border loading-login" role="status"></div> :
                        <div className='login-form'>
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control size='lg' type="email" placeholder="Enter email" name='email' value={values.email} onChange={handleChange} isValid={touched.email && !errors.email} isInvalid={!!errors.email}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control size='lg' type="password" placeholder="Password" name='password' value={values.password} onChange={handleChange} isValid={touched.password && !errors.password} isInvalid={!!errors.password}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button className='login-bt' variant="primary" type="submit">
                                    Sign in
                                </Button>
                            </Form>
                            {error && <div className='d-flex justify-content-center  mt-2  '> <i className="bi bi-x-circle"></i> <h2 className='error-msg mt-1'>{message} </h2> </div>}
                        </div>
                    )
                }
            }

        </Formik>

    </div>
  )
}

export default LoginForm