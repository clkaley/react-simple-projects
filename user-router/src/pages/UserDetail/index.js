import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function UserDetail() {
  const { userID } = useParams();
  const [detail, userDetail] = useState("");
  console.log("userID", userID);

  // useEffect(()=>{
  //     axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`)
  //     .then(res=>console.log(res.data));
  //   })
  const fetchUserDetail = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userID}`
    );
    return userDetail(res.data);
  };

  useEffect(() => {
    fetchUserDetail();
  });

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card mb-3" style={{maxWidth:"540px",margin:"auto"}}>
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">User {detail.name}</h5>
                    <p className="card-text">
                     {detail.username}
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        {detail.email}
                      </small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        {detail.phone}
                      </small>
                    </p>
                    <p className="card-text">
                      <small className="text-danger">
                        {detail.website}
                      </small>
                    </p>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetail;
