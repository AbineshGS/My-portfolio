import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Technology from "./components/Technology";
import Contact from "./components/contact";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-900 antialiased selection:bg-black-900
    selection: 900">
    <div className="fixed top-0 -z-10 h-full w-full">
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
    </div>
    </div>
      <div className="container mx-auto px-2">
      <Navbar/>
      <Hero/>
      <About/>
      <Technology/>
      <Contact/>
      </div>
    </div>
  );
};

export default App;