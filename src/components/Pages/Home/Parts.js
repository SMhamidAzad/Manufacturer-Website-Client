import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h1 className="text-center text-5xl my-10">Our Collection</h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-3">
                {
                    parts.map(part => <Part
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;