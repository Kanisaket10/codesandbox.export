import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Sent a message to us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="subject" />
        <textarea placeholder="Message" row="4"></textarea>
        <button> Send Message</button>
      </form>
    </div>
  );
}
export default ContactForm;
