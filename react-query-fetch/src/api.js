//tüm fetch işlemleri için
import axios from 'axios'

//tüm userslar için 
export const fetchUsers=async()=>{
    const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
    return data
}