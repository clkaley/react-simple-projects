import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        {/* localhost:3000 "/" denktir.*/}
        <Route path='/' element={<div>hello</div>}/>
        <Route path='testing' element={<div>test component</div>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
