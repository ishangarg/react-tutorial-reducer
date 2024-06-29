import {ACTIONS} from './App.jsx'

export default function Todo({todo, dispatch}){
    return (
        <>
        <div style={{padding: '10px'}}>
            <span style={{ padding:'15px', color: todo.complete ? '#AAA':'#000'}}>
                {todo.name}
            </span>
            <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>
            <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
        </div>
        </>
    )
}