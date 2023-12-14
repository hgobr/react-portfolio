import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import './About.scss';

function About() {
  document.title = 'About - Hugo Brothier';

  return (
    <div className="about">
      <Header />

      <motion.div
        className="content"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
      >
        <motion.h3>À PROPOS</motion.h3>
        <motion.h1
          className="content"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
        >
          <p className="constTxt">
            <p>
              <span className="purpleTxt">const </span>
              <span className="yellowTxt">hugo </span>
              <span className="blueTxt"> = </span>
              <span className="purpleTxt">{' { '}</span>
            </p>
            <p>
              <span className="redTxt space">language</span>:
              <span className="greenTxt"> 'TypeScript'</span>,
            </p>
            <p>
              <span className="redTxt space">library</span>:
              <span className="greenTxt"> 'React'</span>,
            </p>
            <p>
              <span className="purpleTxt">{'}'}</span>;
            </p>
          </p>
        </motion.h1>
      </motion.div>
    </div>
  );
}

export default About;
