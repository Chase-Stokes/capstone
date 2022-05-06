import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

import Pokemon from '../Components/Pokemon';
import Loader from '../Components/Loader';
const Splash = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPokemonList = async () => {
        let pokemonArray = [];
        for(let i=1; i <= 151; i++) {
            pokemonArray.push(await getPokemonData(i));
        }
        console.log(pokemonArray);
        setPokemon(pokemonArray);
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return response;
    } 

    useEffect(() => {
        getPokemonList();
    }, [])

    return (
        <>
            { loading ? (
                <Loader />
            ) : (
                <Row>
                    {pokemon.map(p => (
                        <Col key={p.data.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Pokemon pokemon={p.data}></Pokemon>
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
}

export default Splash;