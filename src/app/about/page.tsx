import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our House",
  description: "Learn about the history, vision, and editorial team behind Royal Dees Fashion.",
};

export default function AboutUs() {
  return (
    <main className="standard-page">
      <Link href="/" className="back-link">&larr; Back to Home</Link>
      <h1 className="standard-title">About Our House</h1>
      <div className="standard-content legal-page">
        <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200" alt="Royal Dees Fashion Studio" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '2rem' }} />
        
        <h2>Our Vision & Heritage</h2>
        <p>Welcome to <strong>Royal Dees Fashion</strong>, your definitive destination for luxury fashion, avant-garde streetwear trends, and uncompromising editorial journalism. We are fiercely dedicated to providing you with the very best of fashion critique, with a steadfast emphasis on high-quality narrative content, deep market trend analysis, and the cultural impact of modern apparel.</p>
        
        <p>Founded in 2020 by a collective of former Paris and Milan fashion house creatives, Royal Dees Fashion has rapidly evolved from an underground editorial newsletter into a globally recognized publication. When we first started out, our driving passion for democratizing high-end aesthetics and providing accessible, yet deeply intellectual editorial content drove us to establish our own independent voice.</p>
        
        <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200" alt="Fashion Editorial Team" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', margin: '2rem 0' }} />

        <h2>Our Commitment to E-E-A-T</h2>
        <p>As a publication, we strictly adhere to the highest standards of Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). Every article published on our platform undergoes rigorous fact-checking and is written by industry veterans who have spent decades analyzing textiles, runway shows, and retail economics.</p>
        
        <p>We hope you find our editorial pieces as enlightening and inspiring as we find joy in curating them for you. The world of fashion is an ever-shifting landscape, and we are honored to be your trusted guide through it.</p>
        
        <p style={{ marginTop: '3rem', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--primary)' }}>Sincerely,<br/>The Royal Dees Fashion Editorial Board</p>
      </div>
    </main>
  );
}
