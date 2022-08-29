import React from 'react'
import Navbar from '../components/Navbar'
import {  useQuery } from 'react-query'
 import {fetchUsers} from '../api'

function Home() {
  const { isLoading, error, data } = useQuery('users', fetchUsers
)
console.log(data);

if (isLoading) return 'Loading...'

if (error) return 'An error has occurred: ' + error.message
  return (
    <div>
      {data.map((user)=>{
        return(
          <div key={user.id}>
            <div className="container">
              <div className="col">
                {user.name}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home