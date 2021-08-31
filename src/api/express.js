import axios from 'axios'
const origin = "http://localhost:4000"

const setHeader = (token)=>{
    return {
      headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token
              }
    }
}

const API = {};

API.getAll = async (token)=>{
    return await axios.get(`${origin}/find`, setHeader(token));
}

/* API.getByDate = async (data)=>{
    return await axios.post(`${origin}/find/date`, data, setHeader(token));
}

API.getByTask = async (data)=>{
    return await axios.post(`${origin}/find/todo`, data, setHeader(token));
}
 */
API.addTask = async (data, token)=>{
    return await axios.post(`${origin}/add`, data, setHeader(token));
}

API.deleteTask = async (data, token)=>{
    return await axios.post(`${origin}/delete`, data, setHeader(token));
}

API.updateTask = async (data, token)=>{
    return await axios.post(`${origin}/update`, data, setHeader(token));
}

API.signin = async (data) => {
    return await axios.post(`${origin}/users/signin`, data, setHeader());
}

API.signup = async (data) => {
    return await axios.post(`${origin}/users/signup`, data, setHeader());
}

export default API;