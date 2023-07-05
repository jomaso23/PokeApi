import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const PokemonForm = ({add}) => {

    const pokeRef = useRef('')

    const addPokemon = (e) => {
        e.preventDefault();

        const pokemonReference = pokeRef.current.value
        add(pokemonReference)
    }
    return (
        <form  onSubmit={addPokemon}>
            <div >
            {/*este input sera el endpoint de la ruta de peticionAxios(), como se la puedo pasar? */}
                <input ref={pokeRef} placeholder='cual pokemon quieres buscar?' isRequired defaultValue={'pikachu'}></input>
                <button type='submit' className='btn btn-primary'>Buscar</button>

            </div>
        </form>
    );
}
PokemonForm.propTypes = {
    add : PropTypes.func.isRequired,
}

export default PokemonForm;
