import React, { useState } from 'react';
import styles from './Newsletter.module.css';
import { Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="newsletter" className={styles.sectionContainer}>
      <div className={styles.sectionContent}>
        {/* Newsletter form card */}
        <div className={styles.ctaCard}>
          <span className={styles.eyebrow}>Stay Ahead</span>
          <h2 className={styles.headline}>Don’t miss the next clean-energy signal.</h2>
          <p className={styles.subtitle}>
            Join 4,200+ industry professionals receiving high-precision updates on policy changes, subsidies, and IPO movements directly to their inbox weekly.
          </p>

          {!isSubmitted ? (
            <form className={styles.subscribeForm} onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter corporate email address"
                className={styles.emailInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Corporate Email Address"
              />
              <button type="submit" className={styles.submitBtn}>
                <span>Subscribe to Signals</span>
                <Send size={16} className={styles.sendIcon} />
              </button>
            </form>
          ) : (
            <div className={styles.successBlock}>
              <CheckCircle size={24} className={styles.successIcon} />
              <span>Subscription confirmed. Welcome to the Pulse feed.</span>
            </div>
          )}
          
          <span className={styles.spamNote}>No spam. Decoded signals only. Unsubscribe with one click.</span>
        </div>

        {/* High-authority Final Statement */}
        <div className={styles.finalStatement}>
          <div className={styles.decorLine} />
          <h3 className={styles.statementText}>
            The clean-energy future will not wait. <br />
            <span className={styles.greenText}>Neither should Bharat’s intelligence layer.</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
