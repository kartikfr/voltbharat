import React from 'react';
import styles from './Footer.module.css';
import { Mail, ShieldCheck, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* Logo and Narrative block */}
        <div className={styles.brandBlock}>
          <a href="#hero" className={styles.logoLink}>
            <img src="/logos/2.png" alt="VOLT Bharat Logo" className={styles.logoImg} />
          </a>
          <p className={styles.positioningLine}>
            VOLT Bharat is the Voice Of Latest Trends in Bharat, built to track, decode, and deliver the signals shaping India’s renewable-energy economy.
          </p>
          <div className={styles.contactRow}>
            <Mail size={16} />
            <a href="mailto:thevoltbharat@gmail.com" className={styles.contactLink}>thevoltbharat@gmail.com</a>
          </div>
          <div className={styles.contactRow}>
            <MapPin size={16} />
            <span>Jaipur, Rajasthan</span>
          </div>
        </div>

        {/* Directory Links Columns */}
        <div className={styles.linksBlock}>
          <div className={styles.linksColumn}>
            <span className={styles.colHeader}>Scope</span>
            <a href="#meaning" className={styles.footerLink}>Narrative Story</a>
            <a href="#why-volt" className={styles.footerLink}>Why VOLT Exists</a>
            <a href="#dashboard" className={styles.footerLink}>Pulse Telemetry</a>
            <a href="#track" className={styles.footerLink}>What We Track</a>
          </div>

          <div className={styles.linksColumn}>
            <span className={styles.colHeader}>Intelligence</span>
            <a href="#terminal" className={styles.footerLink}>Decryption Core</a>
            <a href="#signals" className={styles.footerLink}>Featured Signals</a>
            <a href="#audience" className={styles.footerLink}>Who It Is Built For</a>
            <a href="#how-it-works" className={styles.footerLink}>How It Works</a>
          </div>

          <div className={styles.linksColumn}>
            <span className={styles.colHeader}>Security & Trust</span>
            <div className={styles.trustBadge}>
              <ShieldCheck size={18} className={styles.badgeIcon} />
              <span>Telemetry Certified</span>
            </div>
            <span className={styles.trustText}>
              All data vectors are cross-verified with official gazettes and ministry records.
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarContent}>
          <span>© {currentYear} VOLT Bharat. All rights reserved.</span>
          <div className={styles.legalLinks}>
            <a href="#newsletter" className={styles.legalLink}>Terms of Service</a>
            <span className={styles.legalDivider}>•</span>
            <a href="#newsletter" className={styles.legalLink}>Privacy Policy</a>
            <span className={styles.legalDivider}>•</span>
            <a href="#newsletter" className={styles.legalLink}>Subscription SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
