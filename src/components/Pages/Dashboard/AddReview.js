import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const handleReview = e =>{
        e.preventDefault();
        const review = {
            email: user?.email,
            description: e.target.description.value,
            rating: e.target.rating.value
        }
        fetch('http://localhost:5000/review',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data =>{
            alert('Thank you so much for your review');
            console.log(data);
        })
    }
    return (
        <div>
            <h2 className='font-medium text-3xl'>Write something about us</h2>
            <form onSubmit={handleReview}>
                <textarea name='description' class="textarea textarea-warning w-1/2" placeholder="Write your review here"></textarea><br />
                <input name='rating' type="text" placeholder="Enter your rating here" class="input input-bordered input-primary w-full max-w-xs " />
                <br />
                <br />
                <input className='btn' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;