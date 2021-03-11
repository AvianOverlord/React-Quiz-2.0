import axios from "axios";

export default{
    AddNewScore: async(targetQuiz, newName, newScore) => {
        return axios.post(`/api/score/${targetQuiz._id}-${newName}-${newScore}`).then(payload =>{
            return payload;
        }).catch(err => {
            console.log(err);
        })
    }, 

    AddNewScoreTest: async(name, score, ID) => {
        console.log("Testing Score Request");
        return axios.post(`/api/score/`,{quizID: ID,name: name, score: score}).then(payload =>{
            console.log("Score step 2");
            console.log(payload);
            return payload;
        }).catch(err => {
            console.log(err);
        })
    },

    GetScores: async() => {
        return axios.get("/api/score").then(payload => {
            return payload;
        }).catch(err => {
            console.log(err);
        })
    }
}