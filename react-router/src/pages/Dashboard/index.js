import React from 'react'

function Dashboard({user}) {
    console.log(user);
  return (
    <div>
        <h2>Dashboard</h2>
        <p>Hello, {user?.name}</p>
    </div>
  )
}

export default Dashboard