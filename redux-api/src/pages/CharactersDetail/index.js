import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import {Helmet} from "react-helmet";
function CharactersDetail() {
  const { charID } = useParams();
  console.log("charID", charID);
  const [character, setCharacter] = useState("");
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    axios(`https://www.breakingbadapi.com/api/characters/${charID}`)
      .then((res) => res.data)
      .then((data) => setCharacter(data[0]))
      .finally(()=>setLoading(false));
  }, [charID]);

  return (
    <>
    {loading && <Loading/>}
    <Helmet>
                <meta charSet="utf-8" />
                <title>Character</title>
               
            </Helmet>
      <div className="card mb-3 mt-5" style={{ maxwidth: "240px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={character.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">
                {character.occupation}
              </p>
              <p className="card-text">
                <small className="text-muted">{character.status}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharactersDetail;
