const mongoose = require("mongoose");

const Album = mongoose.model(
  "Album",
  new mongoose.Schema({
    image: String,
    album: String,
    artist: String,
    format: String,
    released: Number,
    genre: String,
    tracklist: Array
  })
);

module.exports = Album;
