import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import styles from "./navbar.module.css";


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "WhatsApp AI Agent", path: "/whatsapp-ai-agent" },
    { name: "AI Websites", path: "/ai-websites" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            FlowX <span className={styles.logoHighlight}>AI</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ""}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="#contact" className={styles.ctaButton}>
            Book Strategy Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <div className={`${styles.mobileNav} ${isOpen ? styles.open : ""}`}>
          <div className={styles.mobileNavContent}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={styles.mobileNavLink}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="#contact" className={styles.mobileCtaButton} onClick={() => setIsOpen(false)}>
              Book Strategy Call <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
