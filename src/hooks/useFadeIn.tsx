import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const useFadeIn = (threshold = 0.1, delay = 0) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref, inView } = useInView({
    threshold,
    triggerOnce: false, // allow re-triggering
  });

  useEffect(() => {
    setHasAnimated(inView);
  }, [inView]);

  const fadeInClass = `transition-all duration-1000 ease-out ${
    hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`;

  const style = {
    transitionDelay: `${delay}ms`,
  };

  return {
    ref,
    fadeInClass,
    style,
  };
};
