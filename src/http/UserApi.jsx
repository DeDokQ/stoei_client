import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode"
import {formToJSON} from "axios";

export const registration = async (firstname, lastname, email, password) => {
    try{
        const {data} = await $host.post('api/register', {firstname, lastname, email, password, role: 'USER'})
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    }
    catch (BAD_REQUEST) {
        return "Пользователь существует!";
    }
}

export const login = async (email, password) => {
    try {
        const {data} = await $host.post('api/auth', {email, password})
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    } catch (BAD_REQUEST) {
        return "Ошибка логина или пароля";
    }
}

export const getName = async (token) => {
    try{
        const {data} = await $host.post('api/getName', {token});
        return data;
    } catch (e) {
        console.log(e)
    }
}

export const getId = async (token) => {
    try{
        const {data} = await $host.post('api/getId', {token});
        return data;
    } catch (e) {
        console.log(e)
    }
}

export const getRole= async (token) => {
    try{
        const {data} = await $host.post('api/getRole', {token});
        return data;
    } catch (e) {
        console.log(e)
    }
    return null;
}