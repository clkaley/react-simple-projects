import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Error from './pages/Error';

function App() {
  return (
   <>
    <BrowserRouter>
      <nav> Navbar</nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <footer> Footer</footer>
    </BrowserRouter>
   </>
  );
}

export default App;
