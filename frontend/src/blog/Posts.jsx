import { useState, useEffect } from "react";
import { Menu } from "../Menu";
import apiInstance from "../utils/axiosInstance";
import { useParams } from "react-router-dom";
export const Posts = () => {
    const [posts, setPosts] = useState([]);
    const inst = apiInstance();
    const { cardId } = useParams();

    useEffect(() => {
        getPosts();
    }, [cardId]);

    const getPosts = async () => {
        try {
            const postsData = await inst.get(`/blog/posts/${cardId}`);
            const posts = postsData.data.data;
            setPosts(posts);
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <div className="posts">
            <Menu />
            <div className="posts-box">
                {posts.map((post, index) => (
                    <div className="posts-cards" key={index}>
                        <div>
                            <h4>{post.title}</h4>
                            <p>{post.content}</p>
                        </div>
                        <img src={post.image} alt={index} />
                    </div>
                ))}
            </div>
        </div>
    );
};
