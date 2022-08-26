import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios"
function UserDetail() {
    const {userID}=useParams();
    const [detail,userDetail]=useState("")
    console.log("userID",userID);
   
    // useEffect(()=>{
    //     axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`)
    //     .then(res=>console.log(res.data));
    //   })
    const fetchUserDetail = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`)
    return userDetail(res.data);
};
   
    useEffect(()=>{
        fetchUserDetail()
    })





   
  return (
    <>
      <div>
           
      </div> 
    </>
  )
}

export default UserDetail