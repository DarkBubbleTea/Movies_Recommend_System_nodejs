import mongoose from "mongoose";
import schema from "./schema.js";

const Model = mongoose.model('Movies_rs', schema);

export default Model;