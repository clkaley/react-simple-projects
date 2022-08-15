import React,{useState,useEffect} from 'react'

function App() {
  const [quotes,setQuotes]=useState("");

  const getQuote=()=>{
    fetch("https://type.fit/api/quotes").
    then((res)=>res.json()).
    then((data)=>{
      let randomNum=Math.floor(Math.random()*data.length)
      setQuotes(data[randomNum])
    });
  }


  useEffect(()=>{
    getQuote();
    console.log("hello");
  },[])
  return (
   <>
    <div>
    <div className='container'>
      <p>{quotes.text} </p>
      <h3>{quotes.author}</h3>
      <button className='buton' onClick={getQuote}>Get Quote</button>
    </div>
   </div>
   </>
  );
}

export default App;
