import Link from "next/link";

export default function AboutUs() {
  return (
    <main className="standard-page">
      <Link href="/" className="back-link">&larr; Back to Home</Link>
      <h1 className="standard-title">About Us</h1>
      <div className="standard-content legal-page">
        <p>Welcome to <strong>Royal Dees Fashion</strong>, your number one source for all things luxury fashion, streetwear trends, and editorial insights. We're dedicated to providing you the very best of fashion journalism, with an emphasis on high-quality content, trend analysis, and cultural impact.</p>
        
        <p>Founded by fashion enthusiasts, Royal Dees Fashion has come a long way from its beginnings. When we first started out, our passion for high-end aesthetics and accessible editorial content drove us to start our own publication.</p>
        
        <p>We hope you enjoy our articles as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
        
        <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>Sincerely,<br/>The Royal Dees Fashion Editorial Team</p>
      </div>
    </main>
  );
}
