import request from "../utils/request";

export const searchService = async (q: any, type: string = "less") => {
    try {
        const res: any = await request.get("users/search", {
            params: {
                q,
                type
            }
        })
        return res.data;

    } catch (error) {
        console.log(error);

    }
}