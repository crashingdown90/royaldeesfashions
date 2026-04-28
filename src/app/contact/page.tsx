import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Royal Dees Fashion editorial team for inquiries, tips, and collaborations.",
};

export default function ContactUs() {
  return (
    <main className="standard-page">
      <Link href="/" className="back-link">&larr; Back to Home</Link>
      <h1 className="standard-title">Contact Us</h1>
      <div className="standard-content legal-page">
        <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=1200" alt="Contact Royal Dees Fashion" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '2rem' }} />

        <p>If you have any questions, concerns, or business inquiries, our dedicated team is always ready to assist you. We also welcome press releases and editorial tips from industry professionals.</p>
        
        <div style={{ marginTop: '2rem', background: 'rgba(255,255,255,0.05)', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0 }}>Get in Touch</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
              <strong style={{ color: 'var(--primary)', width: '80px' }}>Email:</strong> 
              <span>contact@royaldeesfashions.com</span>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
              <strong style={{ color: 'var(--primary)', width: '80px' }}>Phone:</strong> 
              <span>+1 (555) 123-4567</span>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
              <strong style={{ color: 'var(--primary)', width: '80px' }}>Office:</strong> 
              <span>123 Fashion Avenue, Suite 400<br/>New York, NY 10001, USA</span>
            </li>
          </ul>
        </div>
        
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#888' }}>Please note that due to the high volume of correspondence we receive, it may take our editorial team up to 48 hours to process and respond to your inquiry.</p>
      </div>
    </main>
  );
}
