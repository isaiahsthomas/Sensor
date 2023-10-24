"use client"
import { usePathname, useSearchParams } from 'next/navigation';

const Results = () => {
    const pathname = usePathname();
    const searchParams = new URLSearchParams(useSearchParams());

    const street = searchParams.get('street');
    const city = searchParams.get('city');
    const unit = searchParams.get('unit');
    const name = searchParams.get('name');
    const phone = searchParams.get('phone');

    // Check if the required query parameters are available
    if (!street || !city) {
        return <div>Loading...</div>;  // You can return a loading message or null
    }

    return (
        <div>
            <h1>Search Results</h1>
            <p>Street: {street}</p>
            <p>City: {city}</p>
            <p>Unit: {unit}</p>
            <p>Name: {name}</p>
            <p>Phone: {phone}</p>

            {/* Display other relevant data or components here */}
        </div>
    );
}

export default Results;