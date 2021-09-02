import { FaTimes } from 'react-icons/fa'

const Task = ({ task, toggle, toDelete}) => {
    return (
        <div className={`task ${task.reminder === "true" ? 'reminder' : ''}`} onDoubleClick={() => toggle(task)}>
            <h3>{task.text} <FaTimes onClick={() => toDelete(task._id)} style={{ color:'red', cursor: 'pointer'}}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
