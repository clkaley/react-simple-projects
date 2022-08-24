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
import SharedLayout from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='product/:productID' element={<SingleProduct/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
