import Link from "next/link";
import { articles } from "@/data/articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Editorials",
  description: "Browse the complete archive of Royal Dees Fashion editorial pieces, trend analyses, and style guides.",
};

export default function EditorialPage() {
  return (
    <main className="standard-page">
      <Link href="/" className="back-link">&larr; Back to Home</Link>
      <h1 className="standard-title">All Editorials</h1>
      <p style={{ textAlign: 'center', color: '#888', marginBottom: '3rem' }}>Explore our complete archive of {articles.length} fashion articles and industry insights.</p>
      
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
