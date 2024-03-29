import { useEffect, useRef, useState } from 'react';

type BackgroundProps = {
  page: 'home' | 'projects' | 'about' | 'contact' | 'error';
};

export default function Background({ page }: BackgroundProps) {
  const svgBackgroundRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    const element = svgBackgroundRef.current;

    const backgrounds = {
      home: {
        desktop: '/backgrounds/home-background.svg',
        mobile: '/backgrounds/home-background-mobile.svg',
      },
      about: {
        desktop: '/backgrounds/about-background.svg',
        mobile: '/backgrounds/about-background-mobile.svg',
      },
      projects: {
        desktop: '/backgrounds/projects-background.svg',
        mobile: '/backgrounds/projects-background-mobile.svg',
      },
      contact: {
        desktop: '/backgrounds/contact-background.svg',
        mobile: '/backgrounds/contact-background-mobile.svg',
      },
      error: {
        desktop: '/backgrounds/error-background.svg',
        mobile: '/backgrounds/error-background-mobile.svg',
      },
    };

    const { desktop, mobile } = backgrounds[page] || {
      desktop: '',
      mobile: '',
    };

    element?.style.setProperty('background-image', `url("${desktop}")`);

    if (isMobile) {
      element?.style.setProperty('background-image', `url("${mobile}")`);
    }
  }, [isMobile, page]);

  useEffect(() => {
    const moveBackground = (event: MouseEvent) => {
      const element = svgBackgroundRef.current;

      if (element) {
        const x = event.clientX;
        const y = event.clientY;

        const rect = element.getBoundingClientRect();
        const elementX = rect.left + rect.width / 2;
        const elementY = rect.top + rect.height / 2;

        const offsetX = ((x - elementX) / element.offsetWidth) * 15;
        const offsetY = ((y - elementY) / element.offsetHeight) * 15;

        element.style.setProperty('--translateX', `${-1 * offsetY}px`);
        element.style.setProperty('--translateY', `${-1 * offsetX}px`);
      }
    };

    document.addEventListener('mousemove', moveBackground);
    return () => {
      document.removeEventListener('mousemove', moveBackground);
    };
  }, []);

  useEffect(() => {
    if (svgBackgroundRef.current) {
      const backgroundElement = svgBackgroundRef.current;

      backgroundElement.style.opacity = '0';

      const bringOpacityBack = () => {
        if (svgBackgroundRef.current) {
          svgBackgroundRef.current.style.opacity = '1';
        }
      };

      setTimeout(() => {
        bringOpacityBack();
      }, 200);
    }
  }, []);

  return <div className="svgBackground" ref={svgBackgroundRef}></div>;
}
