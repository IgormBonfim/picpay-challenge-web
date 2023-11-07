import axios from "axios";
import { parseCookies } from 'nookies';

const { 'picpaychallenge.token': token } = parseCookies();

export const api = axios.create({});

if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
}