import Background from '../../components/Background/Background';
import CardList from '../../components/CardList/CardList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Projects.scss';
import { motion } from 'framer-motion';

function Projects() {
  document.title = 'Projects - Hugo Brothier';

  return (
    <div className="page projects">
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
        className="content"
      >
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
        >
          <motion.h3
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
          >
            BIENVENUE
          </motion.h3>
          <h1>Mes Projets</h1>

          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
          >
            L'ensemble des projets est disponible sur GitHub
          </motion.p>

          <motion.div
            className="linkContainer"
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
          >
            <a
              href="https://github.com/hgoweb"
              className="underlineLink"
              target="_blank"
            >
              <span>GitHub</span>
              <i className="fab fa-github"></i>
            </a>
          </motion.div>
        </motion.div>

        <CardList />
      </motion.div>
      <Footer />

      <Background page="projects" />
    </div>
  );
}

export default Projects;
