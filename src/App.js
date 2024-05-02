import './App.css';
import appConfig from './app.config';
import About from './components/About/About';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav links={appConfig.links} />
      <About {...appConfig.about} />
    </div>
  );
}

export default App;
