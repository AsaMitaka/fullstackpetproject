const Task = require('../model/taskSchema');
const User = require('../model/userSchema');

const all = async (req, res) => {
  try {
    const tasks = await Task.findAll();

    return res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
  }
};

const add = async (req, res) => {
  try {
    const { data } = req.body;
    const task = await Task.create(data);

    return res.status(200).json({ message: 'Task created successfully' });
  } catch (error) {
    console.log(error);
  }
};

const remove = async (req, res) => {
  const { id } = req.body;
  try {
    const removed = await Task.findByIdAndRemove(id);
    if (!removed) {
      return res.status(404).json({ message: 'Task is not removed' });
    }

    return res.status(204).json({ message: 'Task removed successfully' });
  } catch (error) {
    console.log(error);
  }
};

const edit = async (req, res) => {
  const { id, ...other } = req.body;
  try {
    const updatedTask = await Task.findOneAndUpdate({ _id: id }, other, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
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
  all,
  add,
  remove,
  edit,
  userProfile,
};
