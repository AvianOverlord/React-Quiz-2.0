const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({ 
  name: { type: String, unique: true },
  description: { type: String },
  questions: [ { type: Object }],
  scores: [ {type: Object }]
})

const Quiz = mongoose.model("Quiz", QuizSchema);
module.exports = Quiz;