import httpRequest from "../utils/httpRequest";

export const searchService = async (q: any, type: string = "less") => {
    try {
        const res: any = await httpRequest.get("users/search", {
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