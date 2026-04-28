"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="navbar">
      <Link href="/" className="nav-brand">Royal Dees</Link>
      
      {/* Desktop Menu */}
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/editorial">Editorial</Link></li>
        <li><Link href="/category/style-guide">Style Guide</Link></li>
        <li><Link href="/category/sustainability">Sustainability</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "bar active" : "bar"}></span>
        <span className={isOpen ? "bar active" : "bar"}></span>
        <span className={isOpen ? "bar active" : "bar"}></span>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="mobile-menu-content">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/editorial" onClick={() => setIsOpen(false)}>Editorial</Link>
          <Link href="/category/style-guide" onClick={() => setIsOpen(false)}>Style Guide</Link>
          <Link href="/category/sustainability" onClick={() => setIsOpen(false)}>Sustainability</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
