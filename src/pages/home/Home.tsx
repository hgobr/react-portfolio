import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Home.scss';

function Home() {
  document.title = 'Hugo Brothier';

  const cursorClassName = 'custom-type-animation-cursor';

  return (
    <div className="page">
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
        className="content"
      >
        <motion.h3
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
        >
          Hey, je m'appelle Hugo
        </motion.h3>
        <h1>
          <TypeAnimation
            cursor={false}
            className={cursorClassName}
            sequence={[
              500,
              'Je crée des sites et applications web',
              500,
              (el) => el?.classList.remove(cursorClassName),
            ]}
            speed={40}
          />
        </h1>
        <p>Je suis un développeur web front-end basé sur Paris</p>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
        >
          <Link to="/contact" className="underlineLink">
            Contact
          </Link>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Home;
