import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
  songName: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  songUrl: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Song = mongoose.model('Songs', songSchema);

export { Song };
