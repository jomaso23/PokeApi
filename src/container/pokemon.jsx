import React, { useEffect, useState } from 'react';
import Pokemon1 from '../components/pokemon1';
import PokemonForm from '../forms/pokemonForm';

const PokemonCard = () => {

    const [pokemons, setPokemons] = useState([]);

  

    const addPokemon = (pokemon) => {
        const tempPokemons=[...pokemons];
        tempPokemons.push(pokemon);
        setPokemons(tempPokemons)
        //console.log(pokemons)
    }

    return (
        <div className='container-fluid text-center row'>
           
                    <h1>Pokedex</h1>

                {pokemons.map((pokemon,index) =>{
                    return(
                        <Pokemon1
                            key={index}
                            newPokemon={pokemon}
                        ></Pokemon1>
                    )
                })}
               <div>
                    <PokemonForm
                        add = {addPokemon}
                    ></PokemonForm>
               </div>
        </div>
    );
}

export default PokemonCard;
