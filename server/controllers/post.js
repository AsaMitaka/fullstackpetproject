const Post = require('../models/PostModel');
const User = require('../models/UserModel');

const getOnePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findOne(id);

    return res.status(200).json(post);
  } catch (err) {
    console.warn(err);
    return res.status(404).json({ message: 'Error getting post' });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();

    return res.status(200).json(posts);
  } catch (err) {
    console.warn(err);
    return res.status(404).json({ message: 'Error getting all posts' });
  }
};

const getAllUserPosts = async (req, res) => {
  const { id } = req.params;
  try {
    const posts = await Post.find({ userId: id });

    res.status(200).json(posts);
  } catch (err) {
    console.warn(err);
    return res.status(404).json({ message: 'Error getting all user posts' });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, text } = req.body;

    if (title.length < 1 || title.length > 30) {
      return res.status(403).json({ message: 'Title less than 1 or more than 30' });
    }

    if (text.length < 5 || text.length > 300) {
      return res.status(403).json({ message: 'Text length less than 5 or more than 300' });
    }

    const post = await Post.create({
      title,
      text,
      userId: req.userId,
    });

    const user = await User.findById(req.userId);
    user.post.push(post._id);
    await user.save();

    res.status(200).json({ message: 'Post created successfully' });
  } catch (err) {
    console.warn(err);
    return res.status(404).json({ message: 'Error creating post' });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  try {
    const { title, text } = req.body;
    const post = await Post.findOneAndUpdate(id, { title, text }, { new: true });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(post);
  } catch (err) {
    console.warn(err);
    return res.status(404).json({ message: 'Error updating post' });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndRemove(id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const user = await User.findById(req.userId);
    user.post.pull(id);
    await user.save();

    return res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.warn(err);
    return res.status(404).json({ message: 'Error deleting post' });
  }
};

module.exports = {
  getAllPosts,
  getAllUserPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
};
