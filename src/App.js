
import { useState, useReducer } from 'react';
import './App.css';
import Todo from './Todo';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

const reducer = (todos, action) => {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.task, todos)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter( todo => todo.id !== action.payload.id)
    default:
      return todos
  }
}

const newTodo = (task, todos) => {
  return { id: todos[todos.length-1].id+1, task: task, completed: false}
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [
    { id: 1,
      task: 'Learn HTML, CSS, JavaScript',
      completed: true
    },
    { id: 2,
      task: 'Learn React.js',
      completed: true
    },
    { id: 3,
      task: 'Complete MERN Stack',
      completed: false
    }
])

const [task, setTask] = useState('')

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch({type: ACTIONS.ADD_TODO, payload: {task: task}});
  setTask('');
}

  return (
    <div className="App">
      <div className="navbar">
        <h4 className='navbar__title'>2do-app</h4>
      </div>
      <form className="add__todo" onSubmit={handleSubmit} >
        <input type="text" value={task} onChange={e => setTask(e.target.value)} placeholder='Enter new todo' />
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
      <footer className='footer'>a project by <a className='footer__link' href="https://suhaib-p.web.app/" target='_blank'>suhaib-p</a></footer>
    </div>
  );
}

export default App;
