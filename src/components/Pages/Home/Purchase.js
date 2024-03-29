import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState([]);

    const [quantityMessage, setQuantityMessage] = useState({
        message: ""
    })
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        fetch(`https://manufacturer-website-server.onrender.com/tools/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])

    useEffect(() => {
        if (user) {
            console.log(user);
        }
    }, [user])
    if (loading) {
        return <Loading></Loading>
    }

    const handleQuantityField = e => {
        const inputQuantity = parseInt((e.target.value));

        if (inputQuantity < tool.minimum_order_quantity) {
            setQuantityMessage({ ...quantityMessage, message: "Quantity should be more than minimum quantity" })
        }
        else if (inputQuantity > tool.available_quantity) {
            setQuantityMessage({ ...quantityMessage, message: "Quantity should be less than available quantity" })
        }
        else {
            setQuantityMessage({ ...quantityMessage, message: "" })
        }
        console.log(quantityMessage.message);
    }
    const handleBuyNow = e => {
        e.preventDefault();
        const orders = {
            name: e.target.name.value,
            email: user?.email,
            address: e.target.address.value,
            phone: e.target.phone.value,
            product: tool.name,
            quantity: e.target.quantity.value
        }
        fetch('https://manufacturer-website-server.onrender.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `You order ${tool.name} successfully`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
    return (
        <div>
            <div className='flex justify-center my-8'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={tool.img} alt="Album" /></figure>
                    <div className="card-body pt-20">
                        <h2 className="card-title">{tool.name}</h2>
                        <p>{tool.description}</p>
                        <div className="card-actions justify-end">
                            <p className='text-primary font-bold'>Minimum Order Quantity: {tool.minimum_order_quantity}</p>
                            <p className='text-primary font-bold'>Available Order Quantity: {tool.available_quantity}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-10'>
                <div className='w-1/4'>
                    <h3 className='text-2xl mb-4 font-medium'>Purchase Now</h3>
                    <form onSubmit={handleBuyNow}>
                        <input value={user?.email} className='input input-bordered w-full' type="email" name="email" required readOnly disabled />
                        <br />
                        <br />
                        <input value={user?.displayName ? user.displayName : 'User'} className='input input-bordered w-full' type="email" name="name" required readOnly disabled />
                        <br />
                        <br />
                        <input className='input input-bordered w-full' type="address" placeholder='Address' name="address" required />
                        <br />
                        <br />
                        <input className='input input-bordered w-full' type="text" placeholder='Phone number' name="phone" required />
                        <br />
                        <br />
                        <input className='input input-bordered w-full' type="text" value={tool.name} name="product" required />
                        <br />
                        <br />
                        <p>Maximum Quantity: {tool.available_quantity}</p>
                        <input className='input input-bordered w-full' type="number" onChange={handleQuantityField} placeholder={tool.minimum_order_quantity} name="quantity" required />
                        <br />
                        {quantityMessage?.message && <p>{quantityMessage.message}</p>}
                        <br />
                        <input className='input input-bordered w-full btn btn-primary' type="submit" name="" value='Buy Now' required />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;