import httpRequest from "../utils/httpRequest";

export const searchService = async (q: string, type: string = "less") => {
    try {
        const res = await httpRequest.get("users/search", {
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