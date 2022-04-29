import React from 'react';

function Dex() {
    const [pokedex, setDex] = React.useState(null);
    React.useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokedex/1/')
        .then((response) => response.json())
        .then((json) => setDex(json));
    }, []);
    // console.log(pokedex)
    return (
        <>   
            {pokedex.pokemon_entries.forEach(function(element){
                <li>{element.pokemon_species.name}</li>
            })}
            {/* {(pokedex && <li>
                    {(pokedex.pokemon_entries).forEach(function(element) {
                        // console.log(element.pokemon_species.name)
                    element.pokemon_species.name
                    })} 
            </li>)} */}
                
        </>
    )
} 

export default Dex;