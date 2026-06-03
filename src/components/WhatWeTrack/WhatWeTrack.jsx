import React, { useEffect, useRef } from 'react';
import styles from './WhatWeTrack.module.css';
import { FileText, BarChart2, Compass, AlertCircle, Cpu, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeTrack() {
  const gridRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
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

    const cards = gridRef.current.children;
    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  const verticals = [
    {
      title: 'Policy Pulse',
      icon: <FileText size={24} />,
      badge: '18 Active Policies',
      desc: 'National and state-level policy shifts, solar/wind mandates, grid codes, and carbon markets.',
      metrics: 'Tariff orders & grid rules updated daily'
    },
    {
      title: 'Market Trends',
      icon: <BarChart2 size={24} />,
      badge: '11 Industry Indices',
      desc: 'PPA pricing, open-access tariffs, bids, merchant power, and demand telemetry.',
      metrics: 'Power trade indices tracked hourly'
    },
    {
      title: 'IPO Watch',
      icon: <Compass size={24} />,
      badge: '6 Tracked Issues',
      desc: 'Clean-tech public listings, valuations, capitalization indices, and private equity deals.',
      metrics: 'Green equity performance analytics'
    },
    {
      title: 'Subsidy Decoder',
      icon: <AlertCircle size={24} />,
      badge: '14 Active Windows',
      desc: 'Central & state financial assistance, viability gap funding (VGF), PLI windows, and application rules.',
      metrics: 'Subsidy portals verified weekly'
    },
    {
      title: 'Clean-Tech Updates',
      icon: <Cpu size={24} />,
      badge: '28 Project Nodes',
      desc: 'Solar PV technology shifts, BESS integration, green hydrogen hubs, and EV charging infrastructure.',
      metrics: 'Tech developments mapped globally'
    }
  ];

  return (
    <section id="track" className={styles.sectionContainer}>
      <div className={styles.sectionContent}>
        {/* Header */}
        <div className={styles.sectionHeader} ref={headerRef}>
          <span className={styles.eyebrow}>Platform Scope</span>
          <h2 className={styles.headline}>One platform. Every signal that matters.</h2>
          <p className={styles.subtitle}>
            We filter the noises across ministries, capital markets, and industrial networks to deliver clean intelligence.
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className={styles.trackGrid} ref={gridRef}>
          {verticals.map((v, idx) => (
            <div key={idx} className={styles.gridCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>{v.icon}</div>
                <div className={styles.badge}>
                  <span className={styles.pulseDot} />
                  <span>{v.badge}</span>
                </div>
              </div>
              
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{v.title}</h3>
                <p className={styles.cardDesc}>{v.desc}</p>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.metricsText}>{v.metrics}</span>
                <div className={styles.exploreArrow}>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
