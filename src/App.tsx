import About from "./components/About/Index"
import Bio from "./components/Bio/Index"
import Projects from "./components/Projects/Index"
import Scroll from "./components/Scroll/Index"

function App() {
  return (
    <div className="App">
      <Bio />
      <Scroll />
      <About />
      <Projects />
    </div>
  )
}

export default App
