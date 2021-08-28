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
        <div className="contact__info">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
          />
          <label htmlFor="name">Name</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
          />
          <label htmlFor="name">email</label>
        </div>
        <div className="contact__desc">
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            placeholder="Subject"
          />
          <label htmlFor="name">subject</label>
          <input
            type="text"
            className="form-control contact__fulldesc"
            id="description"
            name="description"
            placeholder="Description"
          />
          <label htmlFor="name">description</label>
        </div>
      </form>
    </contact>
  );
}

export default ContactMe;
