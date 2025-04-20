import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    courseId: { type: String, ref: "CourseModel" },
    name: String,
    availability: String,
    dueDate: String,
    availableDate: String,
    untilDate: String,

    points: Number,
    score: Number,
    type: String,
    group: String,

    shuffled: Boolean,
    lock: Boolean,

    time: Number,
    multipleAttempts: Boolean,
    attempts: Number,
    published: Boolean,
    description: String,
    questions: [{ String }],
  },
  { collection: "quizzes" }
);
export default schema;
