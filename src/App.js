import "./styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </>
  );
}
