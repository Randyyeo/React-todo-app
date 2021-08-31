import ListAltIcon from '@material-ui/icons/ListAlt';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Sidebar() {
    const history = useHistory();
    const [sidebar, setSideBar] = useState(false);

    function toggleSideBar() {
        setSideBar(!sidebar)
    }

    function logout() {
        window.localStorage.clear();
        history.push('/login')
    }

    function Link(link) {
        history.push(link)
    }

    const date = Date();
    const today = date.substr(0,15);
    return (
        <>
            <div className={!sidebar ? 'sidebar' : 'sidebar active'}>
                <div className="logo_content">
                    <div className="logo">
                        <ListAltIcon id="icon" />
                        <div className="logo_name">MyTodos</div>
                    </div>
                    <MenuIcon id="btn" onClick={toggleSideBar}/>
                    <ul className="nav-list">
                        <li>
                            <div  onClick={()=>Link("/MyTodosHome")}><DashboardIcon id="icon"/>
                                <span className="links_name">Dashboard</span>
                            </div>
                            <span className="tooltip">Dashboard</span>
                        </li>    
                        <li>
                            <div  onClick={()=>Link("/MyTodosHome/User")}><AccountCircleIcon id="icon"/>
                                <span className="links_name">User</span>
                            </div>
                            <span className="tooltip">User</span>
                        </li>
                        <li>
                            <div  onClick={()=>Link("/MyTodosHome/Calendar")}><CalendarTodayIcon id="icon"/>
                                <span className="links_name">Calendar</span>
                            </div>
                            <span className="tooltip">Calendar</span>
                        </li>
                        <li>
                            <div  onClick={()=>Link("/MyTodosHome/Today")}><AssignmentIcon id="icon" />
                                <span className="links_name">Today</span>
                            </div>
                            <span className="tooltip">Today</span>
                        </li>
                        <li>
                            <div  onClick={()=>Link("/MyTodosHome/Add")}><AddCircleIcon id='icon'/>
                                <span className="links_name">Add</span>
                            </div>
                            <span className="tooltip">Add</span>
                        </li>
                    </ul>
                    <div className="profile_content">
                        <div className="profile">
                            <div className="profile_details">
                                <img src="./images/profile.jpg"/>
                                <div className="name_date">
                                    <div className="name">
                                        Randall
                                    </div>
                                    <div className="date">
                                        {today}
                                    </div>
                                </div>
                            </div>
                            <ExitToAppIcon id="logout" onClick={logout}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}