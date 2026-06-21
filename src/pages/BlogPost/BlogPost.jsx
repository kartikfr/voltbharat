import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import styles from './BlogPost.module.css';
import { getBlogBySlug, getCoverImageUrl, formatCategory, formatDate } from '../../utils/api';

export default function BlogPost() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogBySlug(slug).then(data => {
      setBlog(data);
      setLoading(false);
      if (data) {
        document.title = data.metaTitle || data.title + ' | VOLT Bharat';
      }
    });
  }, [slug]);

  if (loading) {
    return <div className={styles.container}><div className={styles.loadingState}>Loading signal...</div></div>;
  }

  if (!blog) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1 className={styles.notFoundTitle}>Signal not found</h1>
          <p className={styles.notFoundText}>This intelligence report may have been unpublished or moved.</p>
          <Link to="/blog" className={styles.backBtn}>Back to All Signals</Link>
        </div>
      </div>
    );
  }

  const imgUrl = getCoverImageUrl(blog);

  return (
    <div className={styles.container}>
      <Link to="/blog" className={styles.backLink}>
        <ArrowLeft size={14} style={{display:'inline', marginRight: 6}} />
        Back to Intelligence Signals
      </Link>

      <article className={styles.article}>
        <div className={styles.articleMeta}>
          {blog.category && <span className={styles.categoryBadge}>{formatCategory(blog.category)}</span>}
          {blog.publishedAt && <span className={styles.articleDate}>{formatDate(blog.publishedAt)}</span>}
          {blog.author && <span className={styles.articleAuthor}>By {blog.author}</span>}
        </div>

        <h1 className={styles.articleTitle}>{blog.title}</h1>

        {blog.excerpt && <p className={styles.articleExcerpt}>{blog.excerpt}</p>}

        {imgUrl && <img src={imgUrl} alt={blog.title} className={styles.coverImg} />}

        {blog.impact && (
          <div className={styles.impactBanner}>
            <div className={styles.impactLabel}>Decoded Signal</div>
            <p className={styles.impactText}>{blog.impact}</p>
          </div>
        )}

        {blog.body && (
          <div className={styles.bodyContent}>
            <BlocksRenderer content={blog.body} />
          </div>
        )}
      </article>
    </div>
  );
}
