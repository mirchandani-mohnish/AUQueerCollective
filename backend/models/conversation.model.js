const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const conversationSchema = new Schema(
  {
    threadId: { type: Number, required: true },
    body: { type: String, required: true, trim: true },
    author: {
      type: String,
      required: true,
    },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;
