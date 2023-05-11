import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})

export const get = async (path: string, option: object = {}) => {
    const response = await request.get(path, option);
    return response.data;
}

export default request;