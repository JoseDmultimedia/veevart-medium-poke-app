import React from "react";
import "./Move.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Move() {
  const location = useLocation();
  const navigate = useNavigate();

  const pokemonObj = location.state.pokemonObj;

  const renderMoves = () => {
    if (!pokemonObj || !pokemonObj.moves) {
      return null;
    }

    let moves = [];
    for (let index = 0; index < pokemonObj.moves.length; index++) {
      moves.push(
        <div key={index} className="o-card-move">
          <strong>Movimiento</strong>
          <p> {pokemonObj.moves[index]?.move.name}</p>
        </div>
      );
    }
    return moves;
  };
  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="o-body-move">
      <span className="o-span-btn" onClick={goToHome}>
        Volver
      </span>
      <div className="o-container-cards-move">{renderMoves()}</div>
    </div>
  );
}

export { Move };
