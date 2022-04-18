import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
        console.log(event.target)
    }
    return (
        <div>
            <h3 className='text-center'>Please register</h3>
            <div className='container mx-auto w-50'>
                <h3 className='text-primary text-center mt-2'></h3>
                <Form onClick={handleRegister}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="name" placeholder="Your Name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <p>Already have an acocunt?<Link to='/login' className='text-primary text-decoration-none'>Please Login. </Link> </p>
            </div>
        </div>
    );
};

export default Register;

// <from>
//                 <input type="text" name='name' id='' placeholder='Your Name' required />
//                 <br />
//                 <input type='email' name='name' id='' placeholder='Email Address' required />
//                 <input type='passowrd' name='passowrd' id='' placeholder='Passowrd' value='Register' />
//             </from>