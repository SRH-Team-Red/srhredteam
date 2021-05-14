import mongoose from 'mongoose';
import Comments from './mongoComments.js';

const postModel = mongoose.Schema({
  user: String,
  imgName: String,
  text: String,
  avatar: String,
  timestamp: String,
});

export default mongoose.model('posts', postModel);
