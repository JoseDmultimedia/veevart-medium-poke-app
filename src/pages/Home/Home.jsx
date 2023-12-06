import React, { useState, useEffect } from "react";
import { getPokemon } from "../../api/pokemon";
import { CardPokemon } from "../../components/CardPokemon/CardPokemon";
import "./Home.css";
// import dataPokemon from "../../resources/poke-json.json";
import axios from "axios";

function Home() {
  const [pokemon, setPokemon] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [pokemonToSearch, setPokemonToSearch] = useState("ditto");
  const [pokemonToDefault, setPokemonDefault] = useState("ditto");
  const [loanding, setLoanding] = useState(true);

  // useEffect(() => {
  //   getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`)
  //     .then((res) => {})
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    const obtenerEvoluciones = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonToDefault}`
      ).catch((error) => {
        console.log(error);
        setNotFound(true);
      })
      if(res !== undefined){
        setPokemon(res.data);
        setLoanding(false);
      }else{
        setNotFound(true)
      }
     
    };
    try {
      obtenerEvoluciones();
    } catch (error) {
      console.log(error);
      setNotFound(true)
    }
    
  }, []);

  // const onSearch = () => {

  //   const obtenerEvoluciones = async () => {
  //     setPokemonToSearch(pokemonToDefault);
  //     const res = await axios.get(
  //       `https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`
  //     ).catch((error) => {
  //       console.log(error);
  //       setNotFound(true);
  //     })
  //     if(res !== undefined){
  //       setPokemon(res.data);
  //       setLoanding(false);
  //     }else{
  //       setNotFound(true)
  //     }
     
  //   };
  //   try {
  //     obtenerEvoluciones();
  //   } catch (error) {
  //     console.log(error);
  //     setNotFound(true)
  //   }
  // }

  console.log(pokemon);
  console.log(notFound)

  const handleChange = (event) => {
    setPokemonDefault(event.target.value);
  };
 

  return (
    <div className="o-container-home">
      <h2 className="">Bienvenido a App Pokemon Veevart Frontend Test!</h2>
      <div className="o-search-bar">
        <p>Busca tu pokemon: </p>
        <input
          value={pokemonToDefault}
          // onInput={(e) => setPokemonToSearch(e.target.value)}
          type="text"
          placeholder="Nombre de pokemon"
          className="o-input"
          onChange={handleChange}
        ></input>
        {/* <button className="o-button-details" onClick={onSearch}>Buscar</button> */}
      </div>
      <div className="o-container-card-home">
        {loanding === false && notFound === true ? (
          <CardPokemon
            title={pokemon.name}
            image={pokemon?.sprites?.front_default}
            idPokemon={0}
            pokemonObj={pokemon}
          />
        ) : (
          <>
          {/* <img src={'../../resources/pikachu-running.gif'}></img> */}
          <p>No se ha encontrado el pookemon</p>
          </>
        )}
      </div>
    </div>
  );
}

export { Home };
