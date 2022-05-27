import React from 'react';
import car from './../../../img/car-back.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${car})`, height: '90vh !important' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
                    <p className="mb-5  text-white">Welcome to one of the best car parts shop Total Car Care. Our shop has every parts of car. You can buy the best product what you need.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;