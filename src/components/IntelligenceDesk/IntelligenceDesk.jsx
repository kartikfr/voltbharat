import React, { useState, useEffect } from 'react';
import styles from './IntelligenceDesk.module.css';
import { Eye, Shield, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';

const mockSignals = [
  {
    raw: "MNRE CIRCULAR REF #492/2026-SOLAR SEC-3 DECLARES ROOFTOP ADJUSTMENTS PURSUANT TO SECTION 11(2)... BIDDERS IN STATE DISCOMS EXPERIENCING DELAYS REGULATION COMPLIANCE DEADLINE AMENDED...",
    category: "POLICY DECODED",
    headline: "MNRE Extends Solar Rooftop Subsidy Timeline",
    insight: "The Ministry has extended the rooftop solar subsidy window to Dec 31, 2026. Central financial assistance remains at 40% up to 3kW. No action needed for pending applications; new registrations under ALMM exemptions are now open.",
    action: "Solar developers should immediately register backlogged bids under the revised guidelines.",
    impact: "HIGH IMPACT • NATIONAL SCALE"
  },
  {
    raw: "TARIFF INDEX RECORDED RURAL DISCOM GUJARAT 2.52 INR PER KWH OFF-PEAK SHIFT TO 3.12 INR PEAK HOURS BESS GRID DISCHARGE REGULATORY CLEARANCE PENDING REG. 84B ANNOUNCEMENT...",
    category: "MARKET DECODED",
    headline: "Gujarat Peak Tariff BESS Premium Confirmed",
    insight: "Gujarat regulatory body approves off-peak storage tariff of ₹2.52/kWh and peak discharge premium of ₹3.12/kWh for utility-scale battery energy storage systems (BESS).",
    action: "Storage grid operators should optimize dispatch schedules during peak 6 PM - 10 PM windows.",
    impact: "HIGH YIELD • REGIONAL GRID"
  },
  {
    raw: "FINANCIAL TELEMETRY ACME WIND/SOLAR SUBMITTED CONFIDENTIAL DRAFT RED HERRING PROSPECTUS (DRHP) FOR INITIAL PUBLIC OFFERING PROPOSING VALUE ₹3,000 CR NOMINAL CAPEX RESERVED...",
    category: "IPO WATCH",
    headline: "Acme Green Energy DRHP Approved",
    insight: "Acme green-energy arm DRHP approved for IPO raising ₹3,000 Cr. 72% of proceeds are locked for 1.2 GW Rajasthan hybrid wind-solar project capex expansion.",
    action: "Clean-tech investors should review institutional allocation dates scheduled for Q3.",
    impact: "MARKET EXPANSION • INVESTMENT SIGNAL"
  }
];

export default function IntelligenceDesk() {
  const [index, setIndex] = useState(0);
  const [isDecoding, setIsDecoding] = useState(false);
  const [currentRaw, setCurrentRaw] = useState('');
  const [currentClean, setCurrentClean] = useState(mockSignals[0]);

  useEffect(() => {
    // Typing simulation loop
    let typingTimer;
    const activeSignal = mockSignals[index];
    setIsDecoding(true);
    setCurrentRaw('');
    
    let charIdx = 0;
    const rawText = activeSignal.raw;
    
    // Fast typing effect for raw noise
    const typeRaw = () => {
      if (charIdx < rawText.length) {
        setCurrentRaw(rawText.substring(0, charIdx + 8));
        charIdx += 8;
        typingTimer = setTimeout(typeRaw, 40);
      } else {
        // Raw typing complete, trigger decoding animation
        setTimeout(() => {
          setIsDecoding(false);
          setCurrentClean(activeSignal);
        }, 800);
      }
    };
    
    typeRaw();

    return () => clearTimeout(typingTimer);
  }, [index]);

  useEffect(() => {
    // Cycle index every 8 seconds
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % mockSignals.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="terminal" className={styles.sectionContainer}>
      <div className={styles.sectionContent}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>The Decryption Core</span>
          <h2 className={styles.headline}>Built like an intelligence desk. Designed for Bharat.</h2>
          <p className={styles.subtitle}>
            Watch raw noise from filings, circulars, and market bulletins get filtered into high-precision, actionable energy signals in real time.
          </p>
        </div>

        {/* The Decryption Console widget */}
        <div className={styles.terminalConsole}>
          
          {/* Top bar */}
          <div className={styles.consoleTitleBar}>
            <div className={styles.windowDots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <div className={styles.windowTitle}>VOLT Bharat Signals Terminal - Active Feed</div>
            <div className={styles.telemetryTag}>
              <span className={styles.telemetryDot} />
              <span>Decryption Core Active</span>
            </div>
          </div>

          {/* Left Panel: Noisy Feed */}
          <div className={styles.consoleMain}>
            <div className={styles.rawPanel}>
              <div className={styles.panelHeader}>
                <AlertTriangle size={14} className={styles.warnIcon} />
                <span>RAW NEWS STREAM (INCOMING NOISE)</span>
              </div>
              <div className={styles.panelContent}>
                <div className={`${styles.rawTerminalText} ${isDecoding ? styles.scrollingText : ''}`}>
                  {currentRaw}
                  {isDecoding && <span className={styles.cursor}>_</span>}
                </div>
              </div>
              <div className={styles.panelFooter}>
                <span>Baud Rate: 115200bps</span>
                <span>Source: Crawler Node Beta</span>
              </div>
            </div>

            {/* Center: The Insight Lens */}
            <div className={styles.lensContainer}>
              <div className={`${styles.lensRing} ${isDecoding ? styles.lensRingActive : ''}`}>
                <div className={styles.lensCore}>
                  <Eye size={28} className={styles.lensEyeIcon} />
                </div>
                <div className={styles.scannerLine} />
              </div>
              <div className={styles.decoderText}>
                {isDecoding ? 'DECODING INPUT...' : 'SIGNAL LOCKED'}
              </div>
              <div className={styles.connectorLine}>
                <ArrowRight size={24} className={isDecoding ? styles.pulseArrow : ''} />
              </div>
            </div>

            {/* Right Panel: Clean Signal */}
            <div className={`${styles.cleanPanel} ${isDecoding ? styles.panelLoading : ''}`}>
              <div className={styles.panelHeader}>
                <CheckCircle2 size={14} className={styles.successIcon} />
                <span>DECODED ACTIONABLE INSIGHT</span>
              </div>
              
              <div className={styles.cleanContent}>
                {!isDecoding ? (
                  <>
                    <div className={styles.badgeRow}>
                      <span className={styles.signalBadge}>{currentClean.category}</span>
                      <span className={styles.impactBadge}>{currentClean.impact}</span>
                    </div>
                    
                    <h4 className={styles.signalHeadline}>{currentClean.headline}</h4>
                    
                    <div className={styles.signalField}>
                      <span className={styles.fieldLabel}>DECODED SIGNAL</span>
                      <p className={styles.fieldValue}>{currentClean.insight}</p>
                    </div>

                    <div className={styles.signalFieldAction}>
                      <span className={styles.fieldLabelAction}>IMMEDIATE ACTION REQUIRED</span>
                      <p className={styles.fieldValueAction}>{currentClean.action}</p>
                    </div>
                  </>
                ) : (
                  <div className={styles.decryptionLoader}>
                    <div className={styles.spinner} />
                    <span>Filtering background noise...</span>
                  </div>
                )}
              </div>

              <div className={styles.panelFooter}>
                <span>Encrypted Layer: SHA-256</span>
                <span>Status: VERIFIED</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
