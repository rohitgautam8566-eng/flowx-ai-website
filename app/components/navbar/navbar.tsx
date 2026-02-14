import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, ArrowRight } from "lucide-react";
import styles from "./navbar.module.css";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link click
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.navContainer}>
        {/* Brand */}
        <a href="/" className={styles.brand}>
          <span className={styles.brandName}>FlowX AI</span>
        </a>

        {/* Desktop Menu */}
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <a href="#solutions" className={styles.navLink}>
              WhatsApp AI Agent
            </a>
          </li>

          <li className={styles.navItem}>
            <a href="#solutions" className={styles.navLink}>
              AI Websites
            </a>
          </li>

          <li className={styles.navItem}>
            <a href="#about" className={styles.navLink}>
              About
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className={styles.navRight}>
          <a
            href="https://wa.me/919006455592"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <span>Book Strategy Call</span>
            <ArrowRight size={16} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileMenuContent}>
          <a
            href="#solutions"
            className={styles.mobileMenuItem}
            onClick={closeMobileMenu}
          >
            WhatsApp AI Agent
          </a>
          <a
            href="#solutions"
            className={styles.mobileMenuItem}
            onClick={closeMobileMenu}
          >
            AI Websites
          </a>
          <a
            href="#about"
            className={styles.mobileMenuItem}
            onClick={closeMobileMenu}
          >
            About
          </a>
          <a
            href="#how-it-works"
            className={styles.mobileMenuItem}
            onClick={closeMobileMenu}
          >
            How It Works
          </a>

          <a
            href="https://wa.me/919006455592"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCtaButton}
          >
            <span>Book Strategy Call</span>
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
