import Link from "next/link";

export default function Disclaimer() {
  return (
    <main className="standard-page">
      <Link href="/" className="back-link">&larr; Back to Home</Link>
      <h1 className="standard-title">Disclaimer</h1>
      <div className="standard-content legal-page">
        <p>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us.</p>
        
        <h2>Disclaimers for Royal Dees Fashion</h2>
        <p>All the information on this website is published in good faith and for general information purpose only. Royal Dees Fashion does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Royal Dees Fashion), is strictly at your own risk. Royal Dees Fashion will not be liable for any losses and/or damages in connection with the use of our website.</p>
        
        <p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites.</p>
        
        <h2>Consent</h2>
        <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
        
        <h2>Update</h2>
        <p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
      </div>
    </main>
  );
}
