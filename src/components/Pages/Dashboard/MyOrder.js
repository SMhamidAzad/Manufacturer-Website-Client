import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([])
    const email = user.email;
    const url = `http://localhost:5000/orders?email=${email}`;
    useEffect(() => {
        const getMyItems = async () => {
            const { data } = await axios.get(url, {
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
                // }
            })
            setMyOrders(data)
        }
        getMyItems();
    }, [])
    return (
        <div>
            <h2 className='text-center text-3xl font-semibold'>All of my orders: {myOrders.length}</h2>
            {
                myOrders.map(myorder => <>
                <p>{myorder.name}</p>
                </>)
            }
        </div>
    );
};

export default MyOrder;