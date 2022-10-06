import React from 'react'
import PropagateLoader   from "react-spinners/PropagateLoader";
function Loading() {
  return (
    <div className='text-center mt-5'>
   <PropagateLoader color={"red"} size={15} />
    </div>
  )
}

export default Loading