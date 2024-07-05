import axios from "axios";

const apiInstance = (token) => {
    return axios.create({
        baseURL: "https://nutrastride.onrender.com/api/ns",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export default apiInstance;
