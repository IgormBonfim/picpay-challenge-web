import axios from "axios";
import { cookies } from 'next/headers'

const token = cookies().get('picpaychallenge.token');

export const apiServer = axios.create({});

if (token) {
    apiServer.defaults.headers['Authorization'] = `Bearer ${token.value}`
}
