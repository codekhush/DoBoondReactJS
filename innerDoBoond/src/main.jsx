import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import { Counter } from './Daily Projects/1.Counter/Counter.jsx'
import { Todo } from './Daily Projects/2.ToDoList/ToDo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Counter/> */}
    <Todo/>
  </StrictMode>,
)
