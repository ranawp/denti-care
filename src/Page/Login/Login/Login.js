import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../../Shared/Loading/Loading';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate('')
    const location = useLocation()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });

    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>

    }



    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const passowrd = passwordRef.current.value;

        signInWithEmailAndPassword(email, passowrd)
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassowrd = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent');
        } else {
            toast('please enter your email address')
        }
    }

    return (
        <div className='container mx-auto w-50'>
            <h3 className='text-primary text-center mt-2'></h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {errorElement}
            <p>New To Denti care? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>Please Register. </Link> </p>
            <p>Forget Passowrd? <Link to='' className='text-primary text-decoration-none' onClick={resetPassowrd}>Reset Passowrd </Link> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer />

        </div>
    );
};

export default Login;