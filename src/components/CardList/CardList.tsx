import Card from '../Card/Card';
import { CardData } from '../Card/types';
import projects from './../../assets/data/projects.json';
import './CardList.scss';

type CardListProps = {
  slice?: number;
  preview?: boolean;
};

export default function CardList({ slice, preview }: CardListProps) {
  return (
    <ul className="cardList">
      {projects.slice(0, slice).map((card: CardData, index) => (
        <Card
          preview={preview}
          delay={preview ? 0 : index * 0.15}
          key={card.id}
          category={card.category}
          title={card.title}
          description={card.description}
          image={`url('/src/assets/images/projects/${card.id}.jpg')`}
          icon={`url('./../../assets/icons/${card.category}.svg')`}
          link={card.link}
        />
      ))}
    </ul>
  );
}
