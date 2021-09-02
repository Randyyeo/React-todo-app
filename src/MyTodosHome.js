
import './MyTodosHome.css'
import Sidebar from './components/Sidebar';
import MyTodos from './components/MyTodos';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';



export default function MyTodosHome() {
    const history = useHistory();
    useEffect(() => {
        
        const token = window.localStorage.getItem("token")
        if (!token) {
            history.push("/login")
        }
        
        
    
      }, [])

    return (
        <>
            <Sidebar />
            <div className="home_content">
                <div className="content">
                    <MyTodos />
                </div>
                
            </div>
        </>
    )
}