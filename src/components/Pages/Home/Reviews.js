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
            <h1 className='text-center text-5xl my-10'>What Our Customer Says</h1>
            <div>
               {
                  reviews.map(review => <Review key={review._id} review={review}></Review>)
               }
            </div>
        </div>
    );
};

export default Reviews;