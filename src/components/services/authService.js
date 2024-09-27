import { useState } from "react";

const useRegistrationUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')

    const registrationUser = async (name, password) => {
        setLoading(true);
        const user = { name, password };
        const API_URL = 'http://localhost:5000/users';
        try {
            // await new Promise((resolve) => setTimeout(resolve, 3000));
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {  // Если сервер вернул ошибку
                const data = await response.json();
                setError(data.message);  // Устанавливаем сообщение об ошибке
                setLoading(false);
                return;
            }

            const data = await response.json();
            setLoading(false);
            return data;
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    return { loading, error, registrationUser };
};

export default useRegistrationUser;
