import React from 'react';

function Dex() {
    const [pokedex, setDex] = React.useState(null);
    React.useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokedex/1/')
        .then((response) => response.json())
        .then((json) => setDex(json));
    }, []);
    console.log(pokedex)
    return (
        (pokedex && <div>
            {/* <ul> */}
                {/* {pokedex.pokemon_entries.map((dexInfo) => {
                <li>{dexInfo.pokemon_species.name}</li>
                })}  */}
                {(pokedex.pokemon_entries).forEach(function(element) {
                    console.log(element.pokemon_species.name)
                // <li>{element.pokemon_species.name}</li>
                })} 
            {/* </ul> */}
        </div>) 
    )
}

export default Dex;