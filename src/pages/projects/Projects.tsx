import CardList from '../../components/CardList/CardList';
import Header from '../../components/Header/Header';
import './Projects.scss';

function Projects() {
  document.title = 'Projects - Hugo Brothier';

  return (
    <div>
      <Header />

      <div className="content">
        <h3>PROJECTS</h3>
        <CardList />
      </div>
    </div>
  );
}

export default Projects;
