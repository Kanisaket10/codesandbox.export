import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/cnt.png";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Hero
        cName="hero-cn"
        heroImg={ContactImg}
        title="contact us "
        buttonText="call now"
        url="/"
        btnClass="show"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
