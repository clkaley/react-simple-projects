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
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  const [user,setUser]=useState(null)
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='product/:productID' element={<SingleProduct/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='login' element={<Login setUser={setUser}></Login>}/>
          <Route path='dashboard' element={<Dashboard user={user}></Dashboard>}/>
          <Route path='about' element={<About/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
