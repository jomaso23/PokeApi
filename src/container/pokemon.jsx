import React, { useEffect, useState } from 'react';
import Pokemon1 from '../components/pokemon1';
import PokemonForm from '../forms/pokemonForm';

const PokemonCard = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
       console.log('pokeApi iniciada');
        return () => {
            
        };
    }, [pokemons]);

    const addPokemon = (pokemon) => {
        const tempPokemons=[]
        tempPokemons.push(pokemon);
        setPokemons(tempPokemons)
    }

    return (
        <div>
            <div className='card'>
                <div className='card-header'>

                </div>
                <div className='card-body'>

                {pokemons.map((pokemon,index) =>{
                    return(
                        <Pokemon1
                            newPokemon={pokemon}
                        ></Pokemon1>
                    )
                })}
                    
                </div>
                <div className='card-footer'>
                    <PokemonForm
                        add = {addPokemon}
                    ></PokemonForm>
                </div>
                
            </div>
        </div>
    );
}

export default PokemonCard;
