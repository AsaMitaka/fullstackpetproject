const Comment = require('../models/CommentModel');
const Post = require('../models/PostModel');

const createComment = async (req, res) => {
  try {
    const { text, postId } = req.body;
    if (text.length < 1 || text.length > 300) {
      return res.status(403).json({ message: 'Text must be more than 1 or less 300 characters' });
    }

    const comment = await Comment.create({
      text,
      userId: req.userId,
    });

    const post = await Post.findById(postId);
    post.comments.push(postId);
    await post.save();

    if (!comment) {
      return res.status(403).json({ message: 'Comment not created' });
    }

    res.status(200).json({ message: 'Comment created successfully' });
  } catch (err) {}
};

const updateComment = async (req, res) => {
  const { id } = req.params;
  try {
    const { text } = req.body;
    const comment = await Comment.findOneAndUpdate({ _id, id }, { text }, { new: true });

    if (!comment) {
      return res.status(403).json({ message: 'Comment not found' });
    }

    res.status(200).json({ message: 'Comment updated successfully' });
  } catch (err) {}
};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    const { postId } = req.body;
    const comment = await Comment.findOneAndRemove(id);

    if (!comment) {
      return res.status(403).json({ message: 'Comment not found' });
    }

    const post = await Post.findById(postId);
    post.comments.pull(postId);
    await post.save();

    return res.status(200).json({ message: 'Comment updated successfully' });
  } catch (err) {
    console.warn(err);
    return res.status(403).json({ message: 'Error deleting comment' });
  }
};

module.exports = { createComment, updateComment, deleteComment };
