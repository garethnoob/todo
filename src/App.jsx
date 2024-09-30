import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [entry, setEntry] = useState("")
  const [todos, setTodos] = useState([])

  function handleEntryChange(event) {
    setEntry(event.target.value)
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    if (entry.trim() === "") {
      return;
    }
    setTodos([...todos, {id:todos.length+1, entry:entry}])
    setEntry('')
  }

  function handleDeleteClick(id) {
    let filteredList = todos.filter(todo => todo.id !== id)
    setTodos([...filteredList])
  }



  return (
    <>
      <h1>Todo App</h1>
      <form className='addEntry' onSubmit={handleFormSubmit}>
        <input type='text' placeholder='please add a task' value={entry} onChange={handleEntryChange} />
        <button type='submit'>Submit</button>
      </form>

      <div className='todoList'>
        {todos.map(todo => {
          return (
              <li key={todo.id}>
                {todo.entry}
                <button onClick={()=>handleDeleteClick(todo.id)}>-</button>
              </li>
          )

        })}
      </div>
    </>


  )
}

export default App
