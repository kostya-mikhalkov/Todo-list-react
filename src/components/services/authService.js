import { useState } from "react";

const useRegistrationUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [entry, setEntry] = useState('');

    const API_URL = 'http://localhost:5000/users';

    const checkIfUserExists = async (name) => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Could not fetch users');
            }
            const users = await response.json();
            return users.some(user => user.name === name);
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    const registrationUser = async (name, password) => {
        setLoading(true);
        const user = { name, password };
    
        try {
            const userExists = await checkIfUserExists(name);
            if (userExists) {
                setError('User with this name already exists');
                setLoading(false);
                return false;  // Возвращаем false, если пользователь уже существует
            }
    
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            setLoading(false);
            return true;  // Возвращаем true при успешной регистрации
        } catch (error) {
            console.error(error);
            setLoading(false);
            return false;  // Возвращаем false при ошибке
        }
    };
    const loginUser = async (name, password) => {
        setLoading(true);
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Could not fetch users');
            }
            const users = await response.json();
            const userFound = users.find(user => user.name === name);
            if (userFound) {
                if (userFound.password === password) {
                    setEntry('complete');  // Успешный вход
                } else {
                    setEntry('password');  // Неверный пароль
                }
            } else {
                setEntry('name');  // Пользователь с таким именем не найден
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    return { loading, error, registrationUser, entry, loginUser };
};

export default useRegistrationUser;
