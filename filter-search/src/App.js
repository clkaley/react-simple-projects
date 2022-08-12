import Data from "./Data.json"
import React,{useState} from 'react'

function App() {
  const [datas,setDatas]=useState(Data);
  const [search,setSearch]=useState("");
 
  return (
    <>
    <h1 className="title">Filter Search</h1>
    <div className="container-search">
      <input
      placeholder="searching data"
        onChange={(e)=>setSearch(e.target.value)} 
       className="input" 
       type="text" />
    </div>

    <div className="container">
      <div className="img-container">
      {datas.filter((data)=>{
          if(search=== ""){
            return data;
          }
          else if(data.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || data.description.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            return data;
          }
        }).map((data)=>{
          return(
          <div key={data.id}>
              <img  src={data.image} alt="" />
              <h3>{data.title}</h3>
              <p>{data.description}</p>
        </div>)
        })
        }
      </div>
    </div>
    </>
  );
}

export default App;
