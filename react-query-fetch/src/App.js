import { useQuery } from "react-query";

function App() {


  const { isLoading, error, data } = useQuery("users", () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log("data", data);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>React Query</h1>
      {data.map((item, id) => {
        return (
          <div key={id}>
            {item.name}-{item.username}
          </div>
        );
      })}
    </>
  );
}

export default App;
