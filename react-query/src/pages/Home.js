import React from 'react'
import Navbar from '../components/Navbar'
import {  useQuery } from 'react-query'
 import {fetchUsers} from '../api'
import { Link } from 'react-router-dom'

function Home() {
  const { isLoading, error, data } = useQuery('users', fetchUsers
)
console.log(data);

if (isLoading) return 'Loading...'

if (error) return 'An error has occurred: ' + error.message
  return (
    <div className='text-center mt-3'>
      {data.map((user)=>{
        return(
          <div key={user.id}>
            <div className="container">
              <Link to={`/users/${user.id}`}>
              <div className="col">
                {user.name}
              </div>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home