const { Schema, model } = require('mongoose');

const PostSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  authorID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  viewsCount: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('Post', PostSchema);
