import React from 'react';

const Portfolio = () => {
    return (
        <div className='text-center'>
            <div className=''>
                <h1 className='text-4xl mt-5 font-semibold font-serif'>Syed Md. Abdul Hamid</h1>
                <h3 className='text-2xl font-medium'>Web Developer</h3>
            </div>
            <div>
                <div className='mb-5'>
                    <p className='text-xl'>Email: hamidazad020@gmail.com</p>
                    <p className='text-xl'>Phone: +8801859168695</p>
                    <p className='text-xl'>Address: Chittagong, Bangladesh.</p>
                </div>
                <div>
                    <h5 className='text-2xl'><u>Education:</u></h5>
                    <p className='text-xl'>B.Sc in Computer Science and Engineering.</p>
                    <p className='text-xl'>Internation Islamic University Chittagong.</p>
                    <p className='text-xl'>Duration - 2019 - 2022</p>
                </div>
                <div>
                    <h5 className='text-2xl'><u>Skill Highlighted:</u></h5>
                    <h6 className='text-xl font-medium'>Expertise:
                    </h6>
                    <p>HTML5, CSS3, Bootstrap-5, Javascript, ES6
                    </p>
                    <h6 className='text-xl font-medium'>Comportable:
                    </h6>
                    <p> React, React Router, React, Firebase, Tailwind CSS, Rest API, SPA, Node.js, Mongodb, Express.js </p>
                    <h6 className='text-xl font-medium'>Tools:
                    </h6>
                    <p>Github, VS. Code, Chrome Dev Tools, Netlify, Heroku, Figma</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;