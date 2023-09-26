import About from "./components/About/Index"
import Bio from "./components/Bio/Index"
import Experiences from "./components/Experiences/Index"
import Footer from "./components/Footer/Index"
import Navbar from "./components/Navbar/Index"
import Projects from "./components/Projects/Index"
import Scroll from "./components/Scroll/Index"
import { ToastContainer } from 'react-toastify';
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bio />
      <Scroll />
      <About />
      <Experiences />
      <Projects />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
