import About from "./components/About/Index"
import Bio from "./components/Bio/Index"
import Navbar from "./components/Navbar/Index"
import Projects from "./components/Projects/Index"
import Scroll from "./components/Scroll/Index"
import Technologies from "./components/Technologies/Index"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bio />
      <Scroll />
      <About />
      <Projects />
      <Technologies />
    </div>
  )
}

export default App
