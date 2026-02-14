import { useEffect } from "react";
import styles from "./ai-websites.module.css";
import { Navbar } from "../components/navbar/navbar";
import { ArrowRight, Smartphone, Zap, MousePointer, Layout, TrendingUp, Search, MessageSquare, Globe } from "lucide-react";

export default function AIWebsitesPage() {
  
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
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Your Website Should <span className={styles.gradientText}>Sell For You.</span>
            </h1>
            <p className={styles.heroSubtext}>
              AI-optimized high-converting websites designed to turn visitors into paying customers.
            </p>
            <div className={styles.heroButtons}>
              <a href="#book" className={styles.primaryBtn}>
                Book Website Strategy Call <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            {/* Interactive System Diagram */}
            <div className={styles.systemDiagram}>
              <div className={styles.diagramLayer}>
                <div className={`${styles.card} ${styles.cardUser}`}>
                  <MousePointer size={20} className={styles.cursorIcon} />
                  <span>Visitor</span>
                </div>
                <div className={styles.arrowDown} />
                <div className={`${styles.card} ${styles.cardSite}`}>
                  <Layout size={24} />
                  <span>AI Website</span>
                  <div className={styles.scanLine} />
                </div>
                <div className={styles.arrowDown} />
                <div className={`${styles.card} ${styles.cardConvert}`}>
                  <Zap size={24} />
                  <span>AI Optimization</span>
                </div>
                <div className={styles.arrowDown} />
                <div className={`${styles.card} ${styles.cardResult}`}>
                  <TrendingUp size={24} />
                  <span>Paying Customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className={styles.problems}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>
            Most Local Business Websites <span className={styles.textHighlight}>Don’t Convert.</span>
          </h2>
          <div className={styles.problemsGrid}>
            {[
              { title: "Slow Loading", desc: "Customers leave in 3 seconds." },
              { title: "No Structure", desc: "Confusing layout kills sales." },
              { title: "No WhatsApp", desc: "Hard to contact you." },
              { title: "Poor Mobile View", desc: "Broken on phones." }
            ].map((item, i) => (
              <div key={i} className={`${styles.problemCard} ${styles.reveal}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase Grid */}
      <section className={styles.showcase}>
        <div className={styles.container}>
          <div className={styles.showcaseGrid}>
            <div className={`${styles.showcaseCard} ${styles.reveal}`}>
              <div className={styles.cardIcon}><Layout /></div>
              <h3>Modern 3D UI</h3>
              <p>Premium aesthetics that build trust instantly.</p>
            </div>
            <div className={`${styles.showcaseCard} ${styles.reveal} ${styles.cardHighlight}`}>
              <div className={styles.cardIcon}><Smartphone /></div>
              <h3>Mobile First</h3>
              <p>Flawless experience on every device.</p>
            </div>
            <div className={`${styles.showcaseCard} ${styles.reveal}`}>
              <div className={styles.cardIcon}><MessageSquare /></div>
              <h3>WhatsApp Integration</h3>
              <p>One-tap chat for instant conversions.</p>
            </div>
            <div className={`${styles.showcaseCard} ${styles.reveal}`}>
              <div className={styles.cardIcon}><Search /></div>
              <h3>SEO Structure</h3>
              <p>Built to rank higher on Google.</p>
            </div>
            <div className={`${styles.showcaseCard} ${styles.reveal}`}>
              <div className={styles.cardIcon}><Zap /></div>
              <h3>Fast Loading</h3>
              <p>Optimized for speed and performance.</p>
            </div>
            <div className={`${styles.showcaseCard} ${styles.reveal}`}>
              <div className={styles.cardIcon}><Globe /></div>
              <h3>Lead Automation</h3>
              <p>Capture customer data automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection} id="book">
        <div className={`${styles.ctaContent} ${styles.reveal}`}>
          <h2>Ready To Build Your <br/><span className={styles.gradientText}>AI Growth Engine?</span></h2>
          <div className={styles.ctaButtons}>
            <a href="#call" className={styles.primaryBtnLarge}>
              Book Strategy Call
            </a>
            <a href="https://wa.me/1234567890" className={styles.secondaryBtnLarge}>
              Message Us On WhatsApp
            </a>
          </div>
          <div className={styles.links}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://flowxai.in" target="_blank" rel="noopener noreferrer">flowxai.in</a>
          </div>
        </div>
      </section>
    </div>
  );
}
