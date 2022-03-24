import { useState, useEffect } from "react";
import { apiPokemon } from "../services/api";

export default function usePokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [recarregar, setRecarregar] = useState(0);

  useEffect(() => {
    init();
  }, [recarregar]);

  async function init() {
    const response = await apiPokemon.get("/pokemon");
    setPokemons(response.data?.results);
  }

  function recarregarLista() {
    setRecarregar(recarregar + 1);
  }

  function removerPokemon(name) {
    const newList = pokemons.filter((elemento) => elemento.name !== name);
    setPokemons(newList);
  }

  return {
    pokemons,
    recarregarLista,
    removerPokemon,
  };
}
