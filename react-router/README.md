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







