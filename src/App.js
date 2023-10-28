import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './components/Banner.js';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills />
    </div>
  );
}

export default App;
