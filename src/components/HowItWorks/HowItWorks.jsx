import React, { useEffect, useRef } from 'react';
import styles from './HowItWorks.module.css';
import { Eye, Cpu, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    // Get the length of the SVG path
    const pathLength = path.getTotalLength();
    
    // Set up the dasharray and dashoffset
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength
    });

    // ScrollTrigger to animate path drawing
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        end: 'bottom 70%',
        scrub: true
      }
    });

    // Card highlight reveals
    const steps = [step1Ref.current, step2Ref.current, step3Ref.current];
    steps.forEach((step, idx) => {
      gsap.fromTo(step,
        { opacity: 0.4, scale: 0.96, borderLeftColor: 'rgba(75, 91, 120, 0.1)' },
        {
          opacity: 1,
          scale: 1,
          borderLeftColor: '#1FA463',
          duration: 0.5,
          scrollTrigger: {
            trigger: step,
            start: 'top 65%',
            end: 'bottom 45%',
            toggleActions: 'play reverse play reverse'
          }
        }
      );
    });
  }, []);

  return (
    <section id="how-it-works" className={styles.sectionContainer} ref={containerRef}>
      <div className={styles.sectionContent}>
        
        {/* Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>The Workflow</span>
          <h2 className={styles.headline}>From noise to signal.</h2>
          <p className={styles.subtitle}>
            Our automated crawlers gather data, our industry analysts decode it, and our delivery engine alerts you immediately.
          </p>
        </div>

        {/* Timeline body */}
        <div className={styles.timelineBody}>
          {/* SVG Pipeline Line */}
          <div className={styles.svgWrapper}>
            <svg viewBox="0 0 100 600" preserveAspectRatio="none" className={styles.timelineSvg}>
              <defs>
                <linearGradient id="pipelineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1FA463" />
                  <stop offset="100%" stopColor="#FFC107" />
                </linearGradient>
              </defs>
              {/* Background grey route */}
              <path 
                d="M 50 0 L 50 600" 
                fill="none" 
                stroke="rgba(75, 91, 120, 0.08)" 
                strokeWidth="4" 
              />
              {/* Active animated vector path */}
              <path 
                ref={pathRef}
                d="M 50 0 L 50 600" 
                fill="none" 
                stroke="url(#pipelineGradient)" 
                strokeWidth="4" 
              />
            </svg>
          </div>

          {/* Step 1: Track */}
          <div className={styles.stepContainer} ref={step1Ref}>
            <div className={styles.stepMarker}>1</div>
            <div className={styles.stepCard}>
              <div className={`${styles.iconBox} ${styles.trackBox}`}>
                <Eye size={20} />
              </div>
              <div className={styles.cardTexts}>
                <h3 className={styles.stepTitle}>01 / Track</h3>
                <p className={styles.stepDesc}>
                  We monitor regulatory policy bulletins, central ministry filings (MNRE, MoP), state electricity boards, IPO prospectuses, and commercial subsidy announcements in real time.
                </p>
                <div className={styles.telemetryTag}>1,400+ Crawl Nodes active</div>
              </div>
            </div>
          </div>

          {/* Step 2: Decode */}
          <div className={styles.stepContainer} ref={step2Ref}>
            <div className={styles.stepMarker}>2</div>
            <div className={styles.stepCard}>
              <div className={`${styles.iconBox} ${styles.decodeBox}`}>
                <Cpu size={20} />
              </div>
              <div className={styles.cardTexts}>
                <h3 className={styles.stepTitle}>02 / Decode</h3>
                <p className={styles.stepDesc}>
                  We translate complex jargon-filled draft regulations, multi-page circulars, and unstructured market pricing indicators into crisp, action-ready intelligence briefings.
                </p>
                <div className={styles.telemetryTag} style={{ color: '#d99c00' }}>Insight analysis core verified</div>
              </div>
            </div>
          </div>

          {/* Step 3: Deliver */}
          <div className={styles.stepContainer} ref={step3Ref}>
            <div className={styles.stepMarker}>3</div>
            <div className={styles.stepCard}>
              <div className={`${styles.iconBox} ${styles.deliverBox}`}>
                <Mail size={20} />
              </div>
              <div className={styles.cardTexts}>
                <h3 className={styles.stepTitle}>03 / Deliver</h3>
                <p className={styles.stepDesc}>
                  We transmit summaries and alerts directly to your inbox, while keeping our central dashboard database constantly updated so you never miss a bid window or policy deadline.
                </p>
                <div className={styles.telemetryTag} style={{ color: '#1FA463' }}>Telegrams and email briefs ready</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
