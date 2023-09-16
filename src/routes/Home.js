import Destination from "../components/Destination";
import Hero from "../components/Hero";
import HomeImg from "../assets/homepg.png";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Take only pictures, leave only footprints. "
        text="Choose Your Favourite Destination"
        buttonText="Travel plan"
        url="/contact"
        btnClass="show "
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
