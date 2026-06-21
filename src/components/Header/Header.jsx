import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`${styles.headerContainer} ${isScrolled ? styles.isScrolled : ''}`}>
      <div className={styles.headerContent}>
        {/* Logo */}
        <a href="#hero" className={styles.logoLink}>
          <img src="/logos/2.png" alt="VOLT Bharat Logo" className={styles.logoImg} />
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <a href="#meaning" className={styles.navLink}>Narrative</a>
          <a href="#why-volt" className={styles.navLink}>The Gap</a>
          <a href="#dashboard" className={styles.navLink}>Pulse Dashboard</a>
          <a href="#track" className={styles.navLink}>What We Track</a>
          <a href="#terminal" className={styles.navLink}>Intelligence Desk</a>
          <a href="#how-it-works" className={styles.navLink}>How It Works</a>
          <Link to="/blog" className={styles.navLink}>Intelligence Blog</Link>
        </nav>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <a href="#newsletter" className={styles.ctaButton}>
            <span>Join the Pulse</span>
            <ArrowUpRight className={styles.ctaIcon} size={16} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuButton} onClick={toggleMenu} aria-label="Toggle Navigation Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${isMenuOpen ? styles.mobileDrawerOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <a href="#meaning" className={styles.mobileNavLink} onClick={toggleMenu}>Narrative</a>
          <a href="#why-volt" className={styles.mobileNavLink} onClick={toggleMenu}>The Gap</a>
          <a href="#dashboard" className={styles.mobileNavLink} onClick={toggleMenu}>Pulse Dashboard</a>
          <a href="#track" className={styles.mobileNavLink} onClick={toggleMenu}>What We Track</a>
          <a href="#terminal" className={styles.mobileNavLink} onClick={toggleMenu}>Intelligence Desk</a>
          <a href="#how-it-works" className={styles.mobileNavLink} onClick={toggleMenu}>How It Works</a>
          <Link to="/blog" className={styles.mobileNavLink} onClick={toggleMenu}>Intelligence Blog</Link>
          <a href="#newsletter" className={`${styles.mobileNavLink} ${styles.mobileCtaLink}`} onClick={toggleMenu}>
            Join the Pulse <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
