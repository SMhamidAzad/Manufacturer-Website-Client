import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Review from './Review';

const Reviews = () => {
    const [user] = useAuthState(auth);
    const [reviews, setReviews] = useState([])
    const url = `https://mighty-earth-01337.herokuapp.com/review`;
    useEffect(() => {
        const allReview = async () => {
            const { data } = await axios.get(url, {
            })
            setReviews(data)
        }
        allReview();
    }, [])
    return (
        <div>
            <h1 className='text-center text-5xl my-10'>What Our Customer Says</h1>
            <div className="mt-[-25px] mb-5 avatar-group -space-x-6 flex justify-center">
                <div className="avatar">
                    <div className="w-12">
                        <img src="https://api.lorem.space/image/face?hash=4818" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                        <img src="https://api.lorem.space/image/face?hash=40311" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                        <img src="https://api.lorem.space/image/face?hash=84348" />
                    </div>
                </div>
                <div className="avatar placeholder">
                    <div className="w-12 bg-neutral-focus text-neutral-content">
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