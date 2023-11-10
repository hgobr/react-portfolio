import { Link, useLocation } from 'react-router-dom';
import HBlogo from '../../assets/HB-logo.svg';
import './Header.scss';

type Pathname = '/' | '/projects' | '/about' | '/contact';

function Header() {
  const location = useLocation();

  const selectedPathname = (pathname: Pathname) => {
    if (pathname === location.pathname) {
      return 'selectedNumber';
    }
  };

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
            <Link to="/">
              <span className={selectedPathname('/')} aria-hidden="true">
                00
              </span>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <span
                className={selectedPathname('/projects')}
                aria-hidden="true"
              >
                01
              </span>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              <span className={selectedPathname('/about')} aria-hidden="true">
                02
              </span>
              ABOUT
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              <span className={selectedPathname('/contact')} aria-hidden="true">
                03
              </span>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
