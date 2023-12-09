import { motion } from 'framer-motion';
import './Card.scss';
import { CardData } from './types';

type CardProps = CardData & {
  delay: number;
};

export default function Card({
  image,
  title,
  category,
  description,
  icon,
  delay,
  link,
}: CardProps) {
  return (
    <motion.li
      className="card"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1], delay }}
    >
      <div className="thumb" style={{ backgroundImage: image }}></div>
      <div className="infos">
        <h2 className="title">
          {title}
          <div className="icon" style={{ backgroundImage: icon }}></div>
        </h2>
        <h3 className="category">{category}</h3>
        <p className="txt">{description}</p>
        <a className="githubLink" href={link}>
          <h3 className="details">voir le projet</h3>
        </a>
      </div>
    </motion.li>
  );
}
