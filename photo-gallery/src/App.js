import React,{useState} from "react"
import images from "./images";
function App() {

  const[selectedImg,setSelectedImg]=useState(images[0]);
  return (
    <>
    <h1>Photo Gallery</h1>
    <div className="container">
      <img src={selectedImg} alt="" />
  
    </div>
    <div className="img-container">
    {images.map((img,i)=>(
            <img onClick={()=>setSelectedImg(img)} key={i} src={img} alt="gallery" />
        ))}
    </div>
    </>
  );
}

export default App;
