import Header from '../../components/Header/Header';
import './Contact.scss';

function Contact() {
  document.title = 'Contact - Hugo Brothier';

  return (
    <div>
      <Header />

      <div className="content">
        <h3>CONTACT</h3>
      </div>
    </div>
  );
}

export default Contact;
