import express from '../api/express';


const actions = {};



/* express.getByDate = async ()=>{
    return await axios.get(`${origin}/find/date`, setHeader());
}

express.getByTask = async ()=>{
    return await axios.get(`${origin}/find/todo`, setHeader());
}

express.addTask = async ()=>{
    return await axios.get(`${origin}/add`, setHeader());
}

express.deleteTask = async ()=>{
    return await axios.get(`${origin}/delete`, setHeader());
}

express.updateTask = async ()=>{
    return await axios.get(`${origin}/update`, setHeader());
} */

actions.getAll = () => {
    const res = express.getAll();
    return res
}
export default actions

/* [SIGNUP]: ({ commit, state, getters }, data) => {
    return new Promise((resolve, reject) => {
      const moduleState = state;

        GeneralAPI.signup(data)
        .then(response => {
          return resolve(response);
        })
        .catch(error => {
        //  console.error(error);
          return reject(error);
        });

    });
  }, */