/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect, useState,}from 'react'
import { Hearts } from  'react-loader-spinner'

function App() {
  const name="Aleyna"

  let time=new Date().toLocaleTimeString();

  const [currentTime,setCurrentTime]=useState(time);
  const[loading,setLoading]=useState(false);

  const Time=()=>{
    let time=new Date().toLocaleTimeString();
    setCurrentTime(time)
  }
  setInterval(Time,1000);

  useEffect(()=>{
    console.log("ilk render");
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])



  return (
    <>
   

    <div className='clock'>
      {currentTime}
    </div>

    {loading ? 
    <div className='loading'>
    <Hearts color="#028174" height={100} width={100}/>
    </div>
     : 
    <div> 
      <div className='container'>
      <h1>{name}'s Todo App</h1>
      </div>
      <div className='todos'>
        <input type="text" />
        <button>Add</button>
      </div>
    </div>
  
    }
    
    </>
  );
}

export default App;
