import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, img, description, minimum_order_quantity, available_quantity, price } = part;

    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card w-96 h-[470px] bg-base-100 shadow-xl my-5">
            <figure><img className='mb-[-40px]' style={{ height: '200px' }} src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className=''>{description}</p>
                <p className='text-4xl font-serif'>Price: {price}</p>
                <h4 className='font-semibold'>Minimum Order Quantity: {minimum_order_quantity}</h4>
                <h4 className='font-semibold'>Available Quantity: {available_quantity}</h4>
                <div className="card-actions justify-end">
                    <button onClick={() => navigateToPurchase(_id)} className="btn btn-primary btn-sm">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;