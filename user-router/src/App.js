import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import Users from "./pages/Users";

function App() {
  return (
   <>
    <Navbar/>
    <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="users" element={<Users/>}/>
    <Route path="users/:userID" element={<UserDetail/>}/>
    </Routes>
   </>
  );
}

export default App;
