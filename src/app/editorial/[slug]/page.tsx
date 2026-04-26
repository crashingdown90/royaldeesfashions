import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  
  return {
    title: `${article.title}`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: new Date(article.date).toISOString(),
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
    alternates: {
      canonical: `https://royaldeesfashion.com/editorial/${article.slug}`,
    }
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: new Date(article.date).toISOString(),
    publisher: {
      '@type': 'Organization',
      name: 'Royal Dees Fashion',
      logo: {
        '@type': 'ImageObject',
        url: 'https://royaldeesfashion.com/next.svg',
      },
    },
  };

  return (
    <main className="article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="article-container">
        <Link href="/" className="back-link">&larr; Back to Home</Link>
        
        <header className="article-header">
          <div className="article-meta-top">
            <span className="category">{article.category}</span>
            <span className="separator">&bull;</span>
            <span className="read-time">{article.readTime}</span>
          </div>
          
          <h1 className="article-title-main">{article.title}</h1>
          
          <p className="article-excerpt-main">{article.excerpt}</p>
          
          <div className="article-author-date">
            <span className="author">By {article.author}</span>
            <span className="date">{article.date}</span>
          </div>
        </header>
        
        <article 
          className="article-content" 
          dangerouslySetInnerHTML={{ __html: article.content.replace(/\n\n/g, '<br/><br/>').replace(/^\n/, '') }} 
        />
        <div style={{ marginTop: '4rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary)', marginBottom: '1rem' }}>Share this article</h4>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer' }}>Twitter</button>
            <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer' }}>Facebook</button>
            <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer' }}>LinkedIn</button>
          </div>
        </div>
        
        <section className="related-articles">
          <h3 className="related-title">Read Next</h3>
          <div className="related-grid">
            {articles.filter(a => a.slug !== article.slug).slice(0, 2).map((related) => (
              <Link href={`/editorial/${related.slug}`} key={related.slug} className="related-card">
                <span className="related-category">{related.category}</span>
                <h4 className="related-heading">{related.title}</h4>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
