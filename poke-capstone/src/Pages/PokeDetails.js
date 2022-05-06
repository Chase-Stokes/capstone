import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Card, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader';

const PokeDetails = ({ match }) => {
    
    const [pokemonDetails, setPokemonDetails] = useState();
    const [loading, setLoading] = useState(true);
    const id = match.params.id;
    console.log(id)

    const getPokemon = async (id) => {
        const details = await getPokemonData(id);
        setPokemonDetails(details.data);
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return response;
    }

    useEffect(() => {
        getPokemon(id);
    }, []);

    return (
        <>
            {loading ? (
                <Loader/>
            ) :
            (
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card className= 'my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{border: 'none' }}>
                            <Link to={`/pokemon/${pokemonDetails.id}`}>
                                <Card.Img style={ {width: '15rem'}} src={pokemonDetails.sprites.front_default} variant='top'/>
                            </Link>
                            <Card.Body className={`${pokemonDetails.types[0].type.name} rounded text-white`}>
                            <Link to={`/pokemon/${pokemonDetails.id}`} className='link-name'>
                                <Card.Title as='div'>
                                    <strong>
                                        #{pokemonDetails.id} {pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}
                                    </strong>
                                </Card.Title>
                            </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    )
}

export default PokeDetails;
