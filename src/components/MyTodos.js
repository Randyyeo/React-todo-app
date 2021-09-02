import Header from "./Header"
import Tasks from "./Tasks"
import AddTask from "./AddTask"
import Update from "./Update";
import API from '../api/express';
import { useState, useEffect } from 'react'
import { useHistory } from "react-router";
import './MyTodos.css'


function MyTodos() {
  const [showAddTask, setShowAddTask] = useState(false)
  const history = useHistory();
  /* const getTodos = async () => {
    const res = await axios.get("http://localhost:4000/find");
    console.log(res.data)
  }
  getTodos() */
  /* useEffect(()=>{
    const getTodos = () => {
      const res = API.getAll();
      console.log(res)
      setTasks(res.data)
    }
    getTodos();

  }, [])
 */
  const [tasks, setTasks] = useState('')
  

  const [showUpdate, setShowUpdate] = useState(false)

  const [taskToUpdate, setToUpdateTask] = useState('');
  
  useEffect(() => {
    const token = window.localStorage.getItem("token")
    const getTodos = async (token) => {
      try {
        const res = await API.getAll(token);
        setTasks(res.data)
      } catch (err) {
        history.push("/login")
      }
      
    }
    getTodos(token);
    

  }, [])


  function updateTask(data) {
    const token = window.localStorage.getItem("token")
    const getUpdates = async (token) => {
      const res = await API.updateTask(data, token)
      console.log(res)
      setTasks(res.data)
    }
    getUpdates(token);
    


    
  }
  
  function toggleAdd(){
    setShowAddTask(!showAddTask)
    setShowUpdate(false);
  }

  // Add Task
  function addTask(details) {
    const token = window.localStorage.getItem("token")
    const getNewTasks = async (token) => {
      const res = await API.addTask(details, token);
      console.log(res)
      setTasks(res.data)
    }
    getNewTasks(token);
  }

  // Delete Task
  function deleteTask(id) {
    const token = window.localStorage.getItem("token")
    const getNewTasks = async (token) => {
      const res = await API.deleteTask({"id":id}, token);
      console.log(res)
      setTasks(res.data)
    }
    getNewTasks(token);
  }

  // Toggle Update
  const toggleUpdate = (data) => {
    setShowUpdate(!showUpdate);
    setShowAddTask(false)
    setToUpdateTask(data)
    
  }

  
  return (
    <div className="container">
      <Header toggleAdd={toggleAdd} showAdd={showAddTask} showUpdate={showUpdate}/>
      
      {showUpdate ? (<Update update={updateTask} task={taskToUpdate}/>) : 
        (<div>{showAddTask && <AddTask add={addTask}/>}
          {tasks.length > 0 ? (<Tasks toggle={toggleUpdate} tasks={tasks} toDelete={deleteTask}/>) : ('No tasks to Show')}
        </div>)}
        
      
      
      
      
    </div>
  );
}

export default MyTodos;
