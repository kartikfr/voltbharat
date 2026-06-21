const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

export async function getBlogs(limit = 100) {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/blogs?populate=coverImage&sort=publishedAt:desc&pagination[limit]=${limit}`
    );
    if (!res.ok) throw new Error('API error');
    const json = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

export async function getBlogBySlug(slug) {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=coverImage`
    );
    if (!res.ok) throw new Error('API error');
    const json = await res.json();
    return json.data?.[0] || null;
  } catch {
    return null;
  }
}

export function getCoverImageUrl(blog) {
  const img = blog?.coverImage;
  if (!img) return null;
  if (img.url?.startsWith('http')) return img.url;
  return `${STRAPI_URL}${img.url}`;
}

export function formatCategory(cat) {
  const map = {
    POLICY_PULSE: 'POLICY PULSE',
    MARKET_TRENDS: 'MARKET TRENDS',
    IPO_WATCH: 'IPO WATCH',
    SUBSIDY_DECODER: 'SUBSIDY DECODER',
    CLEAN_TECH_UPDATES: 'CLEAN-TECH UPDATES',
  };
  return map[cat] || cat;
}

export function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}
