import { useState } from "react"
// Question : 
// Counter App
// Create a React component that displays a counter.
// It should have Increment (+1), Decrement (-1), and Reset (0) buttons.
// The counter should never go below 0.
// Use functional components and hooks (useState).

export const Counter = () =>{
  const buttons = ['Increase', 'Reset', 'Decrease']
  // Hooks
  const [data]=useState(buttons)
  const [count, setCount]=useState(0)
  // Logic

  const handleButtons = (buttonValue)=>{
    // console.log(buttonValue);
    if(buttonValue == 'Increase'){
    // 
      if(count<10){
      setCount(count+1)
      }
    }
    else if(buttonValue == 'Decrease'){
    // 
      if(count>0){
      setCount(count-1)
      }
    }
    else{
    // 
      setCount(0)
    }
  }
  return (
    <>
      <div className="body_cont">
        <div className="header">
          <h1>Counter</h1>
        </div>
        <div className="body">
          <h2>{count}</h2>
        </div>
        <div className="footer">
          {
            data.map((curVal, index)=>{
              return <button onClick={()=>handleButtons(curVal)} key={index}>{curVal}</button>
            })
          }
        </div>
      </div>
    </>
  )
}
