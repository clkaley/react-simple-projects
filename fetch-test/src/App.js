import React,{useState,useEffect} from 'react'

function App() {
  const[countries,setCountries]=useState([]);

  
  //! api dan veri almak asenkron bir iş
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(res=>setCountries(res))
    },[])

    console.log("countries:",countries,);


  return (
  <>
  <div>
    {
      countries.map((country,i)=>{
        return( 
          <div key={i}>
            {country.capital}
            <img width={15} src={country.flags.png} alt="" />
          </div>
        )
      })
    }
  </div>
  </>
  );
}

export default App;
