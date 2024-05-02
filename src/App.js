import './App.css';
import appConfig from './app.config';
import About from './components/About/About';
import Articles from './components/Articles/Articles';
import Nav from './components/Nav/Nav';
import Opensource  from './components/Project/Project';

function App() {
  return (
    <div className="App">
      <Nav links={appConfig.links} />
      <About {...appConfig.about} />
      <Articles articles={appConfig.articles} />
      <Opensource opensourcearray={appConfig.opensourcedata}/>
    </div>
  );
}

export default App;
