import logo from './logo.svg';
import './App.css';
import {Title} from "./components/Title";

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Title title="Trending Now"></Title>
      <div className="spacer"></div>
      <Title title="Netflix Originals"></Title>

      </header>
    </div>
  );
}

export default App;
