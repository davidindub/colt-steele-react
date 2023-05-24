import "./RandomPokemon.css";

export default function RandomPokemon() {
  const randomNumber = Math.floor(Math.random() * 150) + 1;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`;

  return (
    <div className="RandomPokemon">
      <h1>Pokémon #{randomNumber}:</h1>
      <img src={url} alt="" className="PokemonImage" />
    </div>
  );
}
