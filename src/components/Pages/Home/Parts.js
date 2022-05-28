import React, { useEffect, useState } from 'react';
import useParts from '../../../hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts] = useParts();
   
    return (
        <div>
            <h1 className="text-center text-5xl my-10">Our Collection</h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-3">
                {
                    parts.slice(0,6).map(part => <Part
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;