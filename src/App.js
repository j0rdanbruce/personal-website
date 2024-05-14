import NavigationBar from './component/NavigationBar/NavigationBar.js'
import Home from './component/Home/Home.js';
import Skills from './component/Skills/Skills.js';
import Projects from './component/Projects/Projects.js';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
