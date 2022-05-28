import React from 'react';
import useManageOrder from '../../../hooks/useManageOrder';

const ManageOrdersRow = ({ order, index }) => {
    const { _id,product, email, quantity } = order;
    const [orders,setOrders] = useManageOrder()

    const handleDeleteBtn = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting parts with id, ', id);
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        console.log('deleted orders');
                        const remaining = orders.filter(part => part._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product}</td>
            <td>{quantity}</td>
            <td>{email}</td>
            <td><button onClick={() => handleDeleteBtn(_id)}  className="btn btn-xs">Delete</button></td>
        </tr>
    );
};

export default ManageOrdersRow;

