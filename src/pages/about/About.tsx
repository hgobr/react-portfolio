import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import './About.scss';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { useEffect, useRef, useState } from 'react';
import Footer from '../../components/Footer/Footer';

function About() {
  document.title = 'About - Hugo Brothier';

  const imgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rotateElement = (event: MouseEvent) => {
      const element = imgContainerRef.current;
      if (element) {
        element.style.setProperty('transition', '0s');

        const x = event.clientX;
        const y = event.clientY;

        const rect = element.getBoundingClientRect();
        const elementX = rect.left + rect.width / 2;
        const elementY = rect.top + rect.height / 2;

        const distanceX = Math.abs(x - elementX);
        const distanceY = Math.abs(y - elementY);

        const threshold = 300;

        if (distanceX > threshold || distanceY > threshold) {
          element.style.setProperty('transition', '0.35s');
          element.style.setProperty('--rotateX', '0deg');
          element.style.setProperty('--rotateY', '0deg');
          return;
        }

        const offsetX = ((x - elementX) / element.offsetWidth) * 15;
        const offsetY = ((y - elementY) / element.offsetHeight) * 15;

        element.style.setProperty('--rotateX', `${-1 * offsetY}deg`);
        element.style.setProperty('--rotateY', `${offsetX}deg`);
      }
    };

    document.addEventListener('mousemove', rotateElement);
    return () => {
      document.removeEventListener('mousemove', rotateElement);
    };
  }, []);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);

      setTimeout(() => {
        setIsActive(false);
      }, 400);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about page">
      <Header />

      <motion.div
        className="content"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
      >
        <motion.h3
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
        >
          À PROPOS
        </motion.h3>

        <MouseParallaxContainer
          globalFactorX={0.2}
          globalFactorY={0.25}
          resetOnLeave
          className="parallaxContainer"
        >
          <MouseParallaxChild factorX={0.1} factorY={0.1}>
            <motion.h1
              className="content"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
            >
              <MouseParallaxContainer
                globalFactorX={0.3}
                globalFactorY={0.4}
                resetOnLeave
                className="parallaxTextContainer"
              >
                <div className="constTxt">
                  <MouseParallaxChild factorX={0.2} factorY={0.3}>
                    <p>
                      <span className="purpleTxt">const </span>
                      <span className="yellowTxt">hugo </span>
                      <span className="blueTxt"> = </span>
                      <span className="purpleTxt">{' { '}</span>
                    </p>
                  </MouseParallaxChild>
                  <MouseParallaxChild factorX={0.25} factorY={0.35}>
                    <p>
                      <span className="redTxt space">location</span>:
                      <span className="greenTxt"> 'Paris'</span>,
                    </p>
                  </MouseParallaxChild>
                  <MouseParallaxChild factorX={0.3} factorY={0.4}>
                    <p>
                      <span className="redTxt space">language</span>:
                      <span className="greenTxt"> 'TypeScript'</span>,
                    </p>
                  </MouseParallaxChild>
                  <MouseParallaxChild factorX={0.4} factorY={0.5}>
                    <p>
                      <span className="redTxt space">library</span>:
                      <span className="greenTxt"> 'React'</span>,
                    </p>
                  </MouseParallaxChild>
                  <MouseParallaxChild factorX={0.35} factorY={0.5}>
                    <p>
                      <span className="purpleTxt">{'}'}</span>;
                    </p>
                  </MouseParallaxChild>
                </div>
              </MouseParallaxContainer>
            </motion.h1>
          </MouseParallaxChild>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
          >
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.2}
              className="parallaxImgContainer"
            >
              <div className="imgContainer" ref={imgContainerRef}>
                <img src="/src/assets/images/setup.png" className="setupImg" />
              </div>
            </MouseParallaxChild>
          </motion.div>
        </MouseParallaxContainer>

        <motion.div
          initial={{ opacity: 0, y: 250 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: [0.25, 1, 0.35, 1] }}
          className="aboutTextContainer"
        >
          <p>
            Basé en région parisienne, je suis un développeur web{' '}
            <span className={`underlineLink ${isActive ? 'hoverEffect' : ''}`}>
              front-end
            </span>{' '}
            passionné par la création d'expériences utilisateur exceptionnelles.
            Spécialisé en{' '}
            <span className={`underlineLink ${isActive ? 'hoverEffect' : ''}`}>
              React
            </span>{' '}
            et{' '}
            <span className={`underlineLink ${isActive ? 'hoverEffect' : ''}`}>
              TypeScript
            </span>
            , j'aime repousser les limites de la conception graphique pour créer
            des interfaces à la fois esthétiques et fonctionnelles.
          </p>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.25, 1, 0.35, 1],
              delay: 0.25,
            }}
          >
            <p>
              Mon objectif est de transformer des idées en réalité numérique en
              harmonisant{' '}
              <span
                className={`underlineLink ${isActive ? 'hoverEffect' : ''}`}
              >
                forme
              </span>{' '}
              et{' '}
              <span
                className={`underlineLink ${isActive ? 'hoverEffect' : ''}`}
              >
                fonction
              </span>
              . Si vous recherchez un partenaire pour concrétiser votre vision
              et créer des produits numériques{' '}
              <span
                className={`underlineLink ${isActive ? 'hoverEffect' : ''}`}
              >
                captivants
              </span>
              , je serais ravi de collaborer avec vous.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
}

export default About;
