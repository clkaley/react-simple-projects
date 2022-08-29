import axios from 'axios'

export const fetchUsers=async()=>{
    const {data}=await axios.get('https://jsonplaceholder.typicode.com/users')
    return data
}


export const fetchUserDetail=async(id)=>{
    const {data}=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return data
}
