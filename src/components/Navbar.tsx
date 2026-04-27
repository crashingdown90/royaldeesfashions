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
        <li><Link href="/#collections">Collections</Link></li>
        <li><Link href="/editorial">Editorial</Link></li>
        <li><Link href="/about">House</Link></li>
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
          <Link href="/#collections" onClick={() => setIsOpen(false)}>Collections</Link>
          <Link href="/editorial" onClick={() => setIsOpen(false)}>Editorial</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>House</Link>
        </div>
      </div>
    </nav>
  );
}
