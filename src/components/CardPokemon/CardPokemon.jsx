import React from "react";
import "./CardPokemon.css";
import { useNavigate } from "react-router-dom";

function CardPokemon(props) {
  const { title, image, pokemonObj } = props;

  const navigate = useNavigate();

  const goToMovesFn = () => {
    navigate("move", { state: { pokemon: pokemonObj } });
  };

  const renderMoves = () => {
    let moves = [];
    for (let index = 0; index < 2; index++) {
      moves.push(
        <p key={index} className="o-move">{pokemonObj?.moves[index]?.move.name}</p>
      );
    }
    return moves;
  };

  const renderAbilities = () => {
    let abilities = [];
    for (let index = 0; index < pokemonObj.abilities.length; index++) {
      abilities.push(
        <p key={index} className="o-move">{pokemonObj?.abilities[index]?.ability.name}</p>
      );
    }
    return abilities;
  };

  return (
    <div className="o-container-card">
      <h3 className="o-title-pokemon">{title}</h3>
      <div className="o-info-pokemon-container">
        <img
          src={image}
          alt="imagen del pokemon"
          className="o-image-pokemon"
        ></img>
        <div className="o-card-specs-details">
          <div>
            <h4>MOVIMIENTOS</h4>
            {renderMoves()}
          </div>
          <div>
            <h4>HABILIDADES</h4>
            {renderAbilities()}
          </div>
        </div>
      </div>
      <button className="o-button-details" onClick={goToMovesFn}>
        Movimientos
      </button>
    </div>
  );
}

export { CardPokemon };
