import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { DynamicTabs } from './Daily Projects/4.Dynamic Tabs/DynamicTabs'
// import { StopWatch } from './Daily Projects/3.StopWatch App/StopWatch'
// import App from './App.jsx'
// import { Counter } from './Daily Projects/1.Counter/Counter.jsx'
// import { Todo } from './Daily Projects/2.ToDoList/ToDo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Counter/> */}
    {/* <Todo/> */}
    {/* <StopWatch/> */}
    <DynamicTabs/>
  </StrictMode>,
)
