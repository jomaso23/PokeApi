import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Pokemon1 from './components/pokemon1';
import PokemonCard from './container/pokemon';

function App() {
  return (
    <div className="App">
      <PokemonCard></PokemonCard>
    </div>
  );
}

export default App;
