import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="characters" element={<Characters />}/>
        <Route path="episodes" element={<Episodes />}/>
      </Routes>
    </>
  );
}

export default App;
