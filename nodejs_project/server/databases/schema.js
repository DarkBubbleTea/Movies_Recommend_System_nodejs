import mongoose from "mongoose";

const schema  = new mongoose.Schema({
  language: String,
  popular: String,
  runtime: String,
  status: String,
  vote: Number,
  result:Object
});

export default schema;