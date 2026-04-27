"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'rgba(10, 10, 10, 0.95)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 9999,
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <div style={{ flex: '1 1 300px' }}>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#ccc', lineHeight: '1.5' }}>
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies as described in our <Link href="/privacy-policy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Privacy Policy</Link>.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button 
          onClick={() => setShowBanner(false)}
          style={{ 
            background: 'transparent', 
            border: '1px solid #555', 
            color: '#fff', 
            padding: '0.5rem 1.5rem', 
            cursor: 'pointer', 
            fontFamily: 'var(--font-inter)',
            borderRadius: '4px'
          }}
        >
          Decline
        </button>
        <button 
          onClick={acceptCookies}
          style={{ 
            background: 'var(--primary)', 
            border: 'none', 
            color: '#000', 
            padding: '0.5rem 1.5rem', 
            cursor: 'pointer', 
            fontFamily: 'var(--font-inter)',
            fontWeight: '600',
            borderRadius: '4px'
          }}
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
