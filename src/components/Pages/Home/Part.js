import React from 'react';

const Part = ({ part }) => {
    const { name, img, description, minimum_order_quantity, available_quantity, price } = part;

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <h4 className='font-semibold'>Minimum Order Quantity: {minimum_order_quantity}</h4>
                <h4 className='font-semibold'>Available Quantity: {available_quantity}</h4>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;