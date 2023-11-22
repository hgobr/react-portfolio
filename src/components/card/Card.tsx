// import { motion } from 'framer-motion';
import './Card.scss';
import { CardData } from './types';

export default function Card({
  image,
  title,
  category,
  description,
  icon,
}: CardData) {
  return (
    <li className="card">
      <div className="thumb" style={{ backgroundImage: image }}></div>
      <div className="infos">
        <h2 className="title">
          {title}
          <div className="icon" style={{ backgroundImage: icon }}></div>
        </h2>
        <h3 className="category">{category}</h3>
        <p className="txt">{description}</p>
        <h3 className="details">github</h3>
      </div>
    </li>
  );
}

{
  /* <li className="card" style={{ backgroundImage: image }}>
<div className="cardContainer">
  <motion.div className="cardContent">
    <motion.div className="titleContainer">
      <span className="category">{category}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  </motion.div>
</div>
</li> */
}
