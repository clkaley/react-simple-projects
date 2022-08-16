import Card from "./components/Card";


function App() {
  return (
    <>
    <div>
    <h1 className='title'>The Rick and Morty API</h1>
    <div className="wrapper">
    <Card
      img="https://rickandmortyapi.com/api/character/avatar/48.jpeg"
      name="Black Rick"
    />
     <Card
      img="https://rickandmortyapi.com/api/character/avatar/54.jpeg"
      name=" Bobby Moynihan"
    />
     <Card
      img="https://rickandmortyapi.com/api/character/avatar/270.jpeg"
      name="Prince Nebulon"
    />
      <Card
      img="https://rickandmortyapi.com/api/character/avatar/392.jpeg"
      name=" Bearded Morty"
    />
      <Card
      img="https://rickandmortyapi.com/api/character/avatar/742.jpeg"
      name="Bruce Chutback"
    />
    </div>
    </div>
    </>
  );
}

export default App;
