import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { ArrowRight, Activity } from 'lucide-react';
import { gsap } from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const supportRef = useRef(null);
  const ctaRef = useRef(null);
  const pulseRef = useRef(null);

  useEffect(() => {
    // GSAP Entrance Animations
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out', delay: 0.3 }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(supportRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.4'
    )
    .fromTo(pulseRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      '-=0.2'
    );

    // Canvas Background Particles (Energy Current Flow Simulation)
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class representing flow data signals
    class SignalParticle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height; // spread initially
      }

      reset() {
        this.x = -20;
        this.y = Math.random() * canvas.height;
        this.speedX = Math.random() * 1.5 + 0.8;
        this.amplitude = Math.random() * 40 + 10;
        this.frequency = Math.random() * 0.005 + 0.002;
        this.phase = Math.random() * Math.PI * 2;
        this.size = Math.random() * 2 + 1;
        this.color = Math.random() > 0.3 ? '#1FA463' : '#FFC107'; // green (80%) vs yellow (20%)
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.phase += this.frequency;
        this.yOffset = Math.sin(this.x * this.frequency + this.phase) * this.amplitude;

        if (this.x > canvas.width + 20) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y + this.yOffset, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
        ctx.globalAlpha = 1;
      }
    }

    const particles = Array.from({ length: 40 }, () => new SignalParticle());

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw a subtle grid system
      ctx.strokeStyle = 'rgba(75, 91, 120, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw flowing particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className={styles.heroSection} ref={containerRef}>
      {/* Dynamic Background Canvas */}
      <canvas className={styles.heroCanvas} ref={canvasRef} />

      <div className={styles.heroGridOverlay} />

      <div className={styles.heroContent}>
        {/* Signal Tag */}
        <div className={styles.signalBadge}>
          <Activity size={14} className={styles.signalBadgeIcon} />
          <span className={styles.signalBadgeText}>Signal Active</span>
          <span className={styles.signalBadgeDot} />
        </div>

        {/* H1 Headline with exact design guidelines */}
        <h1 className={styles.heroTitle} ref={titleRef}>
          The Voice Of Latest Trends in <span className={styles.greenHighlight}>Bharat’s</span> <span className={styles.greenHighlight}>Renewable</span> Future
        </h1>

        {/* Subheadline and Supporting Text */}
        <p className={styles.heroSubtitle} ref={subtitleRef}>
          VOLT Bharat tracks the latest policies, market trends, IPO movements, subsidies, clean-tech updates, and opportunity signals shaping India’s renewable-energy economy.
        </p>

        <p className={styles.heroSupportText} ref={supportRef}>
          From policy updates to market shifts, from subsidy clarity to clean-tech intelligence — VOLT Bharat helps the ecosystem see what is changing, why it matters, and where the opportunity is moving.
        </p>

        {/* Action Buttons */}
        <div className={styles.heroActions} ref={ctaRef}>
          <a href="#newsletter" className={styles.primaryCta}>
            <span>Join the Pulse</span>
            <ArrowRight size={18} className={styles.arrowIcon} />
          </a>
          <a href="#dashboard" className={styles.secondaryCta}>
            Explore Latest Signals
          </a>
        </div>

        {/* Micro Line Below CTA */}
        <div className={styles.microLine} ref={pulseRef}>
          <span className={styles.microItem}>Policy Pulse</span>
          <span className={styles.microDot}>•</span>
          <span className={styles.microItem}>Market Trends</span>
          <span className={styles.microDot}>•</span>
          <span className={styles.microItem}>IPO Watch</span>
          <span className={styles.microDot}>•</span>
          <span className={styles.microItem}>Subsidy Decoder</span>
          <span className={styles.microDot}>•</span>
          <span className={styles.microItem}>Clean-Tech Updates</span>
        </div>
      </div>
    </section>
  );
}
