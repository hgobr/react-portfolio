import { motion } from 'framer-motion';
import './ContactItem.scss';

type ContactItemProps = {
  leftText: string;
  linkText: string;
  icon: string;
  delay: number;
  href: string;
};

export default function ContactItem({
  leftText,
  linkText,
  icon,
  delay,
  href,
}: ContactItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      whileHover={{
        translateX: -20,
        transition: { duration: 0.3 },
      }}
      transition={{ duration: 1, ease: [0.25, 1, 0.35, 1], delay }}
      className="contactItemContainer"
    >
      <span className="leftText underlineLink">{leftText}</span>
      <div className="linkContainer">
        <span className="linkText">{linkText}</span>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href={href}
        >
          <i className={icon}></i>
        </motion.a>
      </div>
    </motion.div>
  );
}
