import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
