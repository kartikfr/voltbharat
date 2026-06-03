import React, { useEffect, useRef } from 'react';
import styles from './MeaningSection.module.css';
import { Volume2, TrendingUp, Compass, Search } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MeaningSection() {
  const sectionRef = useRef(null);
  const cardGridRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Header trigger animation
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Staggered card grid reveal
    const cards = cardGridRef.current.children;
    gsap.fromTo(cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardGridRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <section id="meaning" className={styles.sectionContainer} ref={sectionRef}>
      <div className={styles.sectionContent}>
        {/* Section Header */}
        <div className={styles.sectionHeader} ref={headerRef}>
          <span className={styles.eyebrow}>The Meaning Behind VOLT Bharat</span>
          <h2 className={styles.headline}>Voice. Energy. Signals. Bharat.</h2>
          <div className={styles.bodyBlock}>
            <p className={styles.leadText}>
              <strong>VOLT Bharat</strong> stands for <strong>Voice Of Latest Trends in Bharat</strong>. But it's more than a name—it is our central story.
            </p>
            <p className={styles.descriptionText}>
              The word <strong>VOLT</strong> carries the energy of the sector we track — electricity, clean power, solar, wind, storage, grid, and the future of energy. But it also represents our role in the ecosystem — to become the <strong>voice</strong> that tracks the latest trends, policies, market movements, IPO signals, subsidy opportunities, and clean-tech shifts across Bharat.
            </p>
            <p className={styles.descriptionText}>
              The <strong>Insight Lens</strong> in our logo represents how we look deeper into every signal. We do not just report updates. We decode what they mean, who they impact, and where the next opportunity may emerge.
            </p>
          </div>
        </div>

        {/* 4 Meaning Cards Grid */}
        <div className={styles.cardGrid} ref={cardGridRef}>
          {/* Card 1: Voice */}
          <div className={styles.card}>
            <div className={`${styles.cardIconWrapper} ${styles.voiceIcon}`}>
              <Volume2 size={32} />
              <div className={styles.iconRipple} />
            </div>
            <h3 className={styles.cardTitle}>Voice</h3>
            <p className={styles.cardText}>
              We simplify complex clean-energy updates into clear, useful intelligence.
            </p>
          </div>

          {/* Card 2: Latest Trends */}
          <div className={styles.card}>
            <div className={`${styles.cardIconWrapper} ${styles.trendsIcon}`}>
              <TrendingUp size={32} />
              <div className={styles.iconPulse} />
            </div>
            <h3 className={styles.cardTitle}>Latest Trends</h3>
            <p className={styles.cardText}>
              We track policy, market, technology, capital, and subsidy movements as they evolve.
            </p>
          </div>

          {/* Card 3: Bharat */}
          <div className={styles.card}>
            <div className={`${styles.cardIconWrapper} ${styles.bharatIcon}`}>
              <Compass size={32} />
              <div className={styles.iconRotate} />
            </div>
            <h3 className={styles.cardTitle}>Bharat</h3>
            <p className={styles.cardText}>
              We focus on India’s renewable-energy ecosystem — from national missions to state-level opportunities.
            </p>
          </div>

          {/* Card 4: Insight Lens */}
          <div className={styles.card}>
            <div className={`${styles.cardIconWrapper} ${styles.lensIcon}`}>
              <Search size={32} />
              <div className={styles.iconScanner} />
            </div>
            <h3 className={styles.cardTitle}>Insight Lens</h3>
            <p className={styles.cardText}>
              We decode the signal behind the news so companies, founders, investors, and professionals can act with clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
