import NavigationBar from './component/NavigationBar/NavigationBar.js'
import Home from './component/Home/Home.js';
import Skills from './component/Skills/Skills.js';
import Projects from './component/Projects/Projects.js';
import About from './component/About/About.js';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <Skills />
      <Projects />
      <About />
    </div>
  );
}

export default App;
