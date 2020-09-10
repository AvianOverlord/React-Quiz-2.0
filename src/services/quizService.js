import axios from "axios";

export default {
  getAll: async () => {
    console.log("Started request");
    return axios.get("/api/quizlist").then( payload => {
      console.log(payload);
      return payload
    }).catch(err => {
      console.log(err);
    });
  },

  getOne: async (id) => {
    return axios.get("/api/quiz/", {params: {id:id}}).then(payload => {
      return payload;
    }).catch(err =>{
      console.log(err);
    })
  }
}