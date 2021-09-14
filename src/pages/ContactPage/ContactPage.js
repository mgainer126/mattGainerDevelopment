import "../ContactPage/ContactPage.scss";
import ContactMe from "../../components/ContactMe/ContactMe";
import NavBar from "../../components/NavBar/NavBar";

function ContactPage() {
  return (
    <>
      <NavBar />
      <div className="contact-me-page">
        <ContactMe />
      </div>
    </>
  );
}

export default ContactPage;
