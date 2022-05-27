import React from 'react';
import Rating from 'react-rating';
import { AiFillStar } from 'react-icons/ai';
const Review = ({ review }) => {
    const { description, rating } = review;

    return (
        <div className='flex justify-center'>
            <div className="text-center mb-5 shadow-md w-1/2 card bg-base-200">
                <div className="card-body">
                    <p>{description}</p>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<AiFillStar style={{ color: 'gray', fontSize: '27px' }} />}
                        fullSymbol={<AiFillStar style={{ color: 'goldenrod', fontSize: '27px' }} />}
                        readonly
                    ></Rating>
                </div>
            </div>
        </div>
    );
};

export default Review;