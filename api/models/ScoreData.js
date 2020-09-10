const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    name: 
    {
        type: String
    },
    score:
    {
        type: Number
    }
})

const Score = mongoose.model("Score", ScoreSchema);
module.exports = Score;