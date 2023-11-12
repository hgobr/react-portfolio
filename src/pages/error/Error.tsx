import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import './Error.scss';

function Error() {
  document.title = 'Error -Hugo Brothier';

  return (
    <div className="error">
      <Header />

      <div className="content">
        <div className="contentContainer">
          <h1>404</h1>
          <p>Oups ! La page que vous demandez n'existe pas.</p>
          <div className="linkContainer">
            <Link className="underlineLink" to="/">
              Retourner sur la page d’accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
