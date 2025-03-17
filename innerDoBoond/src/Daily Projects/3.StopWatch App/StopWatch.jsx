import { useEffect, useState } from "react"
import "../3.StopWatch App/StopWatch.css"

export const StopWatch = ()=>{
  const button = ['start', 'stop', 'reset']
  // Hooks
  const [data, setData]=useState(button)
  const [hours, setHours]=useState('')
  const [minutes, setMinutes]=useState('')
  const [seconds, setSeconds]=useState('')
  const [running, setRunning]=useState(false)
  // Logic
  useEffect(() => {
      if(running){
        // 
        console.log(running);

        setInterval(() => {
          setSeconds((prevSeconds)=>{
            if(prevSeconds<59){
              return Number(prevSeconds)+1
            }
            else{
              setMinutes((prevMin)=>{
                if(prevMin<60){
                  return Number(prevMin)+1
                }
                return 0
              })
            }
          })
        }, 1000);
      }
      
    
  
    return () => {
      
    }
  }, [running])
  


  const handleButtons=(curVal, index)=>{
    console.log('curVal:', curVal);
    // console.log('curVal: ', index);
    if(curVal==='start'){
      setRunning(true)
    }
  }



  return (
    <>
    <div className="body_cont">
      <div className="header">
        <h1>Stop Watch</h1>
      </div>
      <div className="body">
        <input type="text" placeholder="HH" value={hours} onChange={(e)=>setHours(e.target.value)} /><span> : </span>
        <input type="text" placeholder="MM" 
        value={minutes} onChange={(e)=>setMinutes(e.target.value)}/><span> : </span>
        <input type="text" placeholder="SS"   value={seconds} onChange={(e)=>setSeconds(e.target.value)}/>
      </div>
      <div className="footer">
        {
          data.map((curVal, index)=>{
            return <button key={index} onClick={()=>handleButtons(curVal, index)}>{curVal}</button>
          })
        }
      </div>
    </div>
    </>
  )
}