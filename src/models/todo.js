import mongoose from "mongoose";

const { Schema } = mongoose;

const todoSchema = new Schema({
  item: {
    type: Schema.Types.String,
    required: true,
  },
});

const TodoModal = mongoose.model('todo', todoSchema)

export default TodoModal
