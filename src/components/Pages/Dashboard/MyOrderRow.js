import React from 'react';
import useManageOrder from '../../../hooks/useManageOrder';

const MyOrderRow = ({ index, myOrder }) => {
    const { _id,product, email, phone, quantity, address } = myOrder;
    const [orders,setOrders] = useManageOrder()

    const handleDeleteBtn = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting my order with id, ', id);
            const url = `http://localhost:5000/orders/${id}`;
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
            <td><button  onClick={() => handleDeleteBtn(_id)} className="btn btn-xs">Cancel</button></td>
        </tr>
    );
};

export default MyOrderRow;