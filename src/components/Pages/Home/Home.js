import React from 'react';
import Tools from './Parts';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import Parts from './Parts';
import Contact from './Contact';
import BestCollection from './BestCollection';


const Home = () => {
    return (
       <div>
         <Banner></Banner>
         <Parts></Parts>
         <BusinessSummary></BusinessSummary>
         <BestCollection></BestCollection>
         <Reviews></Reviews>
         <Contact></Contact>
       </div>
    );
};

export default Home;