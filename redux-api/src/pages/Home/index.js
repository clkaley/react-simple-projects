import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import Masonry from "react-masonry-css";
import "../Home/style.css";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
function Home() {
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  console.log(characters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if(isLoading){
    return <Loading/>
  }

  if(error){
    return <Error/>
  }
  return (
    <div>
     
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.char_id}>
            <img src={character.img} alt={character.name}
            className="character" />
            <h4>{character.name}</h4>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Home;
