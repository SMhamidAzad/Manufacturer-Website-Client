import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const {_id, name, img, description, minimum_order_quantity, available_quantity, price } = part;

    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <h4 className='font-semibold'>Minimum Order Quantity: {minimum_order_quantity}</h4>
                <h4 className='font-semibold'>Available Quantity: {available_quantity}</h4>
                <div class="card-actions justify-end">
                    <button onClick={()=>navigateToPurchase(_id)} class="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;