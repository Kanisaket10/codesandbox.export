import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutImg from "../assets/page2.webp";
import Aboutus from "../components/Aboutus";
function About() {
  return (
    <>
      <Hero
        cName="hero-ab"
        heroImg={AboutImg}
        title="About us "
        buttonText="connect with us"
        url="/contact"
        btnClass="show "
      />
      <Aboutus />
      <Footer />
    </>
  );
}

export default About;
