import React, { useState, useEffect } from "react";
import { CardPokemon } from "../../components/CardPokemon/CardPokemon";
import "./Home.css";
import axios from "axios";

function Home() {
  const [pokemon, setPokemon] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [pokemonToSearch, setPokemonToSearch] = useState("ditto");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`
        );
        const data = response.data;

        if (data && data.name) {
          setPokemon(data);
          setNotFound(false);
        } else {
          setPokemon(null);
          setNotFound(true);
        }
      } catch (error) {
        setPokemon(null);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pokemonToSearch]);

  const handleChange = (event) => {
    setPokemonToSearch(event.target.value);
  };

  return (
    <div className="o-container-home">
      <h2 className="">Bienvenido a App Pokemon Veevart Frontend Test!</h2>
      <div className="o-search-bar">
        <p>Busca tu pokemon: </p>
        <input
          value={pokemonToSearch}
          type="text"
          placeholder="Nombre de pokemon"
          className="o-input"
          onChange={handleChange}
        ></input>
      </div>
      <div className="o-container-card-home">
        {loading ? (
          <p>Cargando...</p>
        ) : notFound || pokemon === null ? (
          <p>No se ha encontrado el Pokemon {pokemonToSearch}</p>
        ) : (
          <CardPokemon
            title={pokemon.name}
            image={pokemon?.sprites?.front_default}
            idPokemon={pokemon.id}
            pokemonObj={pokemon}
          />
        )}
      </div>
    </div>
  );
}

export { Home };
