"use client"
import React, { useState } from 'react';

const Search = () => {
    const [street, setStreet] = useState(null);
    const [city, setCity] = useState(null);
    const [unit, setUnit] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
        const req = {
            body: {
                'addressline1': street,
                'addressline2': `${city} ${unit}`
            }
        };
        console.log(req);
        // Further processing, like sending req to an API
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Street"
                    value={street || ''}
                    onChange={(e) => setStreet(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="City"
                    value={city || ''}
                    onChange={(e) => setCity(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Unit"
                    value={unit || ''}
                    onChange={(e) => setUnit(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Search;