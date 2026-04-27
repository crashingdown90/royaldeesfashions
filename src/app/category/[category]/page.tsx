import Link from "next/link";
import { articles } from "@/data/articles";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Convert category string to URL friendly slug
function slugify(text: string) {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const decodedCategory = category.replace(/-/g, ' ');
  // Capitalize first letters
  const title = decodedCategory.replace(/\b\w/g, l => l.toUpperCase());

  return {
    title: `${title} Editorials`,
    description: `Browse all articles and editorial pieces related to ${title} at Royal Dees Fashion.`,
  };
}

export function generateStaticParams() {
  const uniqueCategories = Array.from(new Set(articles.map(a => a.category)));
  return uniqueCategories.map((cat) => ({
    category: slugify(cat),
  }));
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryArticles = articles.filter(a => slugify(a.category) === category);

  if (categoryArticles.length === 0) {
    notFound();
  }

  const displayCategory = categoryArticles[0].category;

  return (
    <main className="magazine-page">
      <Link href="/editorial" className="back-link">&larr; Back to All Editorials</Link>
      <h1 className="standard-title">{displayCategory}</h1>
      <p style={{ textAlign: 'center', color: '#888', marginBottom: '3rem' }}>
        Explore our curated collection of {categoryArticles.length} articles on {displayCategory.toLowerCase()}.
      </p>
      
      <div className="editorial-grid">
        {categoryArticles.map((article) => (
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
