import './App.css';
import React from 'react';
import Control from "./Control";

function App() {
  const [pokemon, setPokemon] = React.useState(null);
  
  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/mewtwo')
    .then((response) => response.json())
    .then((json) => setPokemon(json));
  }, []);
  return (
    <>
      <Control />
      {/* {(pokemon && <div className="App">
        <img src={pokemon.sprites.back_default}/>
        <img src={pokemon.sprites.front_default}/>  
        <Dex />
      </div>)} */}
    </>
  );
}

export default App;
