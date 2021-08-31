import React from 'react'
import { useState } from 'react'



function Update({ update, task }) {
    
    const [text, setText] = useState(task.text);
    const [day, setDay] = useState(task.day)
    const [reminder, setReminder] = useState(task.reminder)
    
    const id = task.id;
    

    function submit(e){
        
        update({ id, text, day, reminder});

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <div>
            <form onSubmit={submit} className="add-form">
                <div className="form-control">
                    <label>Task</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  />
                </div>
                <div className="form-control">
                    <label>Day (e.g. YYYY-MM-DD)</label>
                    <input type="text" value={day} onChange={(e)=>setDay(e.target.value)}/>
                </div>
                <div className="form-control form-control-check">
                    <label>Set Reminder</label>
                    <input type="checkbox" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
                </div>
                <input type="submit" value='Update Task' className='btn btn-block'/>
            </form>
        </div>
    )
}

export default Update
