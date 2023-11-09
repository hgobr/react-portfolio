import { Link } from 'react-router-dom';
import HBlogo from '../../assets/HB-logo.svg';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="wrapLogo">
          <Link to="/">
            <img className="logo" src={HBlogo} />
          </Link>
        </div>
        <ul className="mainNav">
          <li>
            <Link className="link" to="/">
              <span aria-hidden="true">00</span>
              HOME
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              <span aria-hidden="true">01</span>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              <span aria-hidden="true">02</span>
              ABOUT
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              <span aria-hidden="true">03</span>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
