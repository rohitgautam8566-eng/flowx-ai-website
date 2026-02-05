import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import styles from "./navbar.module.css";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link click
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.navContainer}>
        {/* Logo & Brand */}
        <a href="/" className={styles.brand}>
          <div className={styles.logo}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="6" fill="url(#logo-gradient)" />
              <path
                d="M14 7L19 14L14 21L9 14L14 7Z"
                fill="white"
                fillOpacity="0.95"
              />
              <defs>
                <linearGradient
                  id="logo-gradient"
                  x1="0"
                  y1="0"
                  x2="28"
                  y2="28"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8b5cf6" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className={styles.brandName}>FlowX AI</span>
        </a>

        {/* Desktop Menu */}
        <ul className={styles.navMenu}>
          <li
            className={styles.navItem}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={styles.navLink}>
              <span>Services</span>
              <ChevronDown size={16} className={styles.chevron} />
            </button>

            {/* Services Dropdown */}
            {servicesOpen && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownContent}>
                  <a href="#whatsapp-features" className={styles.dropdownItem}>
                    <div className={styles.dropdownIcon}>
                      <MessageCircle size={20} />
                    </div>
                    <div className={styles.dropdownInfo}>
                      <div className={styles.dropdownTitle}>
                        WhatsApp AI Automation
                      </div>
                      <div className={styles.dropdownDesc}>
                        AI-powered customer communication & ordering
                      </div>
                    </div>
                  </a>

                  <a href="#website-features" className={styles.dropdownItem}>
                    <div className={styles.dropdownIcon}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="16"
                          height="14"
                          rx="2"
                          strokeWidth="1.5"
                        />
                        <path d="M2 7h16" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div className={styles.dropdownInfo}>
                      <div className={styles.dropdownTitle}>
                        Restaurant Website Development
                      </div>
                      <div className={styles.dropdownDesc}>
                        Premium websites with AI-generated content
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </li>

          <li className={styles.navItem}>
            <a href="#website-features" className={styles.navLink}>
              <span>Features</span>
            </a>
          </li>

          <li className={styles.navItem}>
            <a href="#whatsapp-pricing" className={styles.navLink}>
              <span>Pricing</span>
            </a>
          </li>

          <li className={styles.navItem}>
            <a href="#whatsapp-features" className={styles.navLink}>
              <span>How It Works</span>
            </a>
          </li>

          <li className={styles.navItem}>
            <a
              href="https://wa.me/919006455592"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              <span>Contact</span>
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a
          href="https://wa.me/919006455592"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          <span>Get Started on WhatsApp</span>
          <MessageCircle size={18} />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            <a
              href="#whatsapp-features"
              className={styles.mobileMenuItem}
              onClick={closeMobileMenu}
            >
              WhatsApp AI Automation
            </a>
            <a
              href="#website-features"
              className={styles.mobileMenuItem}
              onClick={closeMobileMenu}
            >
              Restaurant Website Development
            </a>
            <a
              href="#website-features"
              className={styles.mobileMenuItem}
              onClick={closeMobileMenu}
            >
              Features
            </a>
            <a
              href="#whatsapp-pricing"
              className={styles.mobileMenuItem}
              onClick={closeMobileMenu}
            >
              Pricing
            </a>
            <a
              href="#whatsapp-features"
              className={styles.mobileMenuItem}
              onClick={closeMobileMenu}
            >
              How It Works
            </a>
            <a
              href="https://wa.me/919006455592"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileMenuItem}
            >
              Contact
            </a>

            <a
              href="https://wa.me/919006455592"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileCtaButton}
            >
              <span>Get Started on WhatsApp</span>
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
