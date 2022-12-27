import React, { useEffect, useState } from 'react';
import ManageProductsRow from './ManageProductsRow';

const ManageProducts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('https://manufacturer-website-server.onrender.com/tools')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h2 className='text-2xl font-bold pt-3 pb-1'><u>All of Order Management:</u></h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Available Quantity</th>
                            <th>Minimum order Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((part, index) => <ManageProductsRow
                                key={part._id}
                                index={index}
                                part={part}
                            ></ManageProductsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;