import axios from "axios";

const apiInstance = (token) => {
    return axios.create({
        baseURL: "https://",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export default apiInstance;
