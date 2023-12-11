import { StatusCodes } from "http-status-codes";
import BlogCategoriesModel from "../../models/BlogModel/Blog.js";
import PostModel from "../../models/BlogModel/BlogPost.js";
export const getBlog = async (req, res) => {
    try {
        const blog = await BlogCategoriesModel.find();
        res.status(StatusCodes.OK).send({
            message: "Blogs data retied successfully",
            data: blog,
        });
    } catch (e) {
        console.error(e);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            message: e.message,
        });
    }
};
export const getBlogPosts = async (req, res) => {
    const { cardId } = req.params;
    const blog = await BlogCategoriesModel.findById(cardId);

    const postsIds = blog.posts;
    const posts = await PostModel.find({
        _id: { $in: postsIds },
    });
    return res.status(StatusCodes.OK).send({
        message: "Posts data retrieved successfully",
        data: posts,
    });
};
