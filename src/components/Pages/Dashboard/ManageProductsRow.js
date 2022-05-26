import React from 'react';

const ManageProductsRow = ({ part, index }) => {
    const { img, name, minimum_order_quantity, available_quantity } = part;
    return (
        <tr >
            <th>{index+1}</th>
            <td>
                <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{minimum_order_quantity}</td>
            <td>{available_quantity}</td>
            <td>Delete</td>
        </tr >
    );
};

export default ManageProductsRow;