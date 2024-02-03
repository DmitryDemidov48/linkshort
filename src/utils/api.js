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

// Функция для отправки запроса на создание сокращенной ссылки
export const createShortLink = async (linkData) => {
    try {
        // Отправляем POST-запрос на эндпоинт создания сокращенной ссылки
        const response = await axios.post(`${BASE_URL}/shorten`, linkData);
        // Возвращаем данные, полученные от сервера
        return response.data;
    } catch (error) {
        // В случае ошибки, выводим её в консоль и возвращаем null
        console.error('Ошибка при создании сокращенной ссылки:', error);
        return null;
    }
};
