import React from 'react';
import useParts from '../../../hooks/useParts';

const ManageProductsRow = ({ part, index }) => {
    const {_id, img, name, minimum_order_quantity, available_quantity } = part;
    const [parts, setParts] = useParts()

    const handleDeleteBtn = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting parts with id, ', id);
            const url = `http://localhost:5000/tools/${id}`;
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