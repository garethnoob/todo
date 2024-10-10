/* eslint-disable react/prop-types */

export default function TodoForm(props) {
    const {entry, handleEntryChange, handleFormSubmit} = props
    return (
        <form className='addEntry' onSubmit={handleFormSubmit}>
            <input type='text' placeholder='please add a task' value={entry} onChange={handleEntryChange} />
            <button className='hover' type='submit'>Submit</button>
        </form>
    )
}