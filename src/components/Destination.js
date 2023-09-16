import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
import Bali1 from "../assets/bali1.webp";
import Bali2 from "../assets/bali2.jpg";
import sri1 from "../assets/sri1.webp";
import sri2 from "../assets/sri2.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Destination</h1>
      <p>Tour gives you the opportunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Srinagar: The Paradise on Earth"
        text=" Famously known as 'Heaven on Earth', Srinagar is every bit the epitome of paradise on earth. As picturesque as the most stunning painting to ever be painted, Srinagar, the capital of Jammu and Kashmir, lies on the banks of the Jhelum river, and has a cool, pleasant climate all year round, contributing to the perpetual influx of tourists visiting this city which offers a plethora of gorgeous scenic vistas.
      Best Time: April to October "
        img1={sri1}
        img2={sri2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Bali, Indonesia"
        text="You’ll find beaches, volcanoes, Komodo dragons and jungles
      sheltering elephants, orangutans and tigers. Basically, it’s
      paradise. It’s likely you’ve seen an image of Bali on social media
      at least once in the past seven days, as it’s such a popular bucket
      list destination for 2019. New Orleans: The lively city known for
      its street music, festive vibe and a melting pot of French, African
      and American cultures is well worth the trip. NOLA is a city packed
      with adventures at every turn and should be on everyone’s must-visit
      list."
        img1={Bali1}
        img2={Bali2}
      />
    </div>
  );
};

export default Destination;
