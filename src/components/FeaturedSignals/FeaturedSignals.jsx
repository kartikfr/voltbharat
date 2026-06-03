import React, { useEffect, useRef } from 'react';
import styles from './FeaturedSignals.module.css';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mockFeatured = [
  {
    category: 'POLICY PULSE',
    date: 'June 03, 2026',
    headline: 'Ministry of Power Amends Electricity Rules to Incentivize BESS Storage',
    summary: 'New guidelines exempt battery energy storage systems (BESS) from transmission charges for the next 8 years, boosting developer margins.',
    impact: 'Strategic Advantage: BESS developers can now bypass inter-state wheeling tariffs.',
    isHot: true
  },
  {
    category: 'SUBSIDY DECODER',
    date: 'June 01, 2026',
    headline: 'PM-KUSUM Component-C Solar Rooftop Tenders Open in 4 States',
    summary: 'Rajasthan, Madhya Pradesh, Gujarat, and Haryana release guidelines for feeder-level solarization. Subsidy caps fixed at ₹1.05 Cr per MW.',
    impact: 'Action: Solar EPC companies must submit bids before the July 22 portal closure.',
    isHot: false
  },
  {
    category: 'IPO WATCH',
    date: 'May 28, 2026',
    headline: 'Waaree Energies Lists at 215% Premium on Stock Exchanges',
    summary: 'India’s largest PV module manufacturer makes a historic capital market entry, drawing over ₹4,300 Cr to expand cell manufacturing capacity.',
    impact: 'Insight: Signal of massive institutional investor demand for domestic clean-tech manufacturing.',
    isHot: false
  },
  {
    category: 'CLEAN-TECH UPDATES',
    date: 'May 25, 2026',
    headline: 'Gujarat Hybrid Park Commissions First 500 MW Wind-Solar Node',
    summary: 'The mega hybrid park integrates real-time smart grid forecasting to reduce voltage fluctuations by 42% using local batteries.',
    impact: 'Development: Proves feasibility of zero-curtailment clean power under strict grid mandates.',
    isHot: false
  }
];

export default function FeaturedSignals() {
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    // Scroll stagger animation
    const cards = gridRef.current.children;
    gsap.fromTo(cards,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <section id="signals" className={styles.sectionContainer} ref={containerRef}>
      <div className={styles.sectionContent}>
        
        {/* Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Featured Intelligence</span>
          <h2 className={styles.headline}>Latest signals from Bharat’s clean-energy economy.</h2>
          <p className={styles.subtitle}>
            Direct bulletins filtered and decoded by our editorial desk over the last 72 hours.
          </p>
        </div>

        {/* Card Grid */}
        <div className={styles.cardGrid} ref={gridRef}>
          {mockFeatured.map((item, idx) => (
            <div key={idx} className={`${styles.signalCard} ${item.isHot ? styles.isHotCard : ''}`}>
              
              {/* Card Header tag rows */}
              <div className={styles.cardHeaderRow}>
                <div className={styles.badgeRow}>
                  <Tag size={12} className={styles.badgeIcon} />
                  <span className={styles.categoryBadge}>{item.category}</span>
                </div>
                <div className={styles.dateRow}>
                  <Calendar size={12} className={styles.dateIcon} />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Title & summary */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.headline}</h3>
                <p className={styles.cardSummary}>{item.summary}</p>
              </div>

              {/* Decoded Actionable Highlight Banner */}
              <div className={styles.decodedBanner}>
                <p className={styles.decodedText}>{item.impact}</p>
              </div>

              {/* Link CTA */}
              <div className={styles.cardFooter}>
                <a href="#newsletter" className={styles.readMoreLink}>
                  <span>Read Full Intelligence Report</span>
                  <ArrowRight size={14} className={styles.arrowIcon} />
                </a>
              </div>

              {/* Accent elements for highlighted cards */}
              {item.isHot && <div className={styles.hotIndicator}>HOT SIGNAL</div>}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
