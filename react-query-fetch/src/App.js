import { useQuery } from "react-query";
import { fetchUsers } from "./api";

function App() {
  const { isLoading, error, data } = useQuery("users",fetchUsers);

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
