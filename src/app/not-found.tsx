import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Trend Not Found | Royal Dees Fashion",
  description: "The page you are looking for has moved or no longer exists.",
};

export default function NotFound() {
  return (
    <main className="standard-page" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ position: 'relative', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '10rem', fontFamily: 'var(--font-serif)', color: 'rgba(255, 255, 255, 0.05)', margin: 0, lineHeight: 1 }}>404</h1>
        <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--primary)', margin: 0 }}>
          Trend Not Found
        </h2>
      </div>
      
      <p style={{ color: '#aaa', fontSize: '1.2rem', maxWidth: '500px', marginBottom: '3rem', lineHeight: '1.6' }}>
        It seems the collection you're looking for is out of season. 
        The page may have been moved, deleted, or perhaps it was too exclusive to remain public.
      </p>

      <Link 
        href="/" 
        className="cta-button"
      >
        Return to Runway
      </Link>
    </main>
  );
}
