import NavigationBar from './component/NavigationBar/NavigationBar.js'
import Home from './component/Home/Home.js';
import Skills from './component/Skills/Skills.js';
import Projects from './component/Projects/Projects.js';
import About from './component/About/About.js';
import ContactMe from './component/Contact/Contact.js';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <Skills />
      <Projects />
      <About />
      <ContactMe />
    </div>
  );
}

export default App;
