import { useState, useReducer } from 'react'
import './App.css'
import Todo from './Todo.jsx'

export const ACTIONS = {

  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'

}

function reducer(todos, action){

  switch( action.type){
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id){
          return {...todo, complete: !todo.complete}
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => {
        return todo.id !== action.payload.id
      })
    default:
      return todos
  }
  
}

function newTodo(name){
  return {id: Date.now(), name:name, complete: false}
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    dispatch({type: ACTIONS.ADD_TODO, payload: {name:name}})
    setName('')
  }

  // console.log(todos)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Enter Todo Item' />
      </form>

      <div style={{padding: '20px'}}>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
      </div>
    </>
  )
}

export default App
