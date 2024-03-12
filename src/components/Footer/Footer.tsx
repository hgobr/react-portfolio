import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <Link to="/" className="footerItem date">
          <div className="footerLogo"></div>
          <div className="footerText">
            <span>
              <div className="copyright footerIcon"></div>
              <p>2024</p>
            </span>
            <p>HUGO BROTHIER</p>
          </div>
        </Link>

        <div className="footerItem links">
          <a
            href="https://www.linkedin.com/in/hugo-brothier/"
            className="linkedin footerIcon"
            target="_blank"
          ></a>
          <a
            href="https://github.com/hgobr"
            className="github footerIcon"
            target="_blank"
          ></a>
        </div>
      </div>
    </footer>
  );
}
