import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState([])
    // const 
    const [quantityMessage, setQuantityMessage] = useState({
        message: ""
    })
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])
    useEffect(() => {
        if (user) {
            console.log(user);
        }
    }, [user])
    const handleQuantityField = e =>{
         const inputQuantity = parseInt((e.target.value));
         if(inputQuantity<tool.minimum_order_quantity){
            setQuantityMessage({...quantityMessage, message: "Quantity should be more than minimum quantity"})
         }
         else if(inputQuantity>tool.available_quantity){
            setQuantityMessage({...quantityMessage, message: "Quantity should be less than available quantity"})
         }
         else{
            setQuantityMessage({...quantityMessage, message: ""})
         }
         console.log(quantityMessage.message);
    }
    const handleBuyNow = e=>{
        e.preventDefault();  
        const orders ={
            name:  e.target.name.value,
            email: user?.email,
            address: e.target.address.value,
            quantity: e.target.quantity.value
        }
        fetch('http://localhost:5000/orders',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(orders)
        })
        .then(res => res.json())
        .then(data =>{
            alert('You order this parts successfully');
            console.log(data);
        })

        /*
          const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img
                }
                // send to your database 
                fetch('https://secret-dusk-46242.herokuapp.com/doctor', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Doctor added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add the doctor');
                    }
                })
        */
    }
    return (
        <div>
            <div className='flex justify-center my-8'>
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={tool.img} alt="Album" /></figure>
                    <div class="card-body pt-20">
                        <h2 class="card-title">{tool.name}</h2>
                        <p>{tool.description}</p>
                        <div class="card-actions justify-end">
                            <p>Minimum Order: {tool.minimum_order_quantity}</p>
                            <p>Order: {tool.available_quantity}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-10'>
                <div className=''>
                    <h3 className='text-2xl mb-4'>Purchase Now</h3>
                    <form onSubmit={handleBuyNow}>
                        <input value={user?.email} className='input input-bordered' type="email" name="email" required readOnly disabled/>
                        <br />
                        <br />
                        <input value='user' className='input input-bordered' type="email" name="name" required readOnly disabled/>
                        <br />
                        <br />
                        <input className='input input-bordered' type="address" placeholder='Address' name="address" required/>
                        <br />
                        <br />
                        <p>Maximum Quantity: {tool.available_quantity}</p>
                        <input className='input input-bordered' type="number" onChange={handleQuantityField} placeholder={tool.minimum_order_quantity} name="quantity" required/>
                        <br />
                        {quantityMessage?.message && <p>{quantityMessage.message}</p>}
                        <br />
                        <input className='input input-bordered w-full btn-outline' type="submit" name="" value='Buy Now' required/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;