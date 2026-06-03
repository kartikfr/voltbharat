import React, { useEffect, useRef } from 'react';
import styles from './WhyVoltExists.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyVoltExists() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Word-by-word text highlight scroll animation
    const textElement = textRef.current;
    if (!textElement) return;

    const words = textElement.querySelectorAll(`.${styles.animWord}`);
    
    gsap.fromTo(words, 
      { color: 'rgba(75, 91, 120, 0.22)' }, 
      {
        color: '#0D1B3D',
        stagger: 0.05,
        scrollTrigger: {
          trigger: textElement,
          start: 'top 75%',
          end: 'bottom 45%',
          scrub: true
        }
      }
    );
  }, []);

  // Split content into spans for word animation
  const paragraph1 = "VOLT Bharat stands for Voice Of Latest Trends in Bharat. But it is more than a name.";
  const paragraph2 = "It represents a belief that Bharat’s renewable-energy sector needs a trusted voice — one that can track the market, decode the policies, simplify subsidies, follow capital-market movements, and explain the clean-tech shifts shaping the future.";
  const paragraph3 = "In a sector where every new policy, mission, IPO, subsidy, tender, technology, or regulation can unlock a new business opportunity, staying updated is not optional anymore.";
  const paragraph4 = "It is a competitive advantage. VOLT Bharat is built to become that advantage.";

  const makeAnimSpans = (text) => {
    return text.split(' ').map((word, idx) => (
      <span key={idx} className={styles.animWord}>
        {word}{' '}
      </span>
    ));
  };

  return (
    <section id="why-volt" className={styles.sectionContainer} ref={containerRef}>
      {/* Background Graphic Grid */}
      <div className={styles.bgPulseContainer}>
        <div className={styles.pulseRing} />
        <div className={styles.pulseRingSecond} />
      </div>

      <div className={styles.sectionContent}>
        {/* Left: Headline info */}
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>The Core Mission</span>
          <h2 className={styles.headline}>
            The sector is moving fast. <br />
            <span className={styles.yellowText}>The information is not.</span>
          </h2>
          <div className={styles.accentBar} />
        </div>

        {/* Right: Scroll Highlight Text */}
        <div className={styles.rightCol} ref={textRef}>
          <p className={styles.leadPara}>
            {makeAnimSpans(paragraph1)}
          </p>
          <p className={styles.bodyPara}>
            {makeAnimSpans(paragraph2)}
          </p>
          <p className={styles.bodyPara}>
            {makeAnimSpans(paragraph3)}
          </p>
          <p className={styles.highlightPara}>
            {makeAnimSpans(paragraph4)}
          </p>
        </div>
      </div>
    </section>
  );
}
