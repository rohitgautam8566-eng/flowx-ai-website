import { useEffect } from "react";
import styles from "./home.module.css";
import { Navbar } from "../components/navbar/navbar";
import { ArrowRight, Bot, Zap, Globe, MessageSquare, CheckCircle, Smartphone } from "lucide-react";
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

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={`${styles.glowBlob} ${styles.glowBlobBlue}`} />
          <div className={`${styles.glowBlob} ${styles.glowBlobPurple}`} />
          <div className="bg-grid" />
        </div>
        
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span>✨ The Future of Growth</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Turn Every Customer Message Into <span className="text-gradient-blue">Revenue</span>.
            </h1>
            
            <p className={styles.heroSubtitle}>
              We build AI systems that capture, qualify and convert conversations automatically.
            </p>
            
            <div className={styles.heroButtons}>
              <a 
                href="https://calendly.com/flowxai/15-min-free-discovery-call" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.primaryBtn}
              >
                Book Strategy Call <ArrowRight size={18} />
              </a>
              <a 
                href="https://wa.me/919006455592?text=Hi%20I%20want%to%20see%20some%20Demo%20for%20ai%20chatbot%20/%20Website" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
              >
                Test Live Demo
              </a>
            </div>

            {/* Workflow Visual */}
            <div className={styles.workflowVisual}>
              <div className={styles.workflowNode}>
                <Smartphone size={24} color="#00C2FF" />
                <span>Customer</span>
              </div>
              <div className={styles.connector} />
              <div className={styles.workflowNode}>
                <MessageSquare size={24} color="#25D366" />
                <span>WhatsApp</span>
              </div>
              <div className={styles.connector} />
              <div className={`${styles.workflowNode} ${styles.active}`}>
                <Bot size={24} color="#7B5CFF" />
                <span>AI Agent</span>
              </div>
              <div className={styles.connector} />
              <div className={styles.workflowNode}>
                <CheckCircle size={24} color="#00C2FF" />
                <span>Confirmed</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WhatsApp AI Agent Section */}
      <section className={styles.whatsappSection}>
        <div className="bg-grid" />
        <div className={styles.container} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className={styles.whatsappGrid}>
            <div className={`glass-card ${styles.reveal} animate-fade-up`}>
              {/* Using an image placeholder or SVG for the visual representation */}
              <div style={{ padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '300px', background: 'rgba(0,0,0,0.2)' }}>
                {/* Simulated Chat Interface */}
                <div style={{ width: '100%', maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.1)', padding: '0.8rem', borderRadius: '12px 12px 12px 0', fontSize: '0.9rem' }}>
                    Hi, I'd like to book a table for tonight.
                  </div>
                  <div style={{ alignSelf: 'flex-end', background: 'var(--color-accent-primary)', color: '#fff', padding: '0.8rem', borderRadius: '12px 12px 0 12px', fontSize: '0.9rem', boxShadow: '0 4px 15px rgba(0, 194, 255, 0.3)' }}>
                    Absolutely! What time works best for you? 🤖
                  </div>
                  <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.1)', padding: '0.8rem', borderRadius: '12px 12px 12px 0', fontSize: '0.9rem' }}>
                    Around 7:30 PM.
                  </div>
                  <div style={{ alignSelf: 'flex-end', background: 'var(--color-accent-primary)', color: '#fff', padding: '0.8rem', borderRadius: '12px 12px 0 12px', fontSize: '0.9rem', boxShadow: '0 4px 15px rgba(0, 194, 255, 0.3)' }}>
                    Got it! Checking availability... ✅ Confirmed for 7:30 PM.
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`${styles.whatsappContent} ${styles.reveal} animate-fade-up delay-200`}>
              <h2>WhatsApp AI Agent</h2>
              <p>
                Stop losing customers to missed calls. Our AI agent lives on WhatsApp, 
                handling inquiries, bookings, and support 24/7 instantly.
              </p>
              
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <CheckCircle size={20} className={styles.featureIcon} />
                  <span>Instant Replies (Under 2 seconds)</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle size={20} className={styles.featureIcon} />
                  <span>Qualifies Leads Automatically</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle size={20} className={styles.featureIcon} />
                  <span>Syncs with your Calendar/CRM</span>
                </div>
              </div>

              <Link to="/whatsapp-ai-agent" className={styles.primaryBtn}>
                See How It Works <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container} style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Top Brands Choose <span className="text-gradient-blue">FlowX</span></h2>
            <p className={styles.sectionDesc}>
              We combine enterprise-grade AI with design-first thinking to build systems that scale.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={`${styles.featureCard} ${styles.reveal} animate-fade-up`}>
              <div className={styles.featureCardIcon}>
                <Zap size={28} />
              </div>
              <h3>Lightning Fast</h3>
              <p>Built on the fastest AI models available. No lag, just instant conversion for your customers.</p>
            </div>

            <div className={`${styles.featureCard} ${styles.reveal} animate-fade-up delay-100`}>
              <div className={styles.featureCardIcon}>
                <Globe size={28} />
              </div>
              <h3>AI Websites</h3>
              <p>Websites that don't just look good—they sell. SEO-optimized, mobile-first, and conversion-ready.</p>
            </div>

            <div className={`${styles.featureCard} ${styles.reveal} animate-fade-up delay-200`}>
              <div className={styles.featureCardIcon}>
                <Bot size={28} />
              </div>
              <h3>24/7 Automation</h3>
              <p>Your business never sleeps. Capture leads and support customers while you focus on operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.glowBlob} style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', opacity: 0.2 }} />
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Still Letting Your Competitors <br />
            <span className="text-gradient-accent">Automate What You Ignore?</span>
          </h2>
          <p className={styles.ctaSubtitle}>
            Every delayed reply is a lost customer. Fix it today.
          </p>
          
          <div className={styles.heroButtons}>
            <a 
              href="https://calendly.com/flowxai/15-min-free-discovery-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              Book Strategy Call
            </a>
            <a 
              href="https://wa.me/919006455592?text=Hi%20I%20am%20interested%20in%20your%20AI%20automation%20services" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container} style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <h3>FlowX <span style={{ color: 'var(--color-accent-primary)' }}>AI</span></h3>
              <p>Premium AI Growth Agency</p>
            </div>
            <div className={styles.footerLinks}>
              <Link to="/whatsapp-ai-agent">WhatsApp AI</Link>
              <Link to="/ai-websites">AI Websites</Link>
              <Link to="/about">About</Link>
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
