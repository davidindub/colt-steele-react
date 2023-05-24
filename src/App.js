import "./styles.css";
import Greeter from "./Greeter";
import RandomPokemon from "./RandomPokemon";

export default function App() {
  return (
    <div className="App">
      <Greeter />
      <h1>Hello CodeSandbox</h1>
      <h2>Let's see a random Pokémon!</h2>

      <RandomPokemon />
      <RandomPokemon />
      <RandomPokemon />
    </div>
  );
}
