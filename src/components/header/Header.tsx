import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HBlogo from '/icons/HB-logo.svg';
import './Header.scss';
type Pathname = '/' | '/projects' | '/about' | '/contact';

function Header() {
  const location = useLocation();

  const selectedPathname = (pathname: Pathname) => {
    if (pathname === location.pathname) {
      return 'selectedNumber';
    }
  };

  const [buttonClass, setButtonClass] = useState('navButton unclicked');
  const [navClass, setNavClass] = useState('mainNav closed');
  const [isNavClicked, setIsNavClicked] = useState(false);

  const onClickNavButton = () => {
    if (!isNavClicked) {
      setButtonClass('navButton clicked');
      setNavClass('mainNav open');
    } else {
      setButtonClass('navButton unclicked');
      setNavClass('mainNav closed');
    }
    setIsNavClicked(!isNavClicked);
  };

  return (
    <header className="header">
      <nav>
        <div className="wrapLogo">
          <Link to="/">
            <img className="logo" src={HBlogo} />
          </Link>
        </div>
        <button
          className={buttonClass}
          aria-controls="mainNav"
          aria-expanded="false"
          onClick={onClickNavButton}
        >
          <span className="sr-only">Menu</span>
        </button>
        <ul id="mainNav" className={navClass}>
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
