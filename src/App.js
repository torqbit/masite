import './App.css';
import appConfig from './app.config';
import About from './components/About/About';
import Articles from './components/Articles/Articles';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Nav links={appConfig.links} />
      <About {...appConfig.about} />
      <Articles articles={appConfig.articles} />
      <Footer  footer={appConfig.footer} />
    </div>
  );
}

export default App;
