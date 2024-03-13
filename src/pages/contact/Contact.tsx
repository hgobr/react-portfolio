import Background from '../../components/Background/Background';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Contact.scss';

function Contact() {
  document.title = 'Contact - Hugo Brothier';

  return (
    <div className="page">
      <Header />

      <div className="content">
        <h3>CONTACT</h3>
      </div>

      <Footer />

      <Background page="contact" />
    </div>
  );
}

export default Contact;
