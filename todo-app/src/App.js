import React,{useState,useEffect}from 'react'


function App() {
  const name="Aleyna"
  let time=new Date().toLocaleTimeString();
  const [currentTime,setCurrentTime]=useState(time);

  const Time=()=>{
    let time=new Date().toLocaleTimeString();
    setCurrentTime(time)
  }

  setInterval(Time,1000);

  return (
    <>
    <div>
    <div className='clock'>
      {currentTime}
    </div>
    <div className='container'>
      <h1>{name}'s Todo App</h1>
  
    </div>
    <div className='todos'>
      <input type="text" />
      <button>Add</button>
    </div>
    </div>
    </>
  );
}

export default App;
