const { Schema, model } = require('mongoose');

const TaskSchema = Schema({
  text: {
    type: String,
    required: true,
  },
  authorID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('Task', TaskSchema);
