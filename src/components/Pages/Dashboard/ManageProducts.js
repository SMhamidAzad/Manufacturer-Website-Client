import React, { useEffect, useState } from 'react';
import ManageProductsRow from './ManageProductsRow';

const ManageProducts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
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
                           parts.map((part,index) => <ManageProductsRow
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