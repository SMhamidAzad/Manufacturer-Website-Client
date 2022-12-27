import React from 'react';
import Swal from 'sweetalert2';
import useParts from '../../../hooks/useParts';

const ManageProductsRow = ({ part, index }) => {
    const { _id, img, name, minimum_order_quantity, available_quantity } = part;
    const [parts, setParts] = useParts()

    const handleDeleteBtn = id => {
        const proceed = Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'This product has been deleted.',
                    'success'
                )
            }
        })
        if (proceed) {
            console.log('deleting parts with id, ', id);
            const url = `https://manufacturer-website-server.onrender.com/tools/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        console.log('deleted parts');
                        const remaining = parts.filter(part => part._id !== id);
                        setParts(remaining);
                    }
                })
        }
    }
    return (
        <tr >
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{minimum_order_quantity}</td>
            <td>{available_quantity}</td>
            <td><button onClick={() => handleDeleteBtn(_id)} className="btn btn-xs">Delete</button></td>
        </tr >
    );
};

export default ManageProductsRow;