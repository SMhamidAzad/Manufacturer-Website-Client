import React from 'react';
import car from './../../../img/car-back.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{backgroundImage: `url(${car})`,  height: '90vh !important'}}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold text-white">Hello there</h1>
                    <p class="mb-5  text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;