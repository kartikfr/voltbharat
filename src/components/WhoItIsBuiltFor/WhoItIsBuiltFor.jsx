import React, { useState } from 'react';
import styles from './WhoItIsBuiltFor.module.css';
import { User, Building2, Landmark, HelpCircle, ShieldAlert, ShieldCheck } from 'lucide-react';

export default function WhoItIsBuiltFor() {
  const [activePersona, setActivePersona] = useState('founders');

  const personas = {
    founders: {
      label: 'Founders & Developers',
      icon: <User size={20} />,
      problem: 'Founders miss critical policy adjustments, causing layout delays and regulatory friction on projects.',
      solution: 'Receive instant notifications on draft grid amendments, tariff orders, and state land allocation updates.',
      stat: '1,200+ Project Developers Logged',
      statLabel: 'Active subscribers'
    },
    companies: {
      label: 'Corporate Entities',
      icon: <Building2 size={20} />,
      problem: 'Companies miss lucrative central and state subsidy windows, leaving significant capital incentives on the table.',
      solution: 'An unified subsidy tracker detailing PLI schemes, rooftop allocations, state tax exemptions, and deadlines.',
      stat: '₹34,400 Cr Subsidies Decoded',
      statLabel: 'Capital mapped'
    },
    investors: {
      label: 'Investors & Funders',
      icon: <Landmark size={20} />,
      problem: 'Investors struggle to catch early signals of emerging clean-tech opportunities and capital market shifts.',
      solution: 'High-precision tracking of hybrid project tenders, BESS capacity growth indexes, and pre-IPO movements.',
      stat: '42+ Funds & LPs Subscribed',
      statLabel: 'Telemetry readers'
    },
    policymakers: {
      label: 'Policymakers & Advisors',
      icon: <HelpCircle size={20} />,
      problem: 'Decision-makers lack consolidated data on cross-state execution benchmarks and regulatory integration speeds.',
      solution: 'A state-level policy database comparing feed-in tariffs, transmission charges, and green energy open access rule compliance.',
      stat: '28 State Regulations Indexed',
      statLabel: 'Grid policies tracked'
    }
  };

  const activeData = personas[activePersona];

  return (
    <section id="audience" className={styles.sectionContainer}>
      <div className={styles.sectionContent}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Platform Audience</span>
          <h2 className={styles.headline}>For everyone building, funding, tracking, or benefiting from Bharat’s renewable future.</h2>
          <p className={styles.subtitle}>
            In a fast-moving energy transition economy, missing a signal is a direct business cost. Here is how we protect your advantage.
          </p>
        </div>

        {/* Console split screen */}
        <div className={styles.audiencePanel}>
          {/* Left Column: Toggles */}
          <div className={styles.personaTabs}>
            {Object.keys(personas).map((key) => {
              const item = personas[key];
              return (
                <button
                  key={key}
                  className={`${styles.personaBtn} ${activePersona === key ? styles.activePersonaBtn : ''}`}
                  onClick={() => setActivePersona(key)}
                >
                  <div className={styles.btnIconWrapper}>{item.icon}</div>
                  <span className={styles.btnText}>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Card */}
          <div className={styles.personaCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{activeData.label}</h3>
              <div className={styles.statChip}>
                <span className={styles.statVal}>{activeData.stat}</span>
                <span className={styles.statLabel}>{activeData.statLabel}</span>
              </div>
            </div>

            <div className={styles.cardBlocks}>
              {/* Problem Block */}
              <div className={styles.blockItem}>
                <div className={`${styles.blockIcon} ${styles.problemIcon}`}>
                  <ShieldAlert size={20} />
                </div>
                <div className={styles.blockTexts}>
                  <span className={styles.blockLabel}>THE STRUGGLE</span>
                  <p className={styles.blockValue}>{activeData.problem}</p>
                </div>
              </div>

              {/* Solution Block */}
              <div className={styles.blockItem}>
                <div className={`${styles.blockIcon} ${styles.solutionIcon}`}>
                  <ShieldCheck size={20} />
                </div>
                <div className={styles.blockTexts}>
                  <span className={styles.blockLabel}>VOLT BHARAT ADVANTAGE</span>
                  <p className={styles.blockValue}>{activeData.solution}</p>
                </div>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <a href="#newsletter" className={styles.cardCta}>
                Get Access to {activeData.label} Bulletins
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
