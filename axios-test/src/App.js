import React,{useEffect,useState} from'react';
import axios from 'axios'
function App() {
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>setUsers(res.data));
  },[])

  
  return (
   <>
   <div>
    {
        users.map((user,i)=>{
          return (
            <div key={i}>
              <p>
                {user.name}-
                {user.username}
              </p>

            </div>
          )
        })
    }
   </div>
   </>
  );
}

export default App;
