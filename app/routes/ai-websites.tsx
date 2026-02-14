import { useEffect } from "react";
import styles from "./ai-websites.module.css";
import { Navbar } from "../components/navbar/navbar";
import { ArrowRight, Zap, Layout, Search, MessageSquare, Globe, CheckCircle, Smartphone } from "lucide-react";

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
        <div className={styles.heroGlow2} />
        
        {/* Floating Shapes */}
        <div className={`${styles.floatingShape} ${styles.shape1}`} />
        <div className={`${styles.floatingShape} ${styles.shape2}`} />
        <div className={`${styles.floatingShape} ${styles.shape3}`} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Your Website Should <br/> <span className={styles.gradientText}>Sell For You.</span>
            </h1>
            <p className={styles.heroSubtext}>
              AI-optimized high-converting websites designed to turn visitors into paying customers. 
              Built for speed, mobile, and sales.
            </p>
            <div className={styles.heroButtons}>
              <a href="https://calendly.com/flowxai/15-min-free-discovery-call" target="_blank" className={styles.primaryBtn}>
                Book Website Strategy Call <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.wireframeContainer}>
              <div className={styles.browserHeader}>
                <div className={`${styles.dot} ${styles.dotRed}`} />
                <div className={`${styles.dot} ${styles.dotYellow}`} />
                <div className={`${styles.dot} ${styles.dotGreen}`} />
              </div>
              <div className={styles.browserContent}>
                <div className={styles.wireframeHero}>
                  <div className={styles.wfText}>
                    <div className={`${styles.wfLine} ${styles.title}`} />
                    <div className={styles.wfLine} />
                    <div className={`${styles.wfLine} ${styles.short}`} />
                  </div>
                  <div className={styles.wfImage} />
                </div>
                <div className={styles.wfGrid}>
                  <div className={styles.wfCard} />
                  <div className={styles.wfCard} />
                  <div className={styles.wfCard} />
                </div>
                <div className={styles.wfGrid}>
                  <div className={styles.wfCard} />
                  <div className={styles.wfCard} />
                  <div className={styles.wfCard} />
                </div>
              </div>
              <div className={styles.scrollOverlay} />
            </div>

            {/* Floating Elements */}
            <div className={`${styles.floatingUiElement} ${styles.ui1}`}>
              <CheckCircle size={16} color="#4ade80" />
              <span>Conversion Optimized</span>
            </div>
            <div className={`${styles.floatingUiElement} ${styles.ui2}`}>
              <Zap size={16} color="#60a5fa" />
              <span>Load Time: 0.8s</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className={styles.problems}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>
            Most Local Business Websites <br/><span className={styles.textHighlight}>Don’t Convert.</span>
          </h2>
          <div className={styles.problemsGrid}>
            {[
              { title: "Slow Loading", desc: "Customers leave if it takes > 3 seconds." },
              { title: "No Structure", desc: "Confusing layout kills sales instantly." },
              { title: "No Automation", desc: "You miss leads while you sleep." },
              { title: "Poor Mobile View", desc: "80% of traffic is mobile. Is yours ready?" }
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
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`} style={{ marginBottom: '4rem' }}>
            Built for <span className={styles.gradientText}>Growth</span>
          </h2>
          <div className={styles.showcaseGrid}>
            <div className={`${styles.showcaseCard} ${styles.reveal}`}>
              <div className={styles.cardIcon}><Layout size={28} /></div>
              <h3>Modern 3D UI</h3>
              <p>Premium aesthetics that build trust instantly and position you as a market leader.</p>
            </div>
            <div className={`${styles.showcaseCard} ${styles.reveal} ${styles.cardHighlight}`}>
              <div className={styles.cardIcon}><Smartphone size={28} /></div>
              <h3>Mobile First</h3>
              <p>Flawless experience on every device. We design for the small screen first.</p>
            </div>
            <div className={`${styles.showcaseCard} ${styles.reveal}`}>
              <div className={styles.cardIcon}><MessageSquare size={28} /></div>
              <h3>WhatsApp Integration</h3>
              <p>One-tap chat for instant conversions. Connect directly with your visitors.</p>
            </div>
            <div className={`${styles.showcaseCard} ${styles.reveal}`}>
              <div className={styles.cardIcon}><Search size={28} /></div>
              <h3>SEO Structure</h3>
              <p>Built to rank higher on Google with semantic HTML and fast performance.</p>
            </div>
            <div className={`${styles.showcaseCard} ${styles.reveal}`}>
              <div className={styles.cardIcon}><Zap size={28} /></div>
              <h3>Lightning Fast</h3>
              <p>Optimized for speed and performance. 99+ Lighthouse score guaranteed.</p>
            </div>
            <div className={`${styles.showcaseCard} ${styles.reveal}`}>
              <div className={styles.cardIcon}><Globe size={28} /></div>
              <h3>Lead Automation</h3>
              <p>Capture customer data automatically and sync it with your CRM.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection} id="book">
        <div className={`${styles.ctaContent} ${styles.reveal}`}>
          <h2>Ready To Build Your <br/><span className={styles.gradientText}>AI Growth Engine?</span></h2>
          <div className={styles.ctaButtons}>
            <a href="https://calendly.com/flowxai/15-min-free-discovery-call" target="_blank" className={styles.primaryBtnLarge}>
              Book Strategy Call
            </a>
            <a href="https://wa.me/919006455592?text=Hi%20I%20am%20interested%20in%20your%20AI%20automation%20services" target="_blank" className={styles.secondaryBtnLarge}>
              Message Us On WhatsApp
            </a>
          </div>
          <div className={styles.links}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="/" target="_blank" rel="noopener noreferrer">flowxai.in</a>
          </div>
        </div>
      </section>
    </div>
  );
}
