import { useState, useEffect } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import GetdataPokemon from './getdataPokemon';

function Pokemon() {
  const [dataPokemon, setDataPokemon] = useState([]);
  const pokemons = 100; // Define the number of Pokémon to fetch

  useEffect(() => {
    const fetchPokemons = async () => {
      let pokemonList = [];
      for (let i = 1; i <= pokemons; i++) {
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemonTypes = result.data.types.map((item) => item.type.name);
        const datapoke = {
          id_pokemon: i,
          name: result.data.name,
          image: result.data.sprites.front_default,
          type: pokemonTypes.join(","),
        };
        pokemonList.push(datapoke);
      }
      setDataPokemon(pokemonList);
    };

    fetchPokemons();
  }, []);
  // console.log(dataPokemon);
  
  return (
 
    // <div className='card' key={uuidv4()}>
    //     {dataPokemon.map((pokemon) => (
    //         // <div key={pokemon.id_pokemon}>
    //         //     <h1>{pokemon.id_pokemon}</h1>
    //         //     <span className='card--id'>#{pokemon.id_pokemon}</span>
    //         //     <img className= 'card--image' src={pokemon.image} alt={pokemon.name} />
    //         //     <h1 className='card-name'>{pokemon.name}</h1>
    //         //     <span className='card--detail'>{pokemon.type}</span>
    //         // </div>
    //         <h1 key={pokemon.id_pokemon}>{pokemon.id_pokemon}</h1>
    //         // <span className='card--id'>#{pokemon.id_pokemon}</span>
    //         // <img className= 'card--image' src={pokemon.image} alt={pokemon.name} />
    //         // <h1 className='card-name'>{pokemon.name}</h1>
    //         // <span className='care--detail'>{pokemon.type}</span>
    //     ))}
    // </div>



    <ul className='list'>
      {dataPokemon.map((pokemon) => {
        // console.log(pokemon.id_pokemon);
        return <GetdataPokemon {...pokemon} key={uuidv4()}/>
        // <li key={uuidv4}>
        //   <div className='card'>
        //   <span className='card--id'>#{pokemon.id_pokemon}</span>
        //   <img className= 'card--image' src={pokemon.image} alt={pokemon.name} />
        //   <h1 className='card-name'>{pokemon.name}</h1>
        //   <span className='care--detail'>{pokemon.type}</span>
        //   </div>
        // </li>
      })}
    </ul>
    )
}

export default Pokemon
