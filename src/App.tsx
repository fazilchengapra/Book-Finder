import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="bg-[#E9F3FF] w-full h-screen px-8 lg:px-24">
        <Nav />
        <Hero />
      </div>
    </>
  );
}

export default App;
