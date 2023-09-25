"use client"

import React, { useRef, useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from './ParallaxCard.module.css'; // Replace with your CSS module

const Page = ({ offset, gradient, onClick }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>
  </>
);

export default function YourComponent() {
  const parallax = useRef(null);
  const scrollableContainer = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  useEffect(() => {
    const container = scrollableContainer.current;

    const handleScroll = (event) => {
      const scrollX = event.target.scrollLeft;

      // Do something with scrollX if needed
    
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ background: '#dfdfdf' }}>
      <div ref={scrollableContainer} style={{ overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap' }}>
        <Parallax className={styles.container} ref={parallax} pages={3} horizontal>
          <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
          <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
          <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
        </Parallax>
      </div>
    </div>
  );
}
