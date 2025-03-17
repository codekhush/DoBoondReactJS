import { useEffect, useState } from "react"
import "../3.StopWatch App/StopWatch.css"

export const StopWatch = ()=>{
  const button = ['start', 'stop', 'reset']
  // Hooks
  const [data]=useState(button)
  const [hours, setHours]=useState(0)
  const [minutes, setMinutes]=useState(0)
  const [seconds, setSeconds]=useState(0)
  const [running, setRunning]=useState(false)
  // Logic
  useEffect(() => {
    let timer
      if(running){
        console.log(running);
        
        // 
        console.log(running);

        timer=setInterval(() => {
          setSeconds((prevSeconds)=>{
            if(prevSeconds<59){
              return prevSeconds+1
            }
            else{
              setMinutes((prevMin)=>{
                if(prevMin<59){
                  return prevMin+1
                }
                else{
                  setHours((prevHrs)=>{
                    return prevHrs+1
                  })
                }
                return 0
              })
            }
            return 0
          })
        }, 1000);
      }
      
    
  
    return () => {
      clearInterval(timer)
    }
  }, [running])
  


  const handleButtons=(curVal, index)=>{
    console.log('curVal:', curVal);
    console.log('curVal: ', index);
    if(curVal==='start'){
      setRunning(true)
    }
    else if(curVal==='stop'){
      setRunning(false)
    }
    else if(curVal==='reset'){
      setRunning(false)
      setHours(0)
      setMinutes(0)
      setSeconds(0)
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