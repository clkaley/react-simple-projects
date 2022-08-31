import React from 'react'
import {useSelector} from 'react-redux'
function Counter() {
    const value=useSelector((state)=>state)
    console.log("counter value",value);
  return (
    <div style={{textAlign:"center"}}>
        {/* <h1>{value}</h1> */}
    </div>
  )
}

export default Counter