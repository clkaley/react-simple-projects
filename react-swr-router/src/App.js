import {
  Routes,
  Route,
} from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CharacterDetail from "./pages/CharacterDetail";

function App() {
  return (
   <>
   <Navbar/>
  <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/:characterID" element={<CharacterDetail />}/>
      <Route path="*" element={<Error/>}/>
  </Routes>   
   </>
  );
}

export default App;
