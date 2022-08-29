import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchUserDetail } from "../api";
function UserDetail() {
  const { userID } = useParams();
  console.log(userID);

  const { isLoading, error, data } = useQuery(["users", userID], () =>
    fetchUserDetail(userID)
  );

  console.log("details", data);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <div className="card mb-3 mt-5" style={{maxWidth:"540px",margin:"auto"}}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">
                <small className="text-muted">{data.username}</small>
              </p>
              <a>
                {data.email}
              </a>
              <p>
                {data.address.street}-{data.address.city}
              </p>
              <p>
                {data.company.name}-{data.company.catchPhrase}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetail;
