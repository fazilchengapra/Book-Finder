import { Theme } from "@radix-ui/themes";
import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Theme>
        <div className="bg-[#E9F3FF] w-full h-auto min-h-screen px-8 lg:px-36">
          <Nav />
          <Hero />
        </div>
      </Theme>
    </>
  );
}

export default App;
