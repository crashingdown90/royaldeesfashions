import Link from "next/link";

export default function ContactUs() {
  return (
    <main className="standard-page">
      <Link href="/" className="back-link">&larr; Back to Home</Link>
      <h1 className="standard-title">Contact Us</h1>
      <div className="standard-content legal-page">
        <p>If you have any questions, concerns, or inquiries, please feel free to reach out to us using the information below.</p>
        
        <div style={{ marginTop: '2rem', background: 'rgba(255,255,255,0.05)', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2>Get in Touch</h2>
          <ul>
            <li style={{ marginBottom: '1rem' }}><strong>Email:</strong> contact@royaldeesfashion.com</li>
            <li style={{ marginBottom: '1rem' }}><strong>Phone:</strong> +1 (555) 123-4567</li>
            <li style={{ marginBottom: '1rem' }}><strong>Address:</strong> 123 Fashion Avenue, Suite 400, New York, NY 10001, USA</li>
          </ul>
        </div>
        
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#888' }}>Please note that it may take up to 48 hours for our team to respond to your inquiry.</p>
      </div>
    </main>
  );
}
