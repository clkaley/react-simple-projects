import React, { useEffect, useState } from "react";
import  axios  from "axios";
import { Link } from "react-router-dom";
function Users() {
  const [users, setUsers] = useState([]);


  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>setUsers(res.data));
  },[])


  return (
    <>
      <div className="container mt-4 center">
        <div className="row">
          {users.map((user) => {
            return (
              <div key={user.id} className="col-md-2 col-lg-3" >
                <div className="card m-2" style={{height:"27vh"}}>
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {user.username}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {user.email}
                    </h6>
                    <Link to={`/users/${user.id}`}className="btn btn-danger">User Detail</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Users;
