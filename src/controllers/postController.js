import prisma from '../config/db.js';

export const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const userId = req.user.userId;

        const post = await prisma.post.create({
            data: { title, content, userId },
        });

        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany({ include: { user: true } });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
