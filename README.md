# React Simple Projects

### Photo Gallery
useState Hook' u kullanıldı.
![Ekran Görüntüsü (424)](https://user-images.githubusercontent.com/74673470/184318519-a46e4240-7f64-45e8-a822-40aecc812a1c.png)

![Ekran Görüntüsü (425)](https://user-images.githubusercontent.com/74673470/184318533-c92a6319-6e04-4f39-a08f-db390db4f233.png)



### Loader
useState ve useEffect Hook'u kullanıldı.

![Ekran Görüntüsü (428)](https://user-images.githubusercontent.com/74673470/184322132-730915c0-bfaf-4a2e-951a-e76c1afc839b.png)

![Ekran Görüntüsü (429)](https://user-images.githubusercontent.com/74673470/184322133-b3270e7f-26df-4ad4-b7ea-19915a57776b.png)



### Filter Search
useState Hook kullanıldı.

![Ekran Görüntüsü (431)](https://user-images.githubusercontent.com/74673470/184377009-f0b4118c-b5aa-420e-ba10-7022cf5ea844.png)

![Ekran Görüntüsü (430)](https://user-images.githubusercontent.com/74673470/184377015-ac12a377-f5a2-4271-bed2-80a680f41213.png)



### Digital Clock
useState Hook, toLocaleTimeString ve setInterval fonksiyonu kullanıldı.

toLocaleTimeString(): Metodu, değişken içerisindeki tarih ve zaman bilgisinin tarayıcı lokasyonuna göre sadece saat bilgisini alarak string veri tipine çevirir.

setInterval():Bir işlemi belirli zaman aralıklarında tekrarlayan iki parametre alan bir fonksiyondur.Birinci parametre çalıştırılacak fonksiyonu, ikinci parametre de bu işlemin kaç mili saniye de tekrar edileceğini temsil eder.

![image](https://user-images.githubusercontent.com/74673470/184623985-39f0de6b-1608-4ede-bf8b-cb7b3db5076f.png)


### Random Quote
useState useEffect ve fetch kullanıldı.

fetch():Fetch API, tıpkı Ajax gibi veri alma, veri gönderme işlemlerinde kullanılan asenkron bir yapıdır.

API -> https://type.fit/api/quotes

![Ekran Görüntüsü (441)](https://user-images.githubusercontent.com/74673470/184708328-44c10847-b3b9-435a-a4f9-c83bfcdc16aa.png)

![Ekran Görüntüsü (438)](https://user-images.githubusercontent.com/74673470/184707874-4a3f3518-05fc-4c9c-a137-6fb318dce2b9.png)

![Ekran Görüntüsü (439)](https://user-images.githubusercontent.com/74673470/184707878-e5c52629-277b-4570-b3a0-3861530d0d2e.png)


### Cards 
Props kullanıldı.

![Ekran Görüntüsü (442)](https://user-images.githubusercontent.com/74673470/184828793-f9789c0d-7f96-456e-b550-c21d5e45920f.png)



### Fetch
useState useEffect ve fetch kullanıldı.
Fetch Api ->https://restcountries.com/v3.1/all

![image](https://user-images.githubusercontent.com/74673470/184853133-bc602da2-30d8-4118-a61f-b08bc999dae2.png)



### Axios
useState useEffect ve axios kullanıldı.
Axios: Getirme API'sına benzer ve HTTP isteklerini gerçekleştirmek için kullanılır.
Npm kullanarak axios'u kurmak için aşağıdaki komut kullanılabilir

```
npm install axios
```
![Ekran Görüntüsü (444)](https://user-images.githubusercontent.com/74673470/184862310-f52afa3b-678b-4892-b3d5-b95d2a8c0d85.png)



### React Router
Route yapısı oluşturuldu. URL Params (dinamik route yapısı için) ve useNavigate() kullanıldı.

![Ekran Görüntüsü (511)](https://user-images.githubusercontent.com/74673470/186387465-8f5a2096-5464-47c8-9b16-2625382e577f.png)

![Ekran Görüntüsü (512)](https://user-images.githubusercontent.com/74673470/186387470-9544ffb5-c6cb-455b-b1f0-4f0dec8b24d9.png)

![Ekran Görüntüsü (513)](https://user-images.githubusercontent.com/74673470/186387588-94536fe2-ee19-447b-8ed2-e1da59302dc2.png)


![Ekran Görüntüsü (514)](https://user-images.githubusercontent.com/74673470/186387474-b801970b-52cc-45c1-a977-de80aa0eb013.png)

![Ekran Görüntüsü (515)](https://user-images.githubusercontent.com/74673470/186387478-c68c8e6b-d148-4a7b-92c2-ffb940278d8f.png)






### User Router
useState() useEffect() ve React-Router kullanıldı.

![Ekran Görüntüsü (518)](https://user-images.githubusercontent.com/74673470/186884909-8f29fb0f-7c6c-4f74-bcef-15d2c276ddc5.png)

![Ekran Görüntüsü (519)](https://user-images.githubusercontent.com/74673470/186884913-8ab20d48-93d1-49f9-bbc7-0cfcfe1915e3.png)

![Ekran Görüntüsü (520)](https://user-images.githubusercontent.com/74673470/186884920-52d4c144-71e3-42c4-b940-4e9983558d4d.png)


### React Query
React Query, Sunucu ile istemci arasındaki State Yönetimini kolaylaştıran bir kütüphane. Herhangi bir fetch işlemi yapıldığında axios ya da fetch ile çekip state e aktarmak yerine bunu daha kısa şekilde kullanabiliyor.


Paket indirilir.
```
npm i react-query
```

Ardından kullanılmak için provide edilir ve import işlemleri yapılır.


```
 import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
 
 const queryClient = new QueryClient()
 
 export default function App() {
   return (
     <QueryClientProvider client={queryClient}>
       <Example />
     </QueryClientProvider>
   )
 }
```


Ardından istediğimiz fetch işlemi yapılır bunun için react-query deki useQuery kullanılır. Syntax bu şekildedir. useQuery("key",()=>)
ilk parametre key diye belirttiğim gibi aslında bir key cachelenmiş dataya erişmek istersek kullanıcağımız ifade burda belirttiğimiz key olucak.

Bize bu data, error ve isLoading isminde veriler sunuyo. Biz bunları manuel olarak yapıyoduk yani state oluşturup onu güncelliyoduk :) 


```
   const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
       res.json()
     )
   )
 
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message

```

* Bunu daha efektif yapmak için tüm fetchleri çekebileceğimiz bir dosya oluşturup ordan çekme işlemi yapılabilir. (api.js gibi)

```
//tüm fetch işlemleri için
import axios from 'axios'

//tüm userslar için 
export const fetchUsers=async()=>{
    const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
    return data
}
```



```

import { useQuery } from "react-query";
import { fetchUsers } from "./api";

function App() {
  const { isLoading, error, data } = useQuery("users",fetchUsers);
```


* React Query DevTools için aşağıdaki kod parçacıkları eklenir.

```
 import { ReactQueryDevtools } from 'react-query/devtools'
      <ReactQueryDevtools initialIsOpen={false} />
```

![Ekran Görüntüsü (523)](https://user-images.githubusercontent.com/74673470/187188681-5963ce7d-1c5c-4972-8bab-29ddedb02e0e.png)



### React Query
Hem route hemde query beraber kullanıldı. Detay sayfasına gidilmek için id alındı.


```
 const { isLoading, error, data } = useQuery(["users", userID], () =>
    fetchUserDetail(userID)
  );
```


```
export const fetchUserDetail=async(id)=>{
    const {data}=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return data
}
```


![Ekran Görüntüsü (524)](https://user-images.githubusercontent.com/74673470/187232914-66667bbf-ef86-45e8-baa9-8b4839824fdf.png)


![Ekran Görüntüsü (525)](https://user-images.githubusercontent.com/74673470/187232918-18f21179-1c51-4044-a239-02369ddd9730.png)


![Ekran Görüntüsü (526)](https://user-images.githubusercontent.com/74673470/187232920-416737ef-c9c3-4a50-89ff-364ae67e2138.png)



### React SWR
 [SWR](https://swr.vercel.app/) detaylı bilgi için


```
npm install swr
```

* Fetch
```
import fetch from 'unfetch'

const fetcher = url => fetch(url).then(r => r.json())

function App () {
  const { data, error } = useSWR('/api/data', fetcher)
  // ...
}
```


* Axios
```
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)

function App () {
  const { data, error } = useSWR('/api/data', fetcher)
  // ...
}
```

dolaylı diziye ulaşabilmek için 
```
{data &&
        data.results.map((item)=>{
          return(
            <div key={item.id} className="col-md-4 col-lg-3 mt-2">
                <img src={item.image} className="img-fluid rounded-start" alt="..."/>
              </div>
```

![Ekran Görüntüsü (529)](https://user-images.githubusercontent.com/74673470/187288725-bca9039d-6921-415a-91ad-45229dcfba57.png)




### React SWR with Router

```
    <Route path="/:characterID" element={<CharacterDetail />}/>
```


```
  const { data, error } = useSWR(
    `https://rickandmortyapi.com/api/character/${characterID}`,
    fetcher
  );
```


![Ekran Görüntüsü (530)](https://user-images.githubusercontent.com/74673470/187389304-c86a2191-2b39-485a-a199-d105b0900ea2.png)

![Ekran Görüntüsü (531)](https://user-images.githubusercontent.com/74673470/187389306-1a975f05-5a8a-420a-a6c1-31e4716b0f57.png)



* Global Configuration
```
import useSWR, { SWRConfig } from 'swr'

<SWRConfig value={options}>
  <Component/>
</SWRConfig>
```


```
import useSWR, { SWRConfig } from 'swr'

function App () {
  return (
    <SWRConfig 
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <Dashboard />
    </SWRConfig>
  )
}
```