import React from 'react';
import Swal from 'sweetalert2';

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
        fetch('https://manufacturer-website-server.onrender.com/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `This item successfully added in stock`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
    return (
        <div>
            <h2 className='text-2xl font-bold pt-3 pb-1'><u>Add a product here</u></h2>
            <form onSubmit={handleAddProduct}>
                <input name='name' type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs input-primary" required /><br /><br />
                <input name='img' type="text" placeholder="Photo URL" className="input input-bordered w-full max-w-xs input-primary" required /><br /><br />
                <textarea name='description' className="textarea textarea-bordered w-full max-w-xs textarea-primary" placeholder="Product description" required></textarea><br /><br />
                <input name='minimum_order_quantity' type="number" placeholder="Minimum Order Quantity" className="input input-bordered w-full max-w-xs input-primary" required /><br /><br />
                <input name='available_quantity' type="number" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs input-primary" required /><br /><br />
                <input name='price' type="number" placeholder="Price" className="input input-bordered w-full max-w-xs input-primary" required /><br /><br />
                <input className='btn btn-primary w-full max-w-xs' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProduct;