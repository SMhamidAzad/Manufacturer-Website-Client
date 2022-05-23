import React from 'react';
import Tools from './Parts';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import Parts from './Parts';


const Home = () => {
    return (
       <div>
         <Banner></Banner>
         <Parts></Parts>
         <BusinessSummary></BusinessSummary>
         <Reviews></Reviews>
       </div>
    );
};

export default Home;