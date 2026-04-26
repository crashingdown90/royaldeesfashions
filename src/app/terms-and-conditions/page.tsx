import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <main className="standard-page">
      <Link href="/" className="back-link">&larr; Back to Home</Link>
      <h1 className="standard-title">Terms and Conditions</h1>
      <div className="standard-content legal-page">
        <p>Welcome to Royal Dees Fashion!</p>
        <p>These terms and conditions outline the rules and regulations for the use of Royal Dees Fashion's Website.</p>
        
        <h2>Cookies</h2>
        <p>We employ the use of cookies. By accessing Royal Dees Fashion, you agreed to use cookies in agreement with the Royal Dees Fashion's Privacy Policy.</p>
        
        <h2>License</h2>
        <p>Unless otherwise stated, Royal Dees Fashion and/or its licensors own the intellectual property rights for all material on Royal Dees Fashion. All intellectual property rights are reserved. You may access this from Royal Dees Fashion for your own personal use subjected to restrictions set in these terms and conditions.</p>
        
        <p>You must not:</p>
        <ul>
          <li>Republish material from Royal Dees Fashion</li>
          <li>Sell, rent or sub-license material from Royal Dees Fashion</li>
          <li>Reproduce, duplicate or copy material from Royal Dees Fashion</li>
          <li>Redistribute content from Royal Dees Fashion</li>
        </ul>
      </div>
    </main>
  );
}
