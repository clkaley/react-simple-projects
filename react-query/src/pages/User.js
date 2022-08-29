import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchUsers } from "../api";
function User() {
  const { isLoading, error, data } = useQuery("users", fetchUsers);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <div className="mt-5 container">
        <h1 className="text-center">Users List</h1>
        <div className="row">
        {data.map((user) => {
          return (
            <div key={user.id}  className="col-md-4 col-lg-3" >
              <div className="card" style={{height:"25vh",margin:"5px"}}>
                <div className="card-body" style={{margin:"auto"}}>
                  <h5 className="card-title">User {user.name}</h5>
                  <p className="card-text">
                   {user.username}
                  </p>
                  <Link to={`/users/${user.id}`} className="btn btn-danger">
                   Details
                  </Link>
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

export default User;
