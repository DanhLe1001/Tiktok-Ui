import axios from 'axios';

const request = axios.create({
    baseURL: "https://tiktok.fullstack.edu.vn/api/"
})

export const get = async (path: string, option: any = {}) => {
    const response = await request.get(path, option);
    return response.data;
}

export default request;