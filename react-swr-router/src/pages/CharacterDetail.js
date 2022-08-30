import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
function CharacterDetail() {
  const { characterID } = useParams();
  console.log("characterID", characterID);
  const { data, error } = useSWR(
    `https://rickandmortyapi.com/api/character/${characterID}`,
    fetcher
  );
  console.log("data", data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className="m-auto mt-5" >
      <div className="card mb-3" style={{ maxWidth: "740px" ,margin:"auto"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={data.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <h6 className="card-title">Location</h6>
              <p className="card-text">
              {data.location.name}
              </p>
              <a href={data.location.url} className="card-text">
              {data.location.url}
              </a>
              <h6 className="card-title mt-3">Origin</h6>
              <p className="card-text">
              {data.origin.name}
              </p>
              <a href={data.location.url} className="card-text">
              {data.origin.url}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
