const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const reset = false;
const path = require("path");

const db = require("./models");

// I changed your data file to JSON instead and only used one quiz and one 
// question for now, just to get things going. You can add in the other data 
// anytime
const seed = require("./data/quizdata.json");

const PORT = process.env.PORT || 5000;
const publicPath = path.join(__dirname, "./public");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/test', {useNewUrlParser: true});
const mConnection = mongoose.connection;
console.log("Connection Data:")
console.log(mConnection.collections);

// This will stop you from getting any CORS errors.
app.use("*", async (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localapp.com:3000")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Authorization")
  res.setHeader("Access-Control-Allow-Credentials", true)
  next()
})

app.use(bodyParser.json());

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(publicPath, "index.html");
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
  
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  
  }
  
app.get("/api/quizlist", (req,res) => {
  console.log("Recieved Request");
  db.QuizData.find().then(data => {
    console.log("Passed Data");
    res.json(data);
  }).catch(err => {
    res.json(err);
  });
});

app.get("/api/quiz/", (req,res) => {
  console.log("Score Request 5");
  console.log(req.query);
  db.QuizData.findById(req.query.id).then(data => {
    console.log("Score Request 6");
    console.log(data);
    res.json(data);
  }).catch(err => {
    res.json(err);
  })
});

app.post("/api/score", (req,res) => {
  console.log("Score Request 4");
  const newScore = {name: req.body.name, score: req.body.score};
  const quizID = req.body.quizID;
  db.ScoreData.create(newScore).then(()=>{
    {
      console.log("Score step #1");
      db.QuizData.updateOne({_id: quizID}, {$push: {scores: newScore}}).then(data => {
        console.log("Data check #1");
        res.json(data);
      }).catch(err =>{
        console.log("Data Check #2");
        res.json(err);
      })
    }    
  })
});

app.post("/api/score/:id-:name-:score", (req,res) => {
  console.log("Score request #1");
  db.ScoreData.create({name: req.params.name, score: req.params.score}).then(({_id})=>{
    {
      db.QuizData.findByIdAndUpdate(req.params.id, {$push: {scores: _id}}, {new: true}).then(data => {
        res.json(data);
      })
    }    
  });
});

app.post("/api/score/:id", (req,res) => {
  console.log("Score request 2");
  db.ScoreData.create(req.body).then(({_id})=>{
    {
      db.QuizData.findByIdAndUpdate(req.params.id, {$push: {scores: _id}}, {new: true}).then(data => {
        res.json(data);
      })
    }    
  })
})

app.post("/api/score/test", (req,res) => {
  db.ScoreData.create({name: "Test-taker", score: 30}).then(({_id})=>{
    {
      db.QuizData.findOneAndUpdate({},{$push: {scores: _id}}, {new: true}).then(data => {
        res.json(data);
      })
    }    
  })
})

app.delete("/api/reset", (req,res) => {
  console.log("Hit reset function.");
  if(reset)
  {
    mConnection.dropCollection("quizzes").then(data => {
      console.log("Reset step 1");
      mConnection.create(db.QuizData);
      db.QuizData.insertMany(seed).then(()=>{
        console.log("Reset complete, data inserted.");
        res.json(data);
      }).catch(err => {
        console.log(err);
      })
    }).catch(err => {
      console.log(err);
    });
  }
  else
  {
    res.send("No reset.");
  }
})

/* 
  You only want to run the seed function the first time everything boots, 
  so you may want do a query and see if any data exists, and only if NOT 
  do you then run the seed

  The BIG problem you were having is that your quiz data was passing in the questions 
  as an array of objects, 1 object per question. But your Schema was expecting these 
  to be ObjectID references to another table completely. So I modified the Schema to suit
  the data.
*/

db.QuizData.exists({}).then(res => {
  console.log("Did quiz check.");
  if(!res)
  {
    db.QuizData.insertMany(seed).then(()=>{
         console.log("Data inserted.");
    });
  }
})

// db.QuizData.insertMany(seed).then(()=>{
//   console.log("Data inserted.");
// });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });