import { useState } from 'react';
import './App.css';
import PercentageChange from './PercentageChange';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  document.title = "Todo App"
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
      <TodoForm entry={entry} handleEntryChange={handleEntryChange} handleFormSubmit={handleFormSubmit} />
      <TodoList todos={todos} handleDeleteClick={handleDeleteClick} />
      <PercentageChange />
    </>


  )
}

export default App
