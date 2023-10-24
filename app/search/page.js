"use client";
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const Search = () => {
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('');
    const [names, setNames] = useState([]);
    const [phones, setPhones] = useState([]);

    const searchParams = new URLSearchParams(useSearchParams());

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:3000/api/inherit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                street: street,
                city: city,
                unit: unit
            })
        });

        const data = await response.json();
        console.log(data)

        // Extract names and phones from the data
        const extractedNames = data.persons.map(person => `${person.name.firstName} ${person.name.lastName}`);
        const extractedPhones = data.persons.map(person => person.phones[0]);

        setNames(extractedNames);
        setPhones(extractedPhones);

        if (data) {
            searchParams.set('street', street);
            searchParams.set('city', city);
            searchParams.set('unit', unit);
            searchParams.set('name', extractedNames.join(',')); // Join names into a comma-separated string
            searchParams.set('phone', extractedPhones.join(',')); // Join phones into a comma-separated string
            window.location.href = `/search/results?${searchParams.toString()}`;
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    className='bg-gray-500'
                />
                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className='bg-gray-500'
                />
                <input
                    type="text"
                    placeholder="Unit"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className='bg-gray-500'
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Search;
