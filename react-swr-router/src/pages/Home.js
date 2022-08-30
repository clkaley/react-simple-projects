import React from 'react'
import useSWR from 'swr'
import { Link } from 'react-router-dom'
const fetcher = (...args) => fetch(...args).then(res => res.json())

function Home() {
  const { data, error } = useSWR('https://rickandmortyapi.com/api/character', fetcher)
  console.log("data",data);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div className='container mt-3' >
      <div className="row">
       {data.results.map((character)=>{
        return(
          <div  key={character.id} style={{margin:"auto"}} className="col-md-4 col-lg-3 ">
          <div 
            style={{maxWidth:"340px"}}
            className='card mt-2 h-100' 
           >
              <p>{character.name}</p>
              <Link to={`/${character.id}`} className="text-white btn btn-danger">Details</Link>
          </div>
          </div>
        )
       })}
</div>
    </div>
  )
}

export default Home