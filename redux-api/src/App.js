import {
  Routes,
  Route,
} from "react-router-dom";
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />}/>
      <Route path="characters" element={<Characters/>}  />
  
  </Routes>
  </>
  );
}

export default App;
