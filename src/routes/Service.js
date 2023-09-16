import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ServiceImg from "../assets/girls.jpg";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <h1> Service</h1>
      <Hero
        cName="hero-ab"
        heroImg={ServiceImg}
        title="Service "
        text="Choose Your Favourite Destination"
        buttonText="Book Now"
        url="/contact"
        btnClass="show "
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
