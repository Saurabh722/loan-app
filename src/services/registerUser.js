async function registerUser(data) {
    try {
        const response = await fetch('http://localhost:5001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const resJson = await response.json();

        if (resJson) {
            console.log(resJson);
        } else {
            console.log("Some thing went wrong.");
        }
    } catch (e) {
        console.log(e);
    }
}

export default registerUser;