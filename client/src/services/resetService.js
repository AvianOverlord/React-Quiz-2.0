import axios from "axios";

export default{
    ResetTable: async() =>
    {
        return axios.delete("/api/reset/").then(payload => {
          console.log(payload)
            return payload;
        }).catch(err =>{
            console.log(err);
        })
    }
}