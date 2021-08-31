import Task from './Task'

function Tasks({ toDelete, tasks, toggle}) {
    
    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} toDelete={toDelete} toggle={toggle}></Task>
            )
            )}
        </div>
    )
}

export default Tasks
