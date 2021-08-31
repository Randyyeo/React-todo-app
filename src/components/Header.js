import Button from './Button'



function Header({ toggleAdd, showAdd, showUpdate }) {

    

    return (
        <header className='header'>
            <h1>{showUpdate ? 'Update Task' : 'Task Tracker'}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} click={toggleAdd} />
        
        </header>
    )
}

/* Header.defaultProps = {
    title: "Task Tracker"
} */

// CSS in JS
/* const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
} */

/* Header.propTypes = {
    title: PropTypes.string.isRequired
} */

export default Header
