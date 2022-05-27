import React from 'react';

const ManageProductsRow = ({ part, index }) => {
    const { img, name, minimum_order_quantity, available_quantity } = part;
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
            <td><button className="btn btn-xs">Delete</button></td>
        </tr >
    );
};

export default ManageProductsRow;