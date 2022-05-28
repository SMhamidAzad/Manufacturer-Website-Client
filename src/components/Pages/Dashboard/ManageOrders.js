import React, { useEffect, useState } from 'react';
import useManageOrder from '../../../hooks/useManageOrder';
import ManageOrdersRow from './ManageOrdersRow';

const ManageOrders = () => {
    const [orders] = useManageOrder()
  
    return (
        <div>
            <h2 className='text-2xl font-bold pt-3 pb-1'>All Order Management</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <ManageOrdersRow
                                key={order._id}
                                index={index}
                                order={order}
                            ></ManageOrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;