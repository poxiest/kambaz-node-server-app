import mongoose from "mongoose";
const schema = new mongoose.Schema(
  { 
    title: String,
    course: { type: String, ref: "CourseModel" },
    modules: String,
    availableDate: String,
    dueDate: Date,
    points: Number,
    description: String,
  },
  { collection: "assignments" }
);
export default schema;
