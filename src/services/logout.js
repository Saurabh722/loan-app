import util from "../utility/util";

async function logout() {
    try {
        const response = await fetch('http://localhost:5001/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const resJson = await response.json();

        util.authHandler(resJson);

        if (resJson?.data) {
            return resJson.data;
        } else {
            return "Error";
        }
    } catch (e) {
        console.log(e);
        return "Error";
    }
}

export default logout;