import Card from '../Card/Card';
import { CardData } from '../Card/types';
import projects from './../../assets/data/projects.json';
import './CardList.scss';

export default function CardList() {
  return (
    <ul className="cardList">
      {projects.map((card: CardData, index) => (
        <Card
          delay={index * 0.15}
          key={card.id}
          category={card.category}
          title={card.title}
          description={card.description}
          image={`url('/src/assets/images/projects/${card.id}.jpg')`}
          icon={`url('/src/assets/icons/${card.category}.svg')`}
          link={card.link}
        />
      ))}
    </ul>
  );
}
