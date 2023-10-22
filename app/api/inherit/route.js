export async function GET(request) {
    try {
        // Prepare the body data and headers
        const bodyData = {
            "addressLine1": "2337 Rolling Oak Dr",
            "addressLine2": "Indianapolis, IN"
        };

        const headers = {
            'Content-Type': 'application/json',
            'galaxy-ap-name': process.env.Key,
            'galaxy-ap-password': process.env.Secret,
            'galaxy-search-type': 'DevAPIAddressID'
        };

        // Make the external API request
        const res = await fetch('https://api.peoplefinderspro.com/address/id', {
            method: 'POST', // changed to POST since you're sending data
            headers: headers,
            body: JSON.stringify(bodyData), // the body should be a string
        });

        // Check if the response is okay (status is within the range of 200-299)
        if (!res.ok) {
            throw new Error(`Server responded with a status of ${res.status}`);
        }

        // Get the JSON from the response
        const data = await res.json();

        // Respond with the data (assumes Response is from the fetch Web API or similar)
        return Response.json(data); // this constructs a response to send back to the client
    } catch (error) {
        // Handle any errors
        console.error("An error occurred:", error);

        // Respond with a 500 status code in case of error
        return new Response(null, { status: 500 });
    }
}