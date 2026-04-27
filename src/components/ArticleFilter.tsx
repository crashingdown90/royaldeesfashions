"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Article } from "@/data/articles";

export default function ArticleFilter({ initialArticles }: { initialArticles: Article[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const uniqueCategories = ["All", ...Array.from(new Set(initialArticles.map(a => a.category)))];

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, initialArticles]);

  return (
    <div>
      {/* Filter Controls */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        gap: '1rem', 
        marginBottom: '3rem', 
        background: 'rgba(255,255,255,0.03)', 
        padding: '1.5rem', 
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)',
        flexWrap: 'wrap'
      }}>
        {/* Search Bar */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.85rem', color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px' }}>Search Editorials</label>
          <input 
            type="text" 
            placeholder="Type keywords..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '0.8rem 1rem', 
              background: 'transparent', 
              border: '1px solid rgba(255,255,255,0.2)', 
              color: '#fff', 
              borderRadius: '6px',
              fontFamily: 'var(--font-inter)'
            }}
          />
        </div>

        {/* Category Dropdown */}
        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.85rem', color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px' }}>Filter by Category</label>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '0.8rem 1rem', 
              background: '#111', 
              border: '1px solid rgba(255,255,255,0.2)', 
              color: '#fff', 
              borderRadius: '6px',
              fontFamily: 'var(--font-inter)',
              cursor: 'pointer'
            }}
          >
            {uniqueCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Header */}
      <div style={{ marginBottom: '2rem', color: '#888', fontSize: '0.9rem' }}>
        Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'result' : 'results'}
      </div>

      {/* Filtered Grid */}
      {filteredArticles.length > 0 ? (
        <div className="editorial-grid">
          {filteredArticles.map((article) => (
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
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: '#aaa' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>No articles found</h3>
          <p>We couldn't find any editorials matching your search criteria. Please try different keywords or categories.</p>
          <button 
            onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
            className="cta-button"
            style={{ marginTop: '2rem' }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
