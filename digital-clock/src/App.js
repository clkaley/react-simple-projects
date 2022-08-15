import React,{useState} from 'react'


function App() {
  let time=new Date().toLocaleTimeString();

  const[currentTime,setCurrentTime]=useState(time);

  const Time=()=>{
    let time=new Date().toLocaleTimeString();
    setCurrentTime(time);
  }

  setInterval(Time,1000);

  return (
    <>
    <div className='container'>
      <h1>Digital Clock</h1>
      <div className='currentTime'>{currentTime}</div>
    </div>
    </>
  );
}

export default App;
