/* eslint-disable react/prop-types */

export default function TodoList(props) {
    const {todos, handleDeleteClick} = props
    
    return (<div className='todoList'>
        {todos.map(todo => {
            return (
                <li key={todo.id}>
                {todo.entry}
                <button onClick={()=>handleDeleteClick(todo.id)}>-</button>
                </li>
            )
        })}
    </div>)
}