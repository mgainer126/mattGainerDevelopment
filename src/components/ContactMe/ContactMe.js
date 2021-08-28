import "../ContactMe/ContactMe.scss";

function ContactMe() {
  return (
    <contact className="contact">
      <h3 className="contact__title">Contact Me</h3>
      <p className="contact__summary">
        Please reach out to me with any questions and I'll be sure to contact
        you back as soon as possible
      </p>
      <form className="contact__form">
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Name"
        />
        <label htmlFor="name">Name</label>
      </form>
    </contact>
  );
}

export default ContactMe;
