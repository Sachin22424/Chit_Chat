export const baseURL = "http://localhost:5000/api";

export const postRequest = async (url, body) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body
        });

        const data = await response.json();

        if (!response.ok) {
            let message = data.message || 'Something went wrong';
            return { error: true, message };
        }

        return data;
    } catch (error) {
        return { error: true, message: 'Network error' };
    }
};