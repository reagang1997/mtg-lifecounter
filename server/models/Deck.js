const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const bcrypt = require('bcryptjs');

const deckSchema = new Schema({
    name: String,
    commander: String,
    commander_img: String
})

const Deck = mongoose.model("Deck", deckSchema);
module.exports = Deck;