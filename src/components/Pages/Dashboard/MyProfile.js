import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [profile, setProfie] = useState([])

  const email = user?.email;
  const url = `https://manufacturer-website-server.onrender.com/profile?email=${email}`;
  useEffect(() => {
    const getMyItems = async () => {
      const { data } = await axios.get(url, {
      })
      setProfie(data[0])
    }
    getMyItems();
  }, [])


  if (loading) {
    return <Loading></Loading>;
  }
  const handleUpdateProfile = e => {
    e.preventDefault();
    const profile = {
      email: user?.email,
      education: e.target.education.value,
      city: e.target.city.value,
      phone: e.target.phone.value,
      linkedin: e.target.linkedin.value,
    }
    console.log(profile);

    fetch('https://manufacturer-website-server.onrender.com/profile', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(profile)
    })
      .then(res => res.json())
      .then(data => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your profile successfully updated!',
          showConfirmButton: false,
          timer: 1500
        })
      })
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2  mt-5'>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl pt-5">
          <div className="avatar flex justify-center">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
          </div>
          <div className="card-body">
            <p>Email: {user?.email}</p>
            <p>Education: {profile?.education}</p>
            <p>City: {profile?.city}</p>
            <p>Phone: {profile?.phone}</p>
            <p>Linkedin Account: {profile?.linkedin}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Update your profile</h2>
            <form onSubmit={handleUpdateProfile}>
              <input className='input input-bordered w-full mb-1' type="text" name="education" id="" placeholder='Education' />

              <input className='input input-bordered w-full mb-1' type="text" name="city" id="" placeholder='City' />

              <input className='input input-bordered w-full mb-1' type="text" name="phone" id="" placeholder='Phone' />

              <input className='input input-bordered w-full mb-1' type="text" name="linkedin" id="" placeholder='Linkedin Account' />

              <input className='input input-bordered max-w-xs w-full mb-1 btn btn-primary' type="Submit" value='Update' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;