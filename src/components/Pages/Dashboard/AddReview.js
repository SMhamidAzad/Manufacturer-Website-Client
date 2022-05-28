import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const handleReview = e => {
        e.preventDefault();
        const review = {
            email: user?.email,
            description: e.target.description.value,
            rating: e.target.rating.value
        }
        fetch('https://mighty-earth-01337.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                alert('Thank you so much for your review');
                console.log(data);
            })
    }
    return (
        <div>
            <h2 className='text-2xl font-bold pt-3 pb-1'><u>Write something about us</u></h2>
            <form onSubmit={handleReview}>
                <textarea name='description' className="textarea textarea-primary w-1/2" placeholder="Write your review here"></textarea><br />
                <input name='rating' type="text" placeholder="Enter your rating here" className="input input-bordered input-primary w-full max-w-xs " />
                <br />
                <br />
                <input className='btn btn-primary' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;