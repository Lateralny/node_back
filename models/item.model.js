const mongoose = require("mongoose");

const Item = mongoose.model(
  "Item",
  new mongoose.Schema({
    album: String,
    artist: String,
    format: String,
    price: String
  })
);

module.exports = Item;