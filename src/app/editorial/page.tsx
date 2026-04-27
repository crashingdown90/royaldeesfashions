import Link from "next/link";
import { articles } from "@/data/articles";
import { Metadata } from "next";
import ArticleFilter from "@/components/ArticleFilter";

export const metadata: Metadata = {
  title: "All Editorials",
  description: "Browse the complete archive of Royal Dees Fashion editorial pieces, trend analyses, and style guides.",
};

export default function EditorialPage() {
  return (
    <main className="standard-page">
      <Link href="/" className="back-link">&larr; Back to Home</Link>
      <h1 className="standard-title">All Editorials</h1>
      <p style={{ textAlign: 'center', color: '#888', marginBottom: '2rem' }}>Explore our complete archive of {articles.length} fashion articles and industry insights.</p>
      
      <ArticleFilter initialArticles={articles} />
      
    </main>
  );
}
