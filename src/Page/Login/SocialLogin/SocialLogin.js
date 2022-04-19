import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitHubuser, gitHubloading, gitHuberror] = useSignInWithGithub(auth);

    const navigate = useNavigate()
    let errorElement;

    if (loading) {
        <Loading></Loading>
    }

    if (error || gitHubuser) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {gitHubuser?.message}</p>
        </div>


    }
    if (user || gitHubuser) {
        navigate('/home')
    }

    return (
        <div>
            <div></div>
            or
            <div className='mx-auto'> <button
                onClick={() => signInWithGoogle()}
                className=' button-color  '>Sign in with Google</button>
                <br /><button
                    onClick={() => signInWithGithub()}
                    className='mt-3   mb-3 button-color'>Sign in with Github</button>
            </div>
            {errorElement}
        </div>
    );
};

export default SocialLogin;