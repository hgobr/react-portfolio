import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import contactItem from '../../assets/data/contact-item.json';
import Background from '../../components/Background/Background';
import ContactItem from '../../components/ContactItem/ContactItem';
import { ContactItemData } from '../../components/ContactItem/type';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Contact.scss';

function Contact() {
  document.title = 'Contact - Hugo Brothier';

  const cursorClassName = 'custom-type-animation-cursor';

  return (
    <div className="page">
      <Header />

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
        className="content"
      >
        <h3>CONTACT</h3>
        <div className="contactContent">
          <h1>
            <TypeAnimation
              cursor={false}
              className={cursorClassName}
              sequence={[
                500,
                'Hugo, développeur web',
                500,
                (el) => el?.classList.remove(cursorClassName),
              ]}
              speed={30}
            />
          </h1>
          <motion.div
            className="locationContainer"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1], delay: 0.5 }}
          >
            <motion.i
              className="fa-solid fa-location-dot"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1], delay: 1 }}
            ></motion.i>
            <h3>Paris, France</h3>
          </motion.div>

          <div className="contactItemsContainer">
            {contactItem.map((item: ContactItemData, index) => (
              <ContactItem
                key={index}
                leftText={item.leftText}
                linkText={item.linkText}
                icon={item.icon}
                href={item.href}
                delay={index * 0.25}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <Footer />

      <Background page="contact" />
    </div>
  );
}

export default Contact;
