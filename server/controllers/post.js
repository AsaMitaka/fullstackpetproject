const Post = require('../model/postSchema');
const User = require('../model/userSchema');

const myAll = async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.userId }).populate('userId').exec();

    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};

const all = async (req, res) => {
  try {
    const posts = await Post.find();
    console.log(posts);

    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      {
        returnDocument: 'after',
      },
      (err, doc) => {
        if (err) {
          return res.status(500).json({
            message: 'Failed to get post',
          });
        }

        if (!doc) {
          return res.status(404).json({ message: 'Post not found' });
        }

        res.json(doc);
      },
    );
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      text: req.body.text,
      userId: req.userId,
    };
    const post = await Post.create(data);

    const user = await User.findByIdAndUpdate(
      req.userId,
      { $push: { posts: post._id } },
      { new: true },
    );

    return res.status(200).json({ message: 'Post created successfully' });
  } catch (error) {
    console.log(error);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await Post.findByIdAndRemove(id);
    const user = await User.findByIdAndUpdate(req.userId, { $pull: { posts: id } }, { new: true });
    if (!removed) {
      return res.status(404).json({ message: 'Post is not removed' });
    }

    return res.status(204).json({ message: 'Post removed successfully' });
  } catch (error) {
    console.log(error);
  }
};

const edit = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findOneAndUpdate(
      { _id: id },
      {
        title: req.body.title,
        text: req.body.text,
        user: req.userId,
      },
      { new: true },
    );
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.status(200).json({ message: 'Post updated successfully', Post: Post });
  } catch (error) {
    console.log(error);
  }
};

const userProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  myAll,
  all,
  getOne,
  create,
  remove,
  edit,
  userProfile,
};
