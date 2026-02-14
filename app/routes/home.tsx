import { useEffect } from "react";
import styles from "./home.module.css";
import { Navbar } from "../components/navbar/navbar";
import { ArrowRight, Bot, Layout } from "lucide-react";
import { Link } from "react-router";

export default function Home() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(`.${styles.reveal}`).forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.bgGlow} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span>✨ The Future of Growth</span>
            </div>
            <h1 className={styles.heroTitle}>
              FlowX <span className={styles.gradientText}>AI</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Revenue-focused AI systems for restaurants & local businesses.
            </p>
            <p className={styles.heroDesc}>
              We don't just build websites. We build automated growth engines.
            </p>
          </div>
        </div>
      </section>

      {/* Services Gateway */}
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {/* Service 1 */}
            <Link to="/whatsapp-ai-agent" className={`${styles.card} ${styles.reveal}`}>
              <div className={styles.cardGlowBlue} />
              <div className={styles.cardContent}>
                <div className={styles.iconBox}>
                  <Bot size={32} />
                </div>
                <h2>WhatsApp AI Agent</h2>
                <p>24/7 automated order taking, customer support, and lead capture.</p>
                <span className={styles.linkText}>Explore System <ArrowRight size={16} /></span>
              </div>
            </Link>

            {/* Service 2 */}
            <Link to="/ai-websites" className={`${styles.card} ${styles.reveal} ${styles.delay100}`}>
              <div className={styles.cardGlowPurple} />
              <div className={styles.cardContent}>
                <div className={styles.iconBox}>
                  <Layout size={32} />
                </div>
                <h2>AI Websites</h2>
                <p>High-converting, mobile-first websites optimized for sales.</p>
                <span className={styles.linkText}>Explore Websites <ArrowRight size={16} /></span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* About / Founders Snippet */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={`${styles.aboutContent} ${styles.reveal}`}>
            <h2>Built by Founders.</h2>
            <p>
              FlowX AI is led by Rohit Gautam and Roshan Dev. We are on a mission to modernize local business with enterprise-grade AI.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <h3>FlowX AI</h3>
              <p>Growth Agency</p>
            </div>
            <div className={styles.footerLinks}>
              <Link to="/whatsapp-ai-agent">WhatsApp AI</Link>
              <Link to="/ai-websites">AI Websites</Link>
              <a href="https://instagram.com">Instagram</a>
            </div>
          </div>
          <div className={styles.copyright}>
            © 2026 FlowX AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
