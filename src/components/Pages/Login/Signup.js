import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import SocialLogin from './SocialLogin';
import { toast, ToastContainer } from 'react-toastify';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user)
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: ""
    })

    // validation check of email, password and confirm password
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
    const handleConfirmPasswordField = e => {
        const confirmPasswordField = e.target.value;
        if (confirmPasswordField === userData.password) {
            setUserData({ ...userData, confirmPassword: confirmPasswordField });
            setErrors({ ...errors, passwordError: "" })
        }
        else {
            setErrors({ ...errors, passwordError: "Password doesn't matched!" })
            setUserData({ ...userData, confirmPassword: "" })
        }
    }

    if (token) {
        navigate('/')
    }

    useEffect(() => {
        if (loading) {
            return <p>Loading.....</p>
        }
    }, [])
    useEffect(() => {
        if (error) {
            toast.error(error.message,{
                position: 'top-center'
            })
        }
    }, [error])

        // create user 
        const handleSubmitSignUp = e => {
            e.preventDefault();
            const name = e.target.name.value;
            createUserWithEmailAndPassword(userData.email, userData.password);
            updateProfile({ displayName: name })
        }
       
        return (

            <div className='flex justify-center'>
                <div className='w-1/4 mb-5'>
                    <div className='flex'>
                        <h2 className='text-2xl font-semibold my-5'>Signup</h2>
                    </div>
                    <form onSubmit={handleSubmitSignUp}>
                        <input className='input input-bordered w-full' type="text" name="name" id="" placeholder='Name' required />
                        <br /><br />
                        <input className='input input-bordered w-full' onChange={handleEmailField} type="email" name="email" id="" placeholder='Email' required />
                        <br />
                        {errors?.emailError && <p className='text-danger'>❌ {errors.emailError}</p>}
                        <br />
                        <input className='input input-bordered w-full' onChange={handlePasswordField} type="password" name="password" id="" placeholder='Password' required />
                        <br />
                        {errors?.passwordError && <p className='text-danger'>❌{errors.passwordError}</p>}
                        <br />
                        <input className='input input-bordered w-full' onChange={handleConfirmPasswordField} type="password" name="confirmPassword" id="" placeholder='confirm password' required />
                        <br />
                        <div className='d-flex justify-content-between mt-6'>
                            <input className='btn btn-md w-full' type="submit" value="Signup" />
                        </div>
                        <p>Already have an account? <Link className='btn-link' to='/login'>Login</Link></p>
                    </form>
                    <div className='d-flex justify-content-center mt-3'>
                        <div className='line'>

                        </div>
                        <div class="divider">OR</div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    };

    export default Signup;