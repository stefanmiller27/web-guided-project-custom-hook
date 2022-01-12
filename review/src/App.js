import React, { useState, useEffect } from "react";
import "./styles.scss";

import SelectedPoke from './components/SelectedPoke';
import PokeList from './components/PokeList';

import usePokeState from './hooks/usePokeState';

import getPokemen from './services/getPokemen';
import getPokemon from './services/getPokemon';

function App() {
  const [selectedPokemon, pokemen, handlePoke] = usePokeState();
  
  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon}/>
      <PokeList pokemen={pokemen} handlePoke={handlePoke}/>
    </div>
  );
}

export default App;