import util from "../utility/util";

async function login(data) {
    try {
        const response = await fetch('http://localhost:5001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const resJson = await response.json();

        // util.authHandler(resJson);

        if (resJson) {
            return resJson;
        } else {
            return "Error";
        }
    } catch (e) {
        console.log(e);
        return "Error";
    }
}

export default login;