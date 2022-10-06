import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import "../Home/style.css";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { Link } from "react-router-dom";
function Character() {
    const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  console.log(characters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <div>
        <div className="container">
        <div className="row">
          {characters.map((character) => {
            return (
              <div
                key={character.char_id}
                className="col-sm-6 col-lg-4 col-xl-3"
              >
                <div className="card mt-5" key={character.char_id}>
                  <Link className="link" to={`/character/${character.char_id}`}>
                    <img
                      src={character.img}
                      alt={character.name}
                      className="card-img-top"
                    />
                    <h4 className="text-center">{character.name}</h4>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Character