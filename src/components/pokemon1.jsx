import  axios  from 'axios';
import React, { useEffect, useState } from 'react';
const baseURL = "https://pokeapi.co/api/v2/pokemon/pikachu";
const Pokemon1 = () => {
    const [post, setPost] = useState(null);

    useEffect(()=>{
        axios.get(baseURL).then((response) =>{
            setPost(response.data);
            console.log(response.data);
        })
    },[])

    if  (!post) return null;
    const pokemon2 = post.sprites
    const pokemon = pokemon2.front_default 
    console.log(pokemon)
    return (
        <div>
            <h1>pokedex</h1>
            <h2>{post.name}</h2>
            <div>
             <img src={pokemon} alt= ''/> 
           </div>
        </div>
    );
}

export default Pokemon1;
