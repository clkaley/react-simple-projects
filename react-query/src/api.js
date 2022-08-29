import axios from 'axios'

export const fetchUsers=async()=>{
    const {data}=await axios.get(`
    ${process.env.REACT_APP_BASE_ENDPOINT}/users
    `)
    return data
}


export const fetchUserDetail=async(id)=>{
    const {data}=await axios.get(` ${process.env.REACT_APP_BASE_ENDPOINT}/users/${id}`)
    return data
}
