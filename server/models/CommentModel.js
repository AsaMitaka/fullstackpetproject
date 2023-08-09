const { Schema, model } = require('mongoose');

const CommentSchema = Schema(
  {
    text: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Comment', CommentSchema);
