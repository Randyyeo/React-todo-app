import AddTask from './components/AddTask';
import './components/Addtask.css'
import './MyTodosHome.css'
import Sidebar from './components/Sidebar';
import API from './api/express';
import { useHistory } from 'react-router';



export default function Add() {
    const history = useHistory();
    function addTask(details) {
        const token = window.localStorage.getItem("token")
        const getNewTasks = async (token) => {
            const res = await API.addTask(details, token);
            history.push("/MyTodosHome")
        }
        getNewTasks(token);
      }

    return (
        <>
            <Sidebar />
            <div className="home_content">
                <div className="content">
                    <AddTask add={addTask}/>
                </div>
                
            </div>
        </>
    )
}