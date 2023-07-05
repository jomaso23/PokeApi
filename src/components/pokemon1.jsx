//import  axios  from 'axios';
import PropTypes from 'prop-types';
import PeticionAxios from './peticionAxios';
import React, { useEffect, useState } from 'react';


const Pokemon1 = (newPokemon,key) => {
    const [post, setPost] = useState(); 
    
    /*
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetchData();
        setPost(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    */
       PeticionAxios(newPokemon).then((data)=>{
        setPost(data)
       })
  
    if  (!post) return null;
    //const pokemon2 = post.sprites.front_default
    const pokemon3 = post.sprites.other.dream_world.front_default
    //const pokemon4 = post.sprites.other.home.front_default
    
    return (
        <div className='col-2 text-align-center'>
        
            <div className='card '>
            <div className='card-header '> 
              <h2>{post.name}</h2>
              <i className='bi bi-x-circle'/>
            </div>
            <div className='card-body justify-content '>
              <img className = 'class="card-img-top" 'style={{width:'100%'}} src={pokemon3} alt = '' ></img>
            </div>
            <div className='card-footer'>info de attk y def PENDIENTE¡¡</div>
 
        </div>  
        </div>
    );
}
Pokemon1.propTypes = {
  newPokemon: PropTypes.string.isRequired,
}

export default Pokemon1;
