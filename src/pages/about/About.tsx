import Header from '../../components/header/Header';
import './About.scss';

function About() {
  document.title = 'About - Hugo Brothier';

  return (
    <div>
      <Header />

      <div className="content">
        <h3>ABOUT</h3>
      </div>
    </div>
  );
}

export default About;
