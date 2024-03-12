import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Home.scss';
import CardList from '../../components/CardList/CardList';

function Home() {
  document.title = 'Hugo Brothier';

  const cursorClassName = 'custom-type-animation-cursor';

  const projectsLink = document.getElementsByClassName('projectsLink')[0];

  addEventListener('click', (e) => {
    if (e.target === projectsLink) {
      console.log('click');
    }
  });

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
        <div className="projectsPreviewContainer">
          <motion.h4
            initial={{ opacity: 0, x: -75 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
            className="projectsPreviewTitle"
          >
            Aperçu des projets
          </motion.h4>
          <motion.div
            className="projectsPreview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2.5,
              ease: [0.25, 1, 0.35, 1],
            }}
          >
            <CardList slice={4} preview={true} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
            className="projectsButton"
          >
            <Link to="/projects" className="underlineLink projectsLink">
              {'Tout voir '}
              <i className="fa-solid fa-angles-right fa-sm"></i>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Home;
