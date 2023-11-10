import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import './Home.scss';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div>
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
        className="content"
      >
        <h3>Hey, je m'appelle Hugo</h3>
        <h1>Je crée des sites et applications web</h1>
        <p>Je suis un développeur web front-end basé sur Paris</p>
        <Link to="/contact" className="underlineLink">
          Contact
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
