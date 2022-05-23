import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h1 className="text-center text-5xl">Refrigaretor Tools</h1>
            <div className="grid grid-cols-3">
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