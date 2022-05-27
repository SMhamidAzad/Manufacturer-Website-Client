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
            <div class="mt-[-25px] mb-5 avatar-group -space-x-6 flex justify-center">
                <div class="avatar">
                    <div class="w-12">
                        <img src="https://api.lorem.space/image/face?hash=4818" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="w-12">
                        <img src="https://api.lorem.space/image/face?hash=40311" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="w-12">
                        <img src="https://api.lorem.space/image/face?hash=84348" />
                    </div>
                </div>
                <div class="avatar placeholder">
                    <div class="w-12 bg-neutral-focus text-neutral-content">
                        <span>+99</span>
                    </div>
                </div>
            </div>
            <div>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;