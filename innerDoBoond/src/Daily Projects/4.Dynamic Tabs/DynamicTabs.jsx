import { useState } from "react";

import { Tab } from "./Tab";
// Question:
// Build a Tabs Component where clicking on a tab displays its content.
// The number of tabs and their content should be dynamic (passed as props).
// The first tab should be active by default.
export const DynamicTabs=()=>{
  const tabs = ['home', 'about', 'contact'];
  // Hooks
  const [data]=useState(tabs)
  // const [home, setHome]=useState('')
  // const [about, setAbout]=useState('')
  // const [contact, setContact]=useState('')
  const [tab, setTab]=useState('')
  // Logic
  const handleTab = (curVal)=>{
    // console.log(curVal);
    if(curVal==='home'){
      setTab('Home')
    }
    else if(curVal==='about'){
      setTab('About')
    }
    else{
      setTab('Contact')
    }
    
  }
  console.log(tab);

  return(
    <>
      <div className="body_cont">
        <div className="header">
          <h1>Dynamic Tabs Content</h1>
        </div>
        <div className="body">
          {
            data.map((curVal, index)=>{
              return <button onClick={()=>handleTab(curVal, index)} key={index}>{curVal}</button>
            })
          }
        </div>
        <div className="footer">
          <div>

            <Tab prop={tab}/>
          </div>
        </div>
      </div>
    </>
  )
}