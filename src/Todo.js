import React from 'react'
import './Todo.css'
import {MdDelete} from 'react-icons/md'
import {TiTick} from 'react-icons/ti'
import {ACTIONS} from './App.js'

const Todo = ({todo, dispatch}) => {
  return (
    <div className='todo'>
        <h4 className="todo__title" style={{color: todo.completed ? 'grey' : '#fff', textDecoration: todo.completed ? 'line-through' : '' }}>{todo.task}</h4>
        <div className="todo__buttons">
            <TiTick 
            className='todo__button' 
            style={{color: todo.completed ? 'grey' : 'green'}} 
            onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO , payload: {id: todo.id}})}
            />
            <MdDelete 
            className='todo__button' 
            style={{color: 'red', marginTop: '20px'}} 
            onClick={() => dispatch({type: ACTIONS.DELETE_TODO , payload: {id: todo.id}})}
            />
        </div>
    </div>
  )
}

export default Todo