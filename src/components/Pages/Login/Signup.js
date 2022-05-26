import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import SocialLogin from './SocialLogin';

const Signup = () => {
  const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

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

  // get email, password and confirm password and validation check 
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
//   useEffect(() => {
//       if (token) {
//           navigate('/')
//       }
//   }, [user])

  useEffect(()=>{
      if(loading){
          return <p>Loading.....</p>
      }
  },[])

  // create user 
  const handleSubmitSignUp = e => {
      e.preventDefault();
      createUserWithEmailAndPassword(userData.email, userData.password)
  }
  // // error from firebase 
  // useEffect(()=>{
  //     if(error){
  //         console.log(error);
  //         // toast.error(error.message,{
  //         //    position: "top-center",
  //         })
  //     }
  // },[error])
  return (

      <div className='flex justify-center'>
          <div className='w-1/4 mb-5'>
              <div className='flex'>
                  <h2 className='text-2xl font-semibold my-5'>Signup</h2>
              </div>
              <form onSubmit={handleSubmitSignUp}>
                  <input className='input input-bordered w-full' onChange={handleEmailField} type="email" name="email" id="" placeholder='Email' />
                  <br />
                  {errors?.emailError && <p className='text-danger'>❌ {errors.emailError}</p>}
                  <br />
                  <input className='input input-bordered w-full' onChange={handlePasswordField} type="password" name="password" id="" placeholder='Password' />
                  <br />
                  {errors?.passwordError && <p className='text-danger'>❌{errors.passwordError}</p>}
                  <br />
                  <input className='input input-bordered w-full' onChange={handleConfirmPasswordField} type="password" name="confirmPassword" id="" placeholder='confirm password' />
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
         
      </div>
  );
};

export default Signup;