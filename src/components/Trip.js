import "./TripStyles.css";
import TripData from "./TripData";
import munnar from "../assets/munnar.jpg";
import jais from "../assets/jais.webp";
import gang from "../assets/gang.webp";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={munnar}
          heading="Munnar, Kerala"
          text=" The idyllic hill station Munnar - famous for its tea estates, exotic lush greenery and craggy peaks, is located in the Western Ghats and is one of the best places to visit in Kerala. It serves as the commercial centre for some of the world's largest tea estates. In addition, Munnar has many protected areas which are home to endemic and highly endangered species like the Nilgiri Thar and the Neelakurinji. "
        />
        <TripData
          image={jais}
          heading="Jaisalmer Fort, Rajasthan"
          text="The city's most prominent landmark is the Jaisalmer Fort, also called Sonar Qila (Golden Fort). Unlike most other forts in India, Jaisalmer Fort is not just a tourist attraction. It houses shops, hotels and ancient havelis (homes) where generations continue to live. Jaisalmer traces its inception to the 12th century. "
        />
        <TripData
          image={gang}
          heading="Gangtok, Sikkim"
          text=" It has an amazing view of mount Kanchenjunga, the third highest mountain peak in the world. Also like everything around it, Gangtok is abundant in natural beauty and has various natural attractions such as the Tsomgo Lake, Ban Jhakri falls, Tashi viewpoint and more. "
        />
      </div>
    </div>
  );
}
export default Trip;
// The city's most prominent landmark is the Jaisalmer Fort, also called Sonar Qila (Golden Fort). Unlike most other forts in India, Jaisalmer Fort is not just a tourist attraction. It houses shops, hotels and ancient havelis (homes) where generations continue to live. Jaisalmer traces its inception to the 12th century.
