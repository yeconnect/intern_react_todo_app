import axios from 'axios';
import React, { useEffect, useState } from "react";

const POKEMON_LIST_URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

const PokeList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get(POKEMON_LIST_URL)
      .then(res => {
        setPokemonList(res.data.results);
      }).catch(err => {
        console.log(err);
      }
      );
  }
  , []);

  // pokemonのIDを取ってくる関数
  const getIdFromUrl= (url) => {
    return url.split("/").slice(-2)[0]
  }
  
  return (
    <div className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {pokemonList.map((pokemon, index) => {
            const pokemonId = getIdFromUrl(pokemon.url)
            return (
                <div key={index}>       
                <a href={`/poke/${pokemonId}`} aria-current="true" className="block py-2 px-4 w-full text-white bg-blue-700 rounded-t-lg border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600">
                    {pokemon.name}
                </a>
                </div> 
            )
        })}
    </div>
  )
}



export default PokeList