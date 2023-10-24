// app/api/inherit/route.js

export async function POST(request) {
    const body = await request.json();
    const { street, city, unit } = body;
    console.log(street);

    // Prepare the body data and headers for the external API
    const bodyData = {
        "addressLine1": street,
        "addressLine2": `${city}, ${unit}`
    };

    const headers = {
        'Content-Type': 'application/json',
        'galaxy-ap-name': process.env.Key,
        'galaxy-ap-password': process.env.Secret,
        'galaxy-search-type': 'DevAPIAddressID'
    };

    // Uncomment when you're ready to make the external API request
    /*
    const res = await fetch('https://api.peoplefinderspro.com/address/id', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(bodyData),
    });
    
    if (!res.ok) {
        throw new Error(`External API responded with a status of ${res.status}`);
    }

    const data = await res.json();
    */

    // Mocked data
    const data = {
        "persons": [
            {
                "name": {
                    "firstName": "Shawna",
                    "middleName": "D",
                    "lastName": "Thomas"
                },
                "age": "59",
                "addresses": [],
                "phones": ["3174180311"],
                "emails": []
            },
            {
                "name": {
                    "firstName": "Isaiah",
                    "middleName": "",
                    "lastName": "Thomas"
                },
                "age": "23",
                "addresses": [],
                "phones": ["3179299299"],
                "emails": []
            }
        ],
        // ... rest of the data
    };

    // Return the data to the client
    return new Response(JSON.stringify(data), { status: 200 });
}