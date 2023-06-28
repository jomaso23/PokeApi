//import  axios  from 'axios';
import PropTypes from 'prop-types';
import PeticionAxios from './peticionAxios';
import React, { useEffect, useState } from 'react';
//const baseURL = "https://pokeapi.co/api/v2/pokemon/pikachu";

const Pokemon1 = (newPokemon) => {
    const [post, setPost] = useState(null);

    console.log(newPokemon)
      //peticinonAxios tiene que recibir un parametro que es el pokemon solicitado, PENDIENTE!!!!!
       PeticionAxios(newPokemon).then((data)=>{
        setPost(data)
       })
      
      
    

    if  (!post) return null;
   // const pokemon2 = post.sprites.front_default
    const pokemon3 = post.sprites.other.dream_world.front_default
  //  const pokemon4 = post.sprites.other.home.front_default
    
    //console.log(pokemon2)
    return (
        <div>
            <h1>pokedex</h1>
            <h2>{post.name}</h2>
          
           <div>
              <img src={pokemon3}></img>
           </div>
          
        </div>
    );
}
Pokemon1.propTypes = {
  newPokemon: PropTypes.string.isRequired,
}

export default Pokemon1;
