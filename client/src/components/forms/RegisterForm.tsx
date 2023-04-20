import React, {useState} from 'react'
import '../../stylesheets/RegisterForm.css';
import { Register } from '../../interfaces';
// Formik and Yup
import { Formik} from 'formik';
import * as yup from 'yup';
//Bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// Request to sign up
import { RegisterUser } from '../../services';

function RegisterForm() {

    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [errorServer, setErrorServer] = useState<boolean>(false);

    const initialValues: Register = {
        name: '',
        email: '',
        password:''
    };

    const schema = yup.object().shape({
        name: yup.string().min(5,'Name too short').max(20,'Name too long').required('Name is required'),
        email: yup.string().email('Invalid email format').required('Email is required'),
        password: yup.string().min(6,'Password too short').max(20,'Password too long').required('Password is required')
    });

  

  return (
    <div className='register-form-box'>
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values,actions) =>{ 
            const newUser: Register = {
                name: values.name,
                email: values.email,
                password: values.password
            }
            RegisterUser(newUser).then((res)=>{
                setSuccess(false);
                setError(false);
                setErrorServer(false);
                if (res.data.status === 200){setSuccess(true)}
                else if(res.data.status === 404){setError(true)}
            }).catch((error)=>{
                console.log(`[REGISTER ERROR]: ${error}`);
                setErrorServer(true);})
                .finally(()=>{actions.setSubmitting(false);
                    actions.resetForm({values:initialValues})}) 
        }}>

            {
                ({errors, values, touched, isSubmitting, handleSubmit, handleChange} ) => {
                    return (
                        isSubmitting ? <div className="spinner-border loading-register" role="status"></div> :
                        <div className='register-form'>
                            <h2 className='register-form-title'>Sign up</h2>
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Control size='lg' type="text" placeholder="Enter name" name='name' value={values.name} onChange={handleChange} isValid={touched.name && !errors.name} isInvalid={!!errors.name}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control size='lg' type="email" placeholder="Enter email" name='email' value={values.email} onChange={handleChange} isValid={touched.email && !errors.email} isInvalid={!!errors.email}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control size='lg' type="password" placeholder="Password" name='password' value={values.password} onChange={handleChange} isValid={touched.password && !errors.password} isInvalid={!!errors.password}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button className='register-bt' variant="primary" type="submit">
                                    Sign up
                                </Button>
                            </Form>
                            {success && <div className='d-flex justify-content-center  mt-2 '><i className="bi bi-check-circle"></i> <h2 className='register-msg'>Registration success</h2> </div>}
                            {error && <div className='d-flex justify-content-center  mt-2  '> <i className="bi bi-x-circle"></i> <h2 className='error-msg mt-1'>The email is already in use</h2> </div>}
                            {errorServer && <div className='d-flex justify-content-center  mt-2  '> <i className="bi bi-x-circle"></i> <h2 className='error-msg mt-1'>An error ocurred, please try later.</h2> </div>}
                        </div>
                    )
                }
            }

        </Formik>

    </div>
  )
}

export default RegisterForm