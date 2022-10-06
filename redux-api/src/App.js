import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import CharactersDetail from "./pages/CharactersDetail";
import Character from "./pages/Character";
import Quotes from "./pages/Quotes/index";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/character" element={<Character/>}/>
      <Route path="/character/:charID" element={<CharactersDetail/>}  />
      <Route path="/quotes" element={<Quotes/>}  />
  
  </Routes>
  </>
  );
}

export default App;
