import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("aModel", schema);
export default model;