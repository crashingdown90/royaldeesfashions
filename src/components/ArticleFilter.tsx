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
    <div style={{ width: '100%', margin: '0 auto' }}>
      {/* High-End Filter Controls */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        gap: '2rem', 
        marginBottom: '4rem', 
        paddingBottom: '2rem',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        flexWrap: 'wrap',
        alignItems: 'flex-end'
      }}>
        {/* Search Bar */}
        <div style={{ flex: '2 1 400px', position: 'relative' }}>
          <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.8rem', fontWeight: 'bold' }}>
            Discover Topics
          </label>
          <input 
            type="text" 
            placeholder="Search our editorial archive..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '1rem 0', 
              background: 'transparent', 
              border: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.3)', 
              color: '#fff', 
              fontSize: '1.2rem',
              fontFamily: 'var(--font-serif)',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderBottom = '1px solid var(--primary)'}
            onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(255,255,255,0.3)'}
          />
        </div>

        {/* Category Dropdown */}
        <div style={{ flex: '1 1 250px' }}>
          <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.8rem', fontWeight: 'bold' }}>
            Curated Categories
          </label>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '1rem 0', 
              background: 'transparent', 
              border: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.3)', 
              color: '#fff', 
              fontSize: '1.1rem',
              fontFamily: 'var(--font-inter)',
              cursor: 'pointer',
              outline: 'none',
              appearance: 'none',
            }}
          >
            {uniqueCategories.map(cat => (
              <option key={cat} value={cat} style={{ background: '#0a0a0a', color: '#fff', padding: '1rem' }}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Header */}
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', margin: 0 }}>
          {selectedCategory === "All" ? "Latest Editorials" : `${selectedCategory}`}
        </h2>
        <span style={{ color: 'var(--primary)', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
          [{filteredArticles.length} {filteredArticles.length === 1 ? 'Article' : 'Articles'}]
        </span>
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
        <div style={{ textAlign: 'center', padding: '6rem 0', color: '#aaa', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '12px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>Archive Empty</h3>
          <p style={{ fontSize: '1.1rem', maxWidth: '400px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
            We couldn't find any editorials matching your exquisite taste. Please adjust your search criteria.
          </p>
          <button 
            onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
            className="cta-button"
          >
            Reset Collection
          </button>
        </div>
      )}
    </div>
  );
}
