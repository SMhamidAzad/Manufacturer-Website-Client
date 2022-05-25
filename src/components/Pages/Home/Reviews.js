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
            <h1 className='text-5xl text-center'>Customer Review {reviews.length}</h1>
            <div>
               {/* {
                  reviews.map(review => <Review key={review._id} review={review}></Review>)
               } */}
            </div>
            {/* 
             <div class="stack">
                <div class="card shadow-md bg-primary text-primary-content">
                    <div class="card-body">
                        <h2 class="card-title">Notification 1</h2>
                        <p>You have 3 unread messages. Tap here to see.</p>
                    </div>
                </div>
                <div class="card shadow bg-primary text-primary-content">
                    <div class="card-body">
                        <h2 class="card-title">Notification 2</h2>
                        <p>You have 3 unread messages. Tap here to see.</p>
                    </div>
                </div>
                <div class="card shadow-sm bg-primary text-primary-content">
                    <div class="card-body">
                        <h2 class="card-title">Notification 3</h2>
                        <p>You have 3 unread messages. Tap here to see.</p>
                    </div>
                </div>
            </div>
            */}
        </div>
    );
};

export default Reviews;