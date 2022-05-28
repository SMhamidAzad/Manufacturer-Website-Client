import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyOrderRow from './MyOrderRow';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([])
    const email = user.email;
    const url = `https://mighty-earth-01337.herokuapp.com/orders?email=${email}`;
    useEffect(() => {
        const getMyItems = async () => {
            const { data } = await axios.get(url, {
            })
            setMyOrders(data)
        }
        getMyItems();
    }, [])
    return (
        <div>
            <h2 className='text-2xl font-bold pt-3 pb-1'><u>Total My Order: {myOrders.length}</u></h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((myOrder, index) => <MyOrderRow
                                key={user._id}
                                index={index}
                                myOrder={myOrder}
                            ></MyOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;