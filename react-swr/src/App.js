import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)

function App() {
  const{data}=useSWR("https://rickandmortyapi.com/api/character",fetcher);
  console.log("data",data);

  return (
   <>
    <div className="container">
      <h1 className='mt-5' style={{textAlign:"center"}}>React SWR </h1>
      <div className='row'>
      {data &&
        data.results.map((item)=>{
          return(
            <div key={item.id} className="col-md-4 col-lg-3 mt-2">
            <div className="card mb-3 mt-5 h-100 " style={{maxWidth:"540px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.image} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          </div>
          )
        })
      } 
      </div>
    </div>
   </>
  );
}

export default App;
