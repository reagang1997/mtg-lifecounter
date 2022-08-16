const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const bcrypt = require('bcryptjs');

const playerSchema = new Schema({
    name: String,
    decks: [{type: Schema.Types.ObjectId, ref: 'Deck'}],
    wins: Number,
    losses: Number
})

const Player = mongoose.model("Player", playerSchema);
module.exports = Player;