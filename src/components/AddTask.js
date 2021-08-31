import { useState } from 'react'



function AddTask({ add }) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const submit = (e) => {
        e.preventDefault()

        if (!text){
            alert('Please add a task')
            return
        }
        
        add({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={submit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Add Task' />
            </div>
            <div className='form-control'>
                <label>Day (e.g. YYYY-MM-DD)</label>
                <input type='text' value={day} onChange={(e) => setDay(e.target.value)} placeholder='Add Day & Time' />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <div className='submit'>
                <input type="submit" value='Save Task' />
            </div>
        </form>
    )
}

export default AddTask
