import React,{useState,useEffect} from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const [loading,setLoading]=useState(false);

  //ilk render da çalışıcak
  useEffect(()=>{
    console.log("ilk render");
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2500)
  },[])


  return (
   <>
   <div className="container">
   
      {
        loading ?  
        <div className="app">
          <PropagateLoader color={"purple"} loading={loading} size={15} />
        </div>
          :    <div className='app'>Hoş Geldiniz nerdeydiniz ?</div>
      }
   </div>
   </>
  );
}

export default App;
