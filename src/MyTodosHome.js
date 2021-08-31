
import './MyTodosHome.css'
import Sidebar from './components/Sidebar';
import MyTodos from './components/MyTodos';

export default function MyTodosHome() {
    

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