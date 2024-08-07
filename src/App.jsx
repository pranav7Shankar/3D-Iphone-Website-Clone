import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
const App=()=> {

  return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <main className="bg-black">
        <Navbar /> 
        <Hero />
        <Highlights/>
      </main>
  )
}

export default App
