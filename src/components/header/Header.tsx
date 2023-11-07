import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
