import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import './Home.scss';

function Home() {
  return (
    <div>
      <Header />

      <div className="content">
        <h3>Hey, je m'appelle Hugo</h3>
        <h1>Je crée des sites et applications web</h1>
        <p>Je suis un développeur web front-end basé sur Paris</p>
        <Link to="/contact" className="underlineLink">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Home;
