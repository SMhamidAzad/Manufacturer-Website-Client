import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminRow = ({user,index,refetch}) => {
    const {email, role}= user;
    const handleMakeAdmin = ()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data =>{
            refetch()
            console.log('Make admin ',data);
            toast.success('Made an Admin Successfully')
        })
    }
    return (
        <tr>
              <th>{index+1}</th>
              <td>{email}</td>
              <td>{ role === 'admin' 
              ?
              <p className='font-bold'>Already Admin</p>
              :
              <button onClick={handleMakeAdmin} class="btn btn-xs">Make Admin</button>}</td>
              <td><button class="btn btn-xs">Remove</button></td>
            </tr>
    );
};

export default MakeAdminRow;