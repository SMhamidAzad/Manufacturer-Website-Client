import React from 'react';

const ManageOrdersRow = ({order,index}) => {
    const {email, quantity}=order;
    return (
        <tr>
            <th>{index+1}</th>
            <td>Cy Ganderton</td>
            <td>{quantity}</td>
            <td>{email}</td>
            <td><button class="btn btn-xs">Delete</button></td>
        </tr>
    );
};

export default ManageOrdersRow;