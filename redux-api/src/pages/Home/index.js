import React, { useEffect } from "react";
import { useSelector ,useDispatch} from "react-redux";
import {fetchCharacters } from "../../redux/charactersSlice";


function Home() {
  const data =useSelector((state)=>state.characters)
  console.log(data);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchCharacters());
  },[dispatch]);
  return <div>Home page</div>;
}

export default Home;
