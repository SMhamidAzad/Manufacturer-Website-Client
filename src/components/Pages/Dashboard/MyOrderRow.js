import React from 'react';
import Swal from 'sweetalert2';
import useManageOrder from '../../../hooks/useManageOrder';

const MyOrderRow = ({ index, myOrder }) => {
    const { _id, product, email, phone, quantity, address } = myOrder;
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
                    'Your order has been deleted.',
                    'success'
                )
            }
        })
        if (proceed) {
            console.log('deleting my order with id, ', id);
            const url = `https://manufacturer-website-server.onrender.com/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        console.log('deleted my orders');
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
            <td>{email}</td>
            <td>{phone}</td>
            <td>{quantity}</td>
            <td>{address}</td>
            <td><button onClick={() => handleDeleteBtn(_id)} className="btn btn-xs">Cancel</button></td>
        </tr>
    );
};

export default MyOrderRow;