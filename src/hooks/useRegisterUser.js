import { useState } from 'react';

export async function useRegisterUser({ data }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function customeFetch(data) {
        try {
            const response = await fetch('http://localhost:5001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response) {
                setUser(response);
            } else {
                setError("Some thing went wrong.");
            }
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    }

    seEffect(() => {
        setLoading(true);
        if (data) {
            customeFetch(data);
        };
    }, [data]);

    return [user, loading, error];
}

export default useCustomFetch;