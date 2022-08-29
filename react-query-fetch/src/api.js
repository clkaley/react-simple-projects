//tüm fetch işlemleri için
import axios from 'axios'

//tüm userslar için 
export const fetchUsers=async()=>{
    const {data}=await axios.get("https://rickandmortyapi.com/api/character")
    return data
}