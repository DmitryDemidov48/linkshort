// Импортируем библиотеку axios для работы с HTTP-запросами
import axios from 'axios';

// Базовый URL для API
const BASE_URL = 'https://api.example.com';

// Функция для отправки запроса на регистрацию пользователя
export const registerUser = async (userData) => {
    try {
        // Отправляем POST-запрос на эндпоинт регистрации
        const response = await axios.post(`${BASE_URL}/register`, userData);
        // Возвращаем данные, полученные от сервера
        return response.data;
    } catch (error) {
        // В случае ошибки, выводим её в консоль и возвращаем null
        console.error('Ошибка при регистрации пользователя:', error);
        return null;
    }
};

// Функция для отправки запроса на аутентификацию пользователя
export const loginUser = async (userData) => {
    try {
        // Отправляем POST-запрос на эндпоинт аутентификации
        const response = await axios.post(`${BASE_URL}/login`, userData);
        // Возвращаем данные, полученные от сервера
        return response.data;
    } catch (error) {
        // В случае ошибки, выводим её в консоль и возвращаем null
        console.error('Ошибка при аутентификации пользователя:', error);
        return null;
    }
};

// Функция для отправки запроса на выход пользователя из системы (логаут)
export const logoutUser = async () => {
    try {
        // Отправляем POST-запрос на эндпоинт логаута
        const response = await axios.post(`${BASE_URL}/logout`);
        // Возвращаем данные, полученные от сервера
        return response.data;
    } catch (error) {
        // В случае ошибки, выводим её в консоль и возвращаем null
        console.error('Ошибка при выходе пользователя из системы:', error);
        return null;
    }
};

// Функция для проверки аутентификации пользователя
export const checkAuth = async () => {
    try {
        // Отправляем GET-запрос на эндпоинт проверки аутентификации
        const response = await axios.get(`${BASE_URL}/auth/check`);
        // Возвращаем данные, полученные от сервера
        return response.data;
    } catch (error) {
        // В случае ошибки, выводим её в консоль и возвращаем null
        console.error('Ошибка при проверке аутентификации пользователя:', error);
        return null;
    }
};
