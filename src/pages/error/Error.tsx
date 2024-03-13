import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Error.scss';
import Footer from '../../components/Footer/Footer';
import Background from '../../components/Background/Background';

function Error() {
  document.title = 'Error -Hugo Brothier';

  return (
    <div className="error page">
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
      <Footer />

      <Background page="error" />
    </div>
  );
}

export default Error;
