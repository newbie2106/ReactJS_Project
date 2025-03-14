import axios from "axios";

const BASE_URL = "https://dev-api-nurture.vinova.sg/api/v1";

export default axios.create({
    baseURL: BASE_URL
});

export const getArticle = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/articles`);
        return res.data;
    } catch (error) {
        console.error("Lỗi lấy dữ liệu Article", error)
        throw error;
    }
}
