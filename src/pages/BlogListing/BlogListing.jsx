import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './BlogListing.module.css';
import { getBlogs, getCoverImageUrl, formatCategory, formatDate } from '../../utils/api';

const CATEGORIES = ['ALL', 'POLICY_PULSE', 'MARKET_TRENDS', 'IPO_WATCH', 'SUBSIDY_DECODER', 'CLEAN_TECH_UPDATES'];
const CATEGORY_LABELS = {
  ALL: 'All Signals',
  POLICY_PULSE: 'Policy Pulse',
  MARKET_TRENDS: 'Market Trends',
  IPO_WATCH: 'IPO Watch',
  SUBSIDY_DECODER: 'Subsidy Decoder',
  CLEAN_TECH_UPDATES: 'Clean-Tech',
};

export default function BlogListing() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('ALL');

  useEffect(() => {
    getBlogs(100).then(data => {
      setBlogs(data);
      setLoading(false);
    });
  }, []);

  const filtered = activeCategory === 'ALL'
    ? blogs
    : blogs.filter(b => b.category === activeCategory);

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <span className={styles.eyebrow}>Intelligence Signals</span>
        <h1 className={styles.heroTitle}>
          Latest from Bharat's <span>Clean-Energy</span> Economy
        </h1>
        <p className={styles.heroSubtitle}>
          Decoded briefs on policy, markets, IPOs, subsidies, and clean-tech — updated by our editorial desk.
        </p>
      </div>

      <div className={styles.filterBar}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={cat === activeCategory ? `${styles.filterBtn} ${styles.filterBtnActive}` : styles.filterBtn}
            onClick={() => setActiveCategory(cat)}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {loading ? (
        <div className={styles.loadingState}>Loading signals...</div>
      ) : filtered.length === 0 ? (
        <div className={styles.emptyState}>
          <p className={styles.emptyTitle}>No signals yet</p>
          <p className={styles.emptyText}>Check back soon — our editorial desk is decoding the latest updates.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filtered.map(blog => {
            const imgUrl = getCoverImageUrl(blog);
            return (
              <Link key={blog.id} to={`/blog/${blog.slug}`} className={styles.card}>
                {imgUrl ? (
                  <img src={imgUrl} alt={blog.title} className={styles.coverImg} />
                ) : (
                  <div className={styles.coverPlaceholder}>
                    <div className={styles.coverPlaceholderDot} />
                  </div>
                )}
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.categoryBadge}>{formatCategory(blog.category)}</span>
                    <span className={styles.cardDate}>{formatDate(blog.publishedAt)}</span>
                  </div>
                  <h2 className={styles.cardTitle}>{blog.title}</h2>
                  <p className={styles.cardExcerpt}>{blog.excerpt}</p>
                  {blog.impact && (
                    <div className={styles.impactBanner}>
                      <p className={styles.impactText}>{blog.impact}</p>
                    </div>
                  )}
                  {blog.author && <p className={styles.authorRow}>By {blog.author}</p>}
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.readMore}>Read Full Report</span>
                  <ArrowRight size={14} color="#1FA463" />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
