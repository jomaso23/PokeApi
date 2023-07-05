import axios from 'axios';
import React,{useState} from 'react';


//se le tiene que pasar una prop que sea el enpoint !!!!!
//const PeticionAxios = ({newPokemon}) => {
  //aqui la url debe recibir ese enpoint coomo expresion literal `${enpoint}`
 /*
  const endpoint = newPokemon
  const baseURL = `https://pokeapi.co/api/v2/pokemon/${endpoint}`;
    
    return(
      axios.get(baseURL).then((response) =>{
        const post= response.data;
          return post
      }))
      
     
}
*/
 const PeticionAxios = async ({newPokemon}) => {
  const endpoint = newPokemon
  const baseURL = `https://pokeapi.co/api/v2/pokemon/${endpoint}`
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los datos de la API.');
  }
};




export default PeticionAxios;
