import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Shared/Loading';
import SocialLogin from './SocialLogin';
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
    const [verified, setVerified] = useState(false);
    // recaptha function
    function onChange(value) {
        setVerified(true)
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: ""
    })

    const [token] = useToken(user)
    // get email field and validation 
    const handleEmailField = e => {
        const emailInput = e.target.value;
        const emailRegx = /\S+@\S+\.\S+/;
        if (emailRegx.test(emailInput)) {
            setUserData({ ...userData, email: emailInput });
            setErrors({ ...errors, emailError: "" })
        }
        else {
            setErrors({ ...errors, emailError: "Invalid Email!" })
            setUserData({ ...userData, email: "" })
        }
    }
    // get password and validation check 
    const handlePasswordField = e => {
        const passwordInput = e.target.value;
        if (passwordInput.length >= 6) {
            setUserData({ ...userData, password: passwordInput });
            setErrors({ ...errors, passwordError: "" })
        }
        else {
            setErrors({ ...errors, passwordError: "Password should container minimum 6 characters!" });
            setUserData({ ...userData, password: "" })
        }
    }

    // submit login 
    const handleSubmitLogin = e => {
        e.preventDefault();
        const email = userData.email;
        signInWithEmailAndPassword(userData.email, userData.password)
    }


    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
    useEffect(() => {
        if (error) {
            toast.error(error.message, {
                position: 'top-center'
            })
        }
    }, [error])

    useEffect(() => {
        if (loading) {
            return <Loading></Loading>
        }
    }, [])
    return (
        <div className='flex justify-center'>
            <div className='w-1/4 mb-5'>
                <div className='flex'>
                    <h2 className='text-2xl font-semibold my-5'>Login</h2>
                    <div className='login-line'></div>
                </div>
                <form onSubmit={handleSubmitLogin}>
                    <input className='input input-bordered w-full' onChange={handleEmailField} type="email" name="email" id="" placeholder='Email' />
                    <br />
                    {errors?.emailError && <p className='text-danger'>❌ {errors.emailError}</p>}
                    <br />
                    <input className='input input-bordered w-full mb-6' onChange={handlePasswordField} type="password" name="password" id="" placeholder='Password' />
                    <br />
                    {errors?.passwordError && <p className='text-danger'>❌{errors.passwordError}</p>}

                    <div className='flex justify-center'>
                    <ReCAPTCHA
                        sitekey={`${process.env.device_site_key}`}
                        onChange={onChange}
                    />
                    </div>
                    <div className='d-flex justify-content-between mt-6'>
                        <input disabled={!verified} className='btn btn-primary btn-md w-full' type="submit" value="Login" />
                    </div>
                    <p>New in our website? <Link className='btn-link' to='/signup'>Sign up</Link></p>
                </form>
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
