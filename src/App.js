import './App.css';
import appConfig from './app.config';
import About from './components/About/About';
import Articles from './components/Articles/Articles';
import Nav from './components/Nav/Nav';
import Projects from './components/Project/Projects'
import Projects from './components/Project/Project'
import Presentations from './components/Presentation/Presentation.jsx';
 

function App() {
  return (
    <div className="App">
      <Nav links={appConfig.links} />
      <About {...appConfig.about} />
      <Articles articles={appConfig.articles} />
      <Projects projects={appConfig.projects}/>
      <Presentations presentations={appConfig.presentations} />
    </div>
  );
}
export default App;
