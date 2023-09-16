import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Troom</h1>
          <p>Choose Your Favourite Destination </p>
        </div>
        <div>
          <a herf="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a herf="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a herf="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a herf="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a herf="/">Changelog</a>
          <a herf="/">Status</a>
          <a herf="/">License</a>
          <a herf="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a herf="/">Github</a>
          <a herf="/">Issues</a>
          <a herf="/">Project</a>
          <a herf="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a herf="/">Support</a>
          <a herf="/">Troubleshooting</a>
          <a herf="/">Contact us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a herf="/">Terms od Services</a>
          <a herf="/">Private Policy</a>
          <a herf="/">License</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
