import React,{useState,useEffect} from 'react'

function App() {
  const [quotes,setQuotes]=useState("");

  const getQuote=()=>{
    fetch("https://type.fit/api/quotes").
    then((res)=>res.json()).
    then((data)=>console.log(data[1]));
  }
  return (
   <>
   <div>
    <button onClick={getQuote}>Get Quote</button>

   </div>
   </>
  );
}

export default App;
