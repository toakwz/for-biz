import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import {
  Manifesto,
  Collection,
  Featured,
  Ingredients,
  Perfumer,
  Discovery,
  Boutique,
  Footer,
} from "./components/Sections";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Collection />
        <Featured />
        <Ingredients />
        <Perfumer />
        <Discovery />
        <Boutique />
      </main>
      <Footer />
    </>
  );
}
