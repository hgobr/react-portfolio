import Card from '../Card/Card';
import { CardData } from '../Card/types';
import projects from './../../assets/data/projects.json';
import './CardList.scss';

export default function CardList() {
  return (
    <ul className="cardList">
      {projects.map((card: CardData) => (
        <Card
          key={card.id}
          category={card.category}
          title={card.title}
          description={card.description}
          image={`url('/src/assets/images/${card.id}.jpg')`}
        />
      ))}
    </ul>
  );
}
