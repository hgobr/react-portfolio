import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Card } from '../Card/Card';
import { CardData } from '../Card/utils/types';
import projects from './../../assets/data/projects.json';

type ListProps = {
  match?: {
    params: {
      id: string;
    };
  };
  history?: {
    push: (route: string) => void;
  };
};

const List = ({ match, history }: ListProps) => (
  <ul className="card-list">
    {projects.map((card: CardData) => (
      <Card
        key={card.id}
        isSelected={match?.params.id === card.id}
        history={history}
        {...card}
      />
    ))}
  </ul>
);

export const CardList = () => (
  <Router>
    <Route path={history.length ? '/:id' : '/'} element={<List />} />
  </Router>
);
