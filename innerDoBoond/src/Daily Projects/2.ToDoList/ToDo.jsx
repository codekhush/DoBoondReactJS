import { useState } from "react"

export const Todo=()=>{
  // Hooks
  const [input, setInput]=useState('')
  const [FormData, setFormData]=useState([])
  const [completeTask, setCompleteTask]=useState('')
 
  // Logic
  const handleFormData=(e)=>{
    e.preventDefault()
    setFormData([...FormData, input])
    setInput('')
  }

  const handleComplete=(index)=>{
    console.log(index);
    setCompleteTask(index)    
  }

  const handleDelete=(index)=>{
    const filtering = FormData.filter((_, i)=>{
      return i!==index
    })    
    console.log(filtering);
    
    setFormData(filtering)
  }
  
  return(
    <>
      <div className="body_cont">
        <div className="header">
          <h1>To Do List</h1>
        </div>
        <div className="body">
          <form onSubmit={handleFormData}>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />

            <button type="submit">Add Task</button>
          </form>
        </div>
        <div className="footer">
          {
            FormData.map((curVal, index)=>{
              return <p key={index}  className={`${completeTask==index && 'tick'}`}>
                {curVal} <button onClick={()=>handleComplete(index) } >Completed?</button> <button onClick={()=>handleDelete(index)}>Delete</button> </p>
            })
          }
        </div>
      </div>
    </>
  )
}