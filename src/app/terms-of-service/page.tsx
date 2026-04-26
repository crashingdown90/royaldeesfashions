import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Royal Dees Fashion',
  description: 'Terms of Service page for Royal Dees Fashion, a premium fashion and style magazine.',
};

export default function TermsofServicePage() {
  return (
    <main className="standard-page">
      <h1 className="standard-title">Terms of Service</h1>
      <div className="standard-content">
        <p>Welcome to the Terms of Service page of Royal Dees Fashion.</p>
        <p>This page is maintained to comply with standard web practices and advertising network requirements such as Google AdSense. We prioritize user transparency and high-quality editorial standards in all our fashion content.</p>
        <h2>Commitment to Quality</h2>
        <p>At Royal Dees Fashion, our mission is to deliver premium, original, and insightful fashion journalism. We explore the intersection of haute couture, streetwear, and sustainable luxury.</p>
        <p>If you have any questions or require further clarification regarding our policies, please feel free to reach out to our editorial team.</p>
      </div>
    </main>
  );
}
