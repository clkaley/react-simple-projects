# React Router V6

* npm install react-router-dom@6 paketini indiririz


### Configuring Routes

```
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
```

```
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path='testing' element={<div>test component</div>}/>
    </Routes>
  </BrowserRouter>
```
* path=> yolu belirtir.
/ ise localhost:3000 portunu gösterir.
* element=> ise hangi component ın redner edileceğini gösterir.

* testing e gitmek istiyorsak burda yapılması gereken şey localhost:3000/testing yazmaktır.

*  *eğer varsayılan sayfalar dışında başka bir route yönlendirilmesini istiyorsak bu şekilde yaparız

```
<Route path='*' element={<div>ERROR</div>}/>
```

### Nested Routes: yani home içine diğer componentleri istiyorum demektir.

```
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='product' element={<Product/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
```


### NavLink -> is a special kind of <Link> that knows whether or not it is "active". 

```
    <NavLink to="/" end>
      Home
    </NavLink>
```
NavLink ekte görüldüğü gibi neye tıklarsak onun class active i ekler :) 

![Ekran Görüntüsü (502)](https://user-images.githubusercontent.com/74673470/186357204-815c53df-f335-43c8-a85f-69b5e9c5a26c.png)


* içerden de kendimiz style verebiliriz

```
   <NavLink className='btn' to="/" style={(isActive)=>{
                return {
                    color: isActive ? 'blue' : 'gray'
                }}}>Home
    </NavLink>
```

```
 <NavLink  to="/"
               className={({ isActive }) =>
               isActive ? "link-active" : "link"
             }
            >Home
 </NavLink>
```


### Reading URL Params
useParams: The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>.
Dinamik sayfalar oluşturmak için kullandığımız yöntem.

```
<Route path='product' element={<Product/>}/>
<Route path='product/:productID' element={<SingleProduct/>}/>
```

![Ekran Görüntüsü (505)](https://user-images.githubusercontent.com/74673470/186363356-bd25fd57-1e22-4137-a917-eb37074f1e51.png)

![Ekran Görüntüsü (506)](https://user-images.githubusercontent.com/74673470/186363359-aef91ea6-8bc3-412e-b41d-6085a8b36dd1.png)

```
import React from 'react'
import { useParams } from 'react-router-dom'
import './index.css'
function SingleProduct() {
  console.log(useParams());
  <!-- Burda Obje döner -->
  return (
    <div className='container'>Single Product</div>
  )
}

export default SingleProduct
```

![Ekran Görüntüsü (510)](https://user-images.githubusercontent.com/74673470/186364635-c0b724dc-336f-40e6-93b7-5ae549fdbf19.png)





```
function SingleProduct() {
  <!-- Burdaki değer route daki değer ile eşleşmeli -->
    const {productID}=useParams();
    console.log("productID",productID);
  return (
    <div className='container'>Single Product</div>
  )
}
export default SingleProduct
```


![Ekran Görüntüsü (508)](https://user-images.githubusercontent.com/74673470/186364269-6631713b-a0d1-4fad-b171-425bcb6d2181.png)