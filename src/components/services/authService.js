const API_URL = 'http://localhost:5000/users';

export const registrationUser = async (name, password) => {
    const user = {name, password}
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(user)
        })
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error)
    }
}