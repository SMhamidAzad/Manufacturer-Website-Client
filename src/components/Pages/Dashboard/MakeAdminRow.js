import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminRow = ({ user, index, refetch }) => {
    const { _id,email, role } = user;
    const handleMakeAdmin = () => {
        fetch(`https://mighty-earth-01337.herokuapp.com/user/admin/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log('Make admin ', data);
                toast.success('Made an Admin Successfully')
            })
    }
    
    const handleDeleteBtn = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting parts with id, ', id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        console.log('deleted user');
                        refetch()
                    }
                })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role === 'admin'
                ?
                <p className='font-bold'>Already Admin</p>
                :
                <button onClick={handleMakeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button onClick={() => handleDeleteBtn(_id)} className="btn btn-xs">Remove</button></td>
        </tr>
    );
};

export default MakeAdminRow;