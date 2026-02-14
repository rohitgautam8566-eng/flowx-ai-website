import { useEffect } from "react";
import styles from "./home.module.css";
import { Navbar } from "../components/navbar/navbar";
import { ArrowRight, Bot, MessageSquare, CheckCircle, Smartphone, Database, Bell, Zap, TrendingUp, Clock, Globe } from "lucide-react";
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
    
    // Sticky CTA observer
    const ctaObserver = new IntersectionObserver((entries) => {
      const mobileCta = document.getElementById('mobile-sticky-cta');
      if (mobileCta) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            mobileCta.classList.add(styles.showSticky);
          } else {
            mobileCta.classList.remove(styles.showSticky);
          }
        });
      }
    }, { threshold: 0.1 });

    const heroSection = document.getElementById('hero-section');
    if (heroSection) ctaObserver.observe(heroSection);

    return () => {
      observer.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />

      {/* Hero Section */}
      <section id="hero-section" className={styles.hero}>
        <div className={styles.heroBackground}>
           <div className={styles.blobContainer}>
             <div className={`${styles.blob} ${styles.blobCyan}`} />
             <div className={`${styles.blob} ${styles.blobBlue}`} />
           </div>
           <div className={styles.gridOverlay} />
        </div>
        
        <div className={styles.container}>
          <div className={styles.heroLayout}>
            {/* Left Content */}
            <div className={styles.heroContent}>
              <div className={`${styles.badge} animate-fade-up`}>
                <span>✨ AI Growth Systems for Restaurants & Local Businesses</span>
              </div>
              
              <h1 className={`${styles.heroTitle} animate-fade-up delay-100`}>
                Turn Conversations Into <br className={styles.desktopBr}/>
                <span className="text-gradient-cyan">Customers — Automatically.</span>
              </h1>
              
              <p className={`${styles.heroSubtitle} animate-fade-up delay-200`}>
                We build AI-powered WhatsApp agents and high-converting websites that capture leads, confirm bookings, and increase revenue — 24/7 without extra staff.
              </p>
              
              <div className={`${styles.heroButtons} animate-fade-up delay-300`}>
                <a 
                  href="https://calendly.com/flowxai/15-min-free-discovery-call" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.primaryBtn}
                >
                  Book Strategy Call <ArrowRight size={18} />
                </a>
                <Link 
                  to="/whatsapp-ai-agent"
                  className={styles.secondaryBtn}
                >
                  See How It Works
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className={`${styles.heroVisual} animate-fade-up delay-500`}>
               <div className={styles.visualGlassPanel}>
                  <div className={styles.workflowSystem}>
                    <div className={styles.workflowLine} />
                    
                    {/* Customer */}
                    <div className={styles.wfNode}>
                      <div className={styles.wfIcon}><Smartphone size={20} /></div>
                      <span className={styles.wfLabel}>Customer</span>
                    </div>

                    {/* WhatsApp (Desktop Only) */}
                    <div className={`${styles.wfNode} ${styles.desktopNode}`}>
                      <div className={styles.wfIcon}><MessageSquare size={20} /></div>
                      <span className={styles.wfLabel}>WhatsApp</span>
                    </div>

                    {/* AI Agent (Main) */}
                    <div className={`${styles.wfNode} ${styles.activeNode}`}>
                      <div className={styles.wfIcon}><Bot size={24} /></div>
                      <span className={styles.wfLabel}>AI Agent</span>
                      <div className={styles.pulseRing} />
                    </div>

                     {/* CRM (Desktop Only) */}
                    <div className={`${styles.wfNode} ${styles.desktopNode}`}>
                      <div className={styles.wfIcon}><Database size={20} /></div>
                      <span className={styles.wfLabel}>CRM</span>
                    </div>

                    {/* Order Confirmed */}
                    <div className={styles.wfNode}>
                      <div className={styles.wfIcon}><CheckCircle size={20} /></div>
                      <span className={styles.wfLabel}>Confirmed</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <div className={styles.problemLayout}>
            <div className={`${styles.problemContent} ${styles.reveal} animate-fade-up`}>
              <h2 className={styles.sectionTitle}>Still Losing Customers <span className="text-gradient-accent">Every Day?</span></h2>
              <div className={styles.problemList}>
                <div className={styles.problemItem}>
                  <div className={styles.problemDot} />
                  <p>Missed WhatsApp messages mean lost revenue.</p>
                </div>
                <div className={styles.problemItem}>
                  <div className={styles.problemDot} />
                  <p>Late replies send customers to competitors.</p>
                </div>
                <div className={styles.problemItem}>
                  <div className={styles.problemDot} />
                  <p>Staff overwhelmed by repetitive questions.</p>
                </div>
              </div>
            </div>
            
            <div className={`${styles.problemVisual} ${styles.reveal} animate-fade-up delay-200`}>
              <div className={styles.notificationStack}>
                <div className={`${styles.notification} ${styles.notif1}`}>
                  <div className={styles.notifIcon}><Bell size={16} /></div>
                  <div className={styles.notifText}>
                    <span className={styles.notifTitle}>Missed Call</span>
                    <span className={styles.notifTime}>2m ago • Potential Customer</span>
                  </div>
                </div>
                <div className={`${styles.notification} ${styles.notif2}`}>
                  <div className={styles.notifIcon}><MessageSquare size={16} /></div>
                  <div className={styles.notifText}>
                    <span className={styles.notifTitle}>New Inquiry</span>
                    <span className={styles.notifTime}>5m ago • "Do you have tables?"</span>
                  </div>
                </div>
                <div className={`${styles.notification} ${styles.notif3}`}>
                  <div className={styles.notifIcon}><CheckCircle size={16} /></div>
                  <div className={styles.notifText}>
                    <span className={styles.notifTitle}>Order Pending</span>
                    <span className={styles.notifTime}>10m ago • Waiting for confirm</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Two AI Systems */}
      <section className={styles.systemsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Built for Growth. <br className="mobile-only" />Designed for <span className="text-gradient-blue">Conversion.</span></h2>
          </div>
          
          <div className={styles.systemsGrid}>
            {/* Card 1 */}
            <div className={`${styles.systemCard} ${styles.reveal} animate-fade-up`}>
              <div className={styles.cardGlow} />
              <div className={styles.cardHeader}>
                <div className={styles.cardIconWrapper}>
                  <MessageSquare size={32} />
                </div>
                <h3>WhatsApp AI Agent</h3>
              </div>
              <p className={styles.cardDesc}>
                24/7 AI assistant that handles bookings, inquiries, follow-ups, and confirmations automatically.
              </p>
              <ul className={styles.cardBullets}>
                <li><CheckCircle size={16} /> Instant Replies</li>
                <li><CheckCircle size={16} /> Lead Qualification</li>
                <li><CheckCircle size={16} /> Order Confirmation</li>
                <li><CheckCircle size={16} /> FAQ Automation</li>
                <li><CheckCircle size={16} /> Human Handover</li>
              </ul>
              <Link to="/whatsapp-ai-agent" className={styles.cardLink}>
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 2 */}
            <div className={`${styles.systemCard} ${styles.reveal} animate-fade-up delay-200`}>
              <div className={styles.cardGlow} />
              <div className={styles.cardHeader}>
                <div className={styles.cardIconWrapper}>
                  <Globe size={32} />
                </div>
                <h3>AI Websites</h3>
              </div>
              <p className={styles.cardDesc}>
                High-converting AI-powered websites designed to turn visitors into paying customers.
              </p>
              <ul className={styles.cardBullets}>
                <li><CheckCircle size={16} /> Conversion-focused layout</li>
                <li><CheckCircle size={16} /> WhatsApp integration</li>
                <li><CheckCircle size={16} /> Automated lead capture</li>
                <li><CheckCircle size={16} /> Mobile-first design</li>
                <li><CheckCircle size={16} /> Performance optimized</li>
              </ul>
              <Link to="/ai-websites" className={styles.cardLink}>
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className={styles.howSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>From First Message to <br className="mobile-only" /><span className="text-gradient-accent">Confirmed Order.</span></h2>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            
            <div className={`${styles.timelineStep} ${styles.reveal} animate-fade-up`}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Customer Sends Message</h3>
                <p>Inquiry via WhatsApp or Website.</p>
              </div>
            </div>

            <div className={`${styles.timelineStep} ${styles.reveal} animate-fade-up delay-100`}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>AI Responds Instantly</h3>
                <p>Zero wait time, 24/7 availability.</p>
              </div>
            </div>

            <div className={`${styles.timelineStep} ${styles.reveal} animate-fade-up delay-200`}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Lead Gets Qualified</h3>
                <p>AI collects details & preferences.</p>
              </div>
            </div>

            <div className={`${styles.timelineStep} ${styles.reveal} animate-fade-up delay-300`}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3>Order Confirmed</h3>
                <p>Synced to CRM & Calendar instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why FlowX */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Built by Founders Who <br className="mobile-only" /><span className="text-gradient-blue">Understand Growth.</span></h2>
            <p className={styles.sectionDesc}>We don’t build tools. We build revenue systems.</p>
          </div>

          <div className={styles.whyGrid}>
            <div className={`${styles.whyCard} ${styles.reveal} animate-fade-up`}>
              <div className={styles.whyIcon}><Zap size={24} /></div>
              <h3>Automation Focused</h3>
              <p>Eliminate manual work and repetitive tasks completely.</p>
            </div>
            <div className={`${styles.whyCard} ${styles.reveal} animate-fade-up delay-100`}>
              <div className={styles.whyIcon}><TrendingUp size={24} /></div>
              <h3>Conversion Driven</h3>
              <p>Every interaction is optimized to capture value.</p>
            </div>
            <div className={`${styles.whyCard} ${styles.reveal} animate-fade-up delay-200`}>
              <div className={styles.whyIcon}><Clock size={24} /></div>
              <h3>24/7 Systems</h3>
              <p>Your business runs even when you're sleeping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className={styles.finalCta}>
        <div className={styles.glowBlob} style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', opacity: 0.15 }} />
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Stop Losing Customers to <br />
              <span className="text-gradient-accent">Faster Competitors.</span>
            </h2>
            <p className={styles.ctaSubtitle}>
              If you're not automating, you're falling behind.
            </p>
            <div className={styles.ctaButtons}>
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
                Chat With Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <h3>FlowX <span style={{ color: 'var(--color-accent-primary)' }}>AI</span></h3>
              <p>Premium AI Growth Agency</p>
            </div>
            <div className={styles.footerLinks}>
              <Link to="/whatsapp-ai-agent">WhatsApp AI</Link>
              <Link to="/ai-websites">AI Websites</Link>
              <Link to="/about">About</Link>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          <div className={styles.copyright}>
            © 2026 FlowX AI. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div id="mobile-sticky-cta" className={styles.mobileStickyCta}>
        <a 
          href="https://calendly.com/flowxai/15-min-free-discovery-call" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Book Strategy Call
        </a>
      </div>
    </div>
  );
}
