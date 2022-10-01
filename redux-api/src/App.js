import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import CharactersDetail from "./pages/CharactersDetail";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />}/>
      <Route path="/character/:charID" element={<CharactersDetail/>}  />
  
  </Routes>
  </>
  );
}

export default App;
