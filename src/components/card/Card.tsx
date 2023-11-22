import { motion } from 'framer-motion';
import './Card.scss';
import { CardData } from './types';

export default function Card({
  image,
  title,
  category,
  description,
}: CardData) {
  return (
    <li className="card" style={{ backgroundImage: image }}>
      <div className="cardContainer">
        <motion.div className="cardContent">
          <motion.div className="titleContainer">
            <span className="category">{category}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </motion.div>
        </motion.div>
      </div>
    </li>
  );
}
