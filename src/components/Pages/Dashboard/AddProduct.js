import React from 'react';

const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const products = {
            name: e.target.name.value,
            img: e.target.img.value,
            description: e.target.description.value,
            minimum_order_quantity: e.target.minimum_order_quantity.value,
            available_quantity: e.target.available_quantity.value,
            price: e.target.price.value,
        }
        fetch('https://mighty-earth-01337.herokuapp.com/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                alert('You product successfully added');
                console.log(data);
            })
    }
    return (
        <div>
            <h2 className='text-2xl font-semibold'>Add a product here</h2>
            <form onSubmit={handleAddProduct}>
                <input name='name' type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs input-primary" /><br /><br />
                <input name='img' type="text" placeholder="Photo URL" className="input input-bordered w-full max-w-xs input-primary" /><br /><br />
                <textarea name='description' className="textarea textarea-bordered w-full max-w-xs textarea-secondary" placeholder="Product description"></textarea><br /><br />
                <input name='minimum_order_quantity' type="number" placeholder="Minimum Order Quantity" className="input input-bordered w-full max-w-xs input-primary" /><br /><br />
                <input name='available_quantity' type="number" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs input-primary" /><br /><br />
                <input name='price' type="number" placeholder="Price" className="input input-bordered w-full max-w-xs input-primary" /><br /><br />
                <input className='btn w-full max-w-xs' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProduct;