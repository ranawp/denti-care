import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, Updateerror] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home')
    }

    if (user) {
        console.log(user)
    }

    if (loading || updating) {
        return <Loading></Loading>
    }


    return (
        <div className='register-form'>
            <h2 className='text-center'>Please register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' id="" /> <br />

                <input type="email" name="email" id="" placeholder='email Address' required />
                <br />
                <input type="password" name="password" placeholder='password' id="" required />
                <input

                    className='  mx-auto mt-2' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin} >Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;

//





// const [
//     createUserWithEmailAndPassword,
//     user,
//     loading,
//     error,
// ] = useCreateUserWithEmailAndPassword(auth);

// const namelRef = useRef('')
// const emailRef = useRef('')
// const passowrdRef = useRef('')
// const navigate = useNavigate('')

// const handleRegister = event => {
//     event.preventDefault();
//     const name = namelRef.current.value;
//     const email = emailRef.current.value;
//     const password = passowrdRef.current.value;
//     createUserWithEmailAndPassword(name, email, password)
// }

// <div className='container mx-auto w-50'>
//                 <h3 className='text-primary text-center mt-2'></h3>
//                 <Form onSubmit={handleRegister}>
//                     <Form.Group className="mb-3" controlId="name" >
//                         <Form.Label>Your Name</Form.Label>
//                         <Form.Control ref={namelRef} type="name" placeholder="Your Name" name='name' required />

//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control ref={emailRef} type="email" placeholder="Enter email" name='email' required />
//                         <Form.Text className="text-muted">
//                             We'll never share your email with anyone else.
//                         </Form.Text>
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control ref={passowrdRef} type="password" placeholder="Password" name='passowrd' required />
//                     </Form.Group>

//                     <Button variant="primary" type="submit">
//                         Register
//                     </Button>
//                 </Form>
//                 <p>Already have an acocunt?<Link to='/login' className='text-primary text-decoration-none'>Please Login. </Link> </p>
//             </div>