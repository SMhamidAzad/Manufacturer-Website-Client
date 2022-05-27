import React from 'react';

const MyOrderRow = ({ index, myOrder }) => {
    const { product, email, phone, quantity, address } = myOrder
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{quantity}</td>
            <td>{address}</td>
            <td><button className="btn btn-xs">Cancel</button></td>
        </tr>
    );
};

export default MyOrderRow;