import React from 'react';
import Tools from './Tools';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';


const Home = () => {
    return (
       <div>
         <Banner></Banner>
         <Tools></Tools>
         <BusinessSummary></BusinessSummary>
         <Reviews></Reviews>
       </div>
    );
};

export default Home;