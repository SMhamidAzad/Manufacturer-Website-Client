import React from 'react';
import Swal from 'sweetalert2';
import useManageOrder from '../../../hooks/useManageOrder';

const ManageOrdersRow = ({ order, index }) => {
    const { _id, product, email, quantity } = order;
    const [orders, setOrders] = useManageOrder()

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
                    'This order has been deleted.',
                    'success'
                )
            }
        })

        if (proceed) {
            console.log('deleting parts with id, ', id);
            const url = `https://manufacturer-website-server.onrender.com/orders/${id}`;
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
            <td><button onClick={() => handleDeleteBtn(_id)} className="btn btn-xs">Delete</button></td>
        </tr>
    );
};

export default ManageOrdersRow;

