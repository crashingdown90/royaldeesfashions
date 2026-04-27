import Link from "next/link";
import { articles } from "@/data/articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Editorials",
  description: "Browse the complete archive of Royal Dees Fashion editorial pieces, trend analyses, and style guides.",
};

export default function EditorialPage() {
  const uniqueCategories = Array.from(new Set(articles.map(a => a.category)));

  return (
    <main className="standard-page">
      <Link href="/" className="back-link">&larr; Back to Home</Link>
      <h1 className="standard-title">All Editorials</h1>
      <p style={{ textAlign: 'center', color: '#888', marginBottom: '2rem' }}>Explore our complete archive of {articles.length} fashion articles and industry insights.</p>
      
      {/* Category Pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center', marginBottom: '4rem' }}>
        <span style={{ padding: '0.4rem 1rem', border: '1px solid var(--primary)', color: '#000', backgroundColor: 'var(--primary)', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
          All
        </span>
        {uniqueCategories.map(cat => (
          <Link 
            key={cat} 
            href={`/category/${cat.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`}
            className="category-pill"
          >
            {cat}
          </Link>
        ))}
      </div>
      
      <div className="editorial-grid">
        {articles.map((article) => (
          <Link href={`/editorial/${article.slug}`} key={article.slug} className="editorial-card">
            <div className="editorial-meta">
              <span className="editorial-category">{article.category}</span>
              <span className="editorial-date">{article.date}</span>
            </div>
            <h3 className="editorial-title">{article.title}</h3>
            <p className="editorial-excerpt">{article.excerpt}</p>
            <span className="editorial-read-more">Read Article &rarr;</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
