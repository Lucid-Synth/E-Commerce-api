import mongoose, { now } from "mongoose";

const productSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  description:{
    type: String
  },
  category:{
    type: String
  },
  createdAt:{
    type: Date,
    default : now
  }
})

const product = mongoose.model('product', productSchema)
export default product