import "../ContactPage/ContactPage.scss";
import ContactMe from "../../components/ContactMe/ContactMe";
import Header from "../../components/Header/Header";

function ContactPage() {
  return (
    <>
      <Header />
      <div className="contact-me-page">
        <ContactMe />
      </div>
    </>
  );
}

export default ContactPage;
