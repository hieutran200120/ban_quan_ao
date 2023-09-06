import axios from "axios";

const httpRequest = axios.create({
    baseURL: "https://localhost:44340/api",
});
//phuong thức post
export const post = async (path, data, options = {}) => {
    const response = await httpRequest.post(path, data, options);
    return response.data;
};
//phương thức get
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};
export default httpRequest