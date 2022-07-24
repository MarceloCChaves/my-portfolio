import About from "./components/About/Index"
import Bio from "./components/Bio/Index"
import Projects from "./components/Projects/Index"
import Scroll from "./components/Scroll/Index"

type CardProject = {
  name: string,
  description: string,
  photo: string;
  link: string,
}

function App(props: CardProject) {
  return (
    <div className="App">
      <Bio />
      <Scroll />
      <About />
      <Projects
        name={props.name}
        description={props.description}
        photo={props.photo}
        link={props.link}
      />
    </div>
  )
}

export default App
