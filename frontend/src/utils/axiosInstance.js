import axios from "axios";

const apiInstance = (token) => {
    return axios.create({
        baseURL: "http://localhost:10000/api/ns",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export default apiInstance;
