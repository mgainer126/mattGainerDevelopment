import "../ContactMe/ContactMe.scss";
import map from "../../assets/map.png";

function ContactMe() {
  return (
    <contact className="contact">
      <div className="contact__wrapper">
        <h3 className="contact__title">Contact Me</h3>
        <p className="contact__summary">
          Please reach out to me with any questions and I'll be sure to contact
          you back as soon as possible
        </p>
        <form className="contact__form">
          <div className="contact__info">
            <input
              type="text"
              className="form-control contact__name"
              id="name"
              name="name"
              placeholder="Name"
            />
            <label htmlFor="name"></label>
            <input
              type="email"
              className="form-control contact__email"
              id="email"
              name="email"
              placeholder="Email"
            />
            <label htmlFor="name"></label>
          </div>
          <div className="contact__desc">
            <input
              type="text"
              className="form-control contact__subject"
              id="subject"
              name="subject"
              placeholder="Subject"
            />
            <label htmlFor="name"></label>
            <input
              type="text"
              className="form-control contact__fulldesc"
              id="description"
              name="description"
              placeholder="Description"
            />
            <label htmlFor="name"></label>
          </div>
          <button className="contact__btn">Send Message</button>
        </form>
      </div>
      <img src={map} alt="map" className="contact__map"></img>
    </contact>
  );
}

export default ContactMe;
