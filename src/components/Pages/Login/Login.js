import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
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
        console.log(email);
       
    }
    

    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])
    useEffect(() => {
        if (error) {
            console.log(error.message);
        }
    }, [error])

    useEffect(() => {
        if (loading) {
            return <p>Loading....</p>
        }
    }, [])
    return (
        <div className='flex justify-center'>
          <div className=''>
              <div className='flex'>
                  <h2 className=''>Login</h2>
                  <div className='login-line'></div>
              </div>
              <form onSubmit={handleSubmitLogin}>
                  <input className='input input-bordered' onChange={handleEmailField} type="email" name="email" id="" placeholder='Email' />
                  <br />
                  {errors?.emailError && <p className='text-danger'>❌ {errors.emailError}</p>}
                  <br />
                  <input className='input input-bordered' onChange={handlePasswordField} type="password" name="password" id="" placeholder='Password' />
                  <br />
                  {errors?.passwordError && <p className='text-danger'>❌{errors.passwordError}</p>}
                  <br />
                  <div className='d-flex justify-content-between mt-6'>
                      <input className='btn btn-md w-full' type="submit" value="Login" />
                  </div>
              </form>
          </div>
         
      </div>
    );
};

export default Login;
