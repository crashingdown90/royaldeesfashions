import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Editorial Team",
  description: "Get to know the passionate journalists, trend analysts, and fashion experts behind Royal Dees Fashion.",
};

const teamMembers = [
  {
    name: "Elena Rossi",
    role: "Editor-in-Chief",
    bio: "Elena brings over 15 years of experience from the front rows of Paris and Milan. Known for her incisive trend analysis and deep understanding of haute couture's intersection with modern streetwear, Elena shapes the bold vision of Royal Dees Fashion.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Jameson Clarke",
    role: "Sustainability Director",
    bio: "A pioneer in ethical fashion reporting, Jameson is dedicated to uncovering the brands and innovations driving the green revolution. His rigorous investigative journalism holds the luxury industry accountable for its environmental impact.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Isabella Vance",
    role: "Senior Style Editor",
    bio: "Isabella's discerning eye for the delicate balance between minimalism and maximalism has made her a highly sought-after stylist. She curates the seasonal palettes and capsule wardrobe guides that define our editorial voice.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Marcus Thorne",
    role: "Accessories & Lifestyle Analyst",
    bio: "Marcus dissects the multi-billion dollar accessories market with surgical precision. From high-end horology to the evolution of the 'It Bag', his market projections are essential reading for the modern luxury investor.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  }
];

export default function OurTeamPage() {
  return (
    <main className="standard-page">
      <Link href="/" className="back-link">&larr; Back to Home</Link>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="standard-title">Meet The Editors</h1>
        <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Our publication is driven by a collective of industry veterans, cultural critics, and passionate fashion historians dedicated to delivering uncompromising quality and unparalleled E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness).
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
        {teamMembers.map((member, index) => (
          <div key={index} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '2rem', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
            <img 
              src={member.image} 
              alt={member.name}
              style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.5rem auto', border: '3px solid var(--primary)' }}
            />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{member.name}</h3>
            <p style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{member.role}</p>
            <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.95rem' }}>
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
