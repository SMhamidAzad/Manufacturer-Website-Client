import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Review from './Review';

const Reviews = () => {
    const [user] = useAuthState(auth);
    const [reviews, setReviews] = useState([])
    const url = `http://localhost:5000/review`;
    useEffect(() => {
        const allReview = async () => {
            const { data } = await axios.get(url, {
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
                // }
            })
            setReviews(data)
        }
        allReview();
    }, [])
    return (
        <div>
            <h1 className='text-5xl text-center my-4'>Customer Review</h1>
            <div>
               {
                  reviews.map(review => <Review key={review._id} review={review}></Review>)
               }
            </div>
        </div>
    );
};

export default Reviews;