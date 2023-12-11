import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "../Menu";
import apiInstance from "../utils/axiosInstance";

export const Blog = () => {
    const [blog, setBlog] = useState([]);
    const navigate = useNavigate();
    const inst = apiInstance();
    useEffect(() => {
        getBlog();
    }, []);

    const getBlog = async () => {
        try {
            const blogData = await inst.get("/blog");
            const blog = blogData.data.data;
            setBlog(blog);
        } catch (e) {
            console.error(e);
        }
    };

    const handleCardClick = (cardId) => {
        navigate(`/blog/posts/${cardId}`);
    };
    return (
        <div className="blog">
            <Menu />
            <div className="blog-box">
                {blog.map((category, index) => (
                    <div
                        className="blog-cards"
                        key={index}
                        onClick={() => handleCardClick(category._id)}
                    >
                        <img src={category.image} alt={index} />
                        <div>
                            <div>{category.title}</div>
                            <p>{category.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h1>Discover latest Nutrition & Tech related news</h1>
        </div>
    );
};
