import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";

export default function Home() {
  return (
    <main className="main-content">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Elegance Redefined.</h1>
          <p className="hero-subtitle">Discover the new vanguard of modern luxury and street couture.</p>
          <a href="#collections" className="cta-button">Explore Collection</a>
        </div>
        <div className="hero-image-wrapper">
          <Image
            src="/hero_fashion.png"
            alt="Royal Dees Fashion Hero"
            fill
            className="hero-image"
            priority
          />
        </div>
      </section>

      <section id="collections" className="collections">
        <h2 className="section-title">Curated Collections</h2>
        <div className="grid">
          <div className="card">
            <div className="card-image placeholder-1"></div>
            <h3>Avant-Garde</h3>
            <p>Pushing boundaries in silhouette and form.</p>
          </div>
          <div className="card">
            <div className="card-image placeholder-2"></div>
            <h3>Street Luxe</h3>
            <p>Urban aesthetics meeting high-end materials.</p>
          </div>
          <div className="card">
            <div className="card-image placeholder-3"></div>
            <h3>Accessories</h3>
            <p>The perfect accents to complete your vision.</p>
          </div>
        </div>
      </section>

      <section id="editorial" className="editorial-section">
        <h2 className="section-title">The Magazine</h2>
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
      </section>

      <section className="newsletter-section">
        <div className="newsletter-container">
          <h2 className="newsletter-title">Join The Insider Club</h2>
          <p className="newsletter-desc">Subscribe to receive our latest editorial pieces, exclusive collection drops, and style guides directly in your inbox.</p>
          <form className="newsletter-form" action="#">
            <input type="email" placeholder="Your Email Address" className="newsletter-input" required />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
}
