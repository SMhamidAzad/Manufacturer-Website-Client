import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])
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
            <div>
                <h3 className='text-center text-2xl'>Purchase Now</h3>
                <form action="">
                    <input className='input input-bordered'  type="email" name="email" id="" placeholder='Email' />
                </form>
            </div>
        </div>
    );
};

export default Purchase;