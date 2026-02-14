import { useEffect, useRef } from "react";
import styles from "./home.module.css";
import { Navbar } from "../components/navbar/navbar";
import { ArrowRight, Bot, MessageSquare, CheckCircle, Smartphone, Zap, TrendingUp, Users, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  
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

    if (heroRef.current) ctaObserver.observe(heroRef.current);

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const visual = document.getElementById('hero-visual');
      if (visual) {
        visual.style.transform = `translateY(${scrolled * 0.1}px) rotateX(${scrolled * 0.02}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      ctaObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} id="hero-section" className={styles.hero}>
        <div className={styles.heroBackground}>
           <div className={styles.blobContainer}>
             <div className={`${styles.blob} ${styles.blobBlue}`} />
             <div className={`${styles.blob} ${styles.blobPurple}`} />
           </div>
           <div className={styles.gridOverlay} />
           <div className={styles.particles} />
        </div>
        
        <div className={styles.container}>
          <div className={styles.heroLayout}>
            {/* Left Content */}
            <div className={styles.heroContent}>
              <h1 className={`${styles.heroTitle} animate-fade-up`}>
                Don’t Just Automate. <br />
                <span className="text-gradient-blue">Build a Revenue Engine.</span>
              </h1>
              
              <p className={`${styles.heroSubtitle} animate-fade-up delay-100`}>
                FlowX AI builds intelligent WhatsApp agents and high-converting AI websites that turn conversations into confirmed customers — 24/7.
              </p>

              <p className={`${styles.heroEmotional} animate-fade-up delay-200`}>
                While others are replying manually… your system should already be closing deals.
              </p>
              
              <div className={`${styles.heroButtons} animate-fade-up delay-300`}>
                <a 
                  href="https://calendly.com/flowxai/15-min-free-discovery-call" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.primaryBtn}
                >
                  Book Growth Strategy Call <ArrowRight size={18} />
                </a>
                <Link 
                  to="/whatsapp-ai-agent"
                  className={styles.secondaryBtn}
                >
                  Explore Our Systems
                </Link>
              </div>
            </div>

            {/* Right Visual - High Detail Split */}
            <div id="hero-visual" className={`${styles.heroVisual} animate-fade-up delay-500`}>
               <div className={styles.visualContainer}>
                  {/* Connection Line */}
                  <div className={styles.connectionLine} />

                  {/* Left: Chat Sim */}
                  <div className={styles.chatCard}>
                    <div className={styles.chatHeader}>
                      <div className={styles.chatAvatar}>
                        <Bot size={16} />
                      </div>
                      <div className={styles.chatInfo}>
                        <div className={styles.chatName}>FlowX Agent</div>
                        <div className={styles.chatStatus}>Online</div>
                      </div>
                    </div>
                    <div className={styles.chatBody}>
                      <div className={`${styles.msg} ${styles.msgIn}`}>
                        <div className={styles.typingDots}>
                          <span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className={`${styles.msg} ${styles.msgOut}`}>
                        Is a table available for 7pm?
                      </div>
                      <div className={`${styles.msg} ${styles.msgIn} ${styles.msgConfirm}`}>
                        Yes! I have confirmed your table for 7pm. <CheckCircle size={12} className={styles.checkIcon} />
                      </div>
                    </div>
                  </div>

                  {/* Right: Web Sim */}
                  <div className={styles.webCard}>
                    <div className={styles.browserHeader}>
                      <div className={styles.browserDots}>
                        <span /><span /><span />
                      </div>
                    </div>
                    <div className={styles.webContent}>
                      <div className={styles.webHero} />
                      <div className={styles.webGrid}>
                        <div className={styles.webItem} />
                        <div className={styles.webItem} />
                        <div className={styles.webItem} />
                      </div>
                      <div className={styles.webBtn} />
                    </div>
                    <div className={styles.scanLine} />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className={styles.painSection}>
        <div className={styles.container}>
          <div className={`${styles.painHeader} ${styles.reveal} animate-fade-up`}>
            <h2 className={styles.sectionTitle}>How Much Revenue Are You Losing <span className="text-gradient-blue">Every Week?</span></h2>
            <p className={styles.sectionDesc}>
              Missed messages. Slow replies. Manual follow-ups. Overworked staff. <br className={styles.desktopBr} />
              <span className={styles.highlight}>Your competitors are already automating.</span>
            </p>
          </div>

          <div className={styles.notificationRow}>
            <div className={`${styles.notifCard} ${styles.reveal} animate-fade-up`}>
               <div className={styles.notifIcon}><MessageSquare size={18} /></div>
               <div className={styles.notifContent}>
                 <div className={styles.notifTitle}>New Inquiry</div>
                 <div className={styles.notifMeta}>Received 2m ago</div>
               </div>
            </div>
            <div className={`${styles.notifCard} ${styles.reveal} animate-fade-up delay-100`}>
               <div className={styles.notifIcon}><Smartphone size={18} /></div>
               <div className={styles.notifContent}>
                 <div className={styles.notifTitle}>Missed Call</div>
                 <div className={styles.notifMeta}>Failed to connect</div>
               </div>
            </div>
            <div className={`${styles.notifCard} ${styles.reveal} animate-fade-up delay-200`}>
               <div className={styles.notifIcon}><Users size={18} /></div>
               <div className={styles.notifContent}>
                 <div className={styles.notifTitle}>Customer Left Chat</div>
                 <div className={styles.notifMeta}>No response in 5m</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Two Systems. <br className="mobile-only" /><span className="text-gradient-blue">One Growth Strategy.</span></h2>
            <p className={styles.sectionDesc}>We design automation systems that work silently in the background — generating leads, confirming bookings, and increasing revenue.</p>
          </div>
          
          <div className={styles.servicesGrid}>
            {/* Card 1 */}
            <div className={`${styles.serviceCard} ${styles.reveal} animate-fade-up`}>
              <div className={styles.cardHeader}>
                <h3>WhatsApp AI Growth Agent</h3>
                <div className={styles.cardIcon}><Bot size={24} /></div>
              </div>
              <p className={styles.cardCopy}>
                An intelligent assistant that replies instantly, qualifies leads, confirms bookings, and follows up automatically.
              </p>
              <div className={styles.miniWorkflow}>
                 <div className={styles.mwNode}><MessageSquare size={14} /></div>
                 <div className={styles.mwLine} />
                 <div className={styles.mwNode}><Bot size={14} /></div>
                 <div className={styles.mwLine} />
                 <div className={styles.mwNode}><CheckCircle size={14} /></div>
              </div>
              <ul className={styles.cardBullets}>
                <li><CheckCircle size={16} /> Instant smart replies</li>
                <li><CheckCircle size={16} /> Automated booking confirmations</li>
                <li><CheckCircle size={16} /> FAQ & menu handling</li>
                <li><CheckCircle size={16} /> 24/7 availability</li>
              </ul>
              <Link to="/whatsapp-ai-agent" className={styles.cardLink}>
                Explore Agent <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 2 */}
            <div className={`${styles.serviceCard} ${styles.reveal} animate-fade-up delay-200`}>
              <div className={styles.cardHeader}>
                <h3>AI-Powered Conversion Websites</h3>
                <div className={styles.cardIcon}><Globe size={24} /></div>
              </div>
              <p className={styles.cardCopy}>
                High-performing websites engineered to capture attention, build trust, and convert visitors into paying customers.
              </p>
              <div className={styles.miniBrowser}>
                <div className={styles.mbBar} />
                <div className={styles.mbContent} />
              </div>
              <ul className={styles.cardBullets}>
                <li><CheckCircle size={16} /> Conversion-optimized design</li>
                <li><CheckCircle size={16} /> WhatsApp integration</li>
                <li><CheckCircle size={16} /> Smart lead capture</li>
                <li><CheckCircle size={16} /> AI-enhanced copywriting</li>
              </ul>
              <Link to="/ai-websites" className={styles.cardLink}>
                Explore Websites <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howSection}>
        <div className={styles.container}>
          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            
            <div className={`${styles.timelineStep} ${styles.reveal} animate-fade-up`}>
              <div className={styles.stepCircle}>
                <Users size={20} />
              </div>
              <h3>Visitor / Customer</h3>
            </div>

            <div className={`${styles.timelineStep} ${styles.reveal} animate-fade-up delay-100`}>
              <div className={styles.stepCircle}>
                <Bot size={20} />
              </div>
              <h3>AI System</h3>
            </div>

            <div className={`${styles.timelineStep} ${styles.reveal} animate-fade-up delay-200`}>
              <div className={styles.stepCircle}>
                <Zap size={20} />
              </div>
              <h3>Automation</h3>
            </div>

            <div className={`${styles.timelineStep} ${styles.reveal} animate-fade-up delay-300`}>
              <div className={`${styles.stepCircle} ${styles.stepCircleEnd}`}>
                <TrendingUp size={20} />
              </div>
              <h3>Confirmed Revenue</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className={styles.authoritySection}>
        <div className={styles.container}>
          <div className={styles.authorityContent}>
            <h2 className={`${styles.sectionTitle} ${styles.reveal} animate-fade-up`}>
              We Don’t Build Chatbots. <br />
              <span className="text-gradient-blue">We Build Predictable Revenue Systems.</span>
            </h2>
            <p className={`${styles.authorityDesc} ${styles.reveal} animate-fade-up delay-100`}>
              Founded by Rohit Gautam & Roshan Dev, FlowX AI combines automation strategy and high-converting web architecture to help local businesses scale smarter.
            </p>
            
            <div className={styles.foundersGrid}>
              <div className={`${styles.founderCard} ${styles.reveal} animate-fade-up delay-200`}>
                <img src="/founders/rohit.webp" alt="Rohit Gautam" className={styles.founderImg} />
                <div className={styles.founderOverlay}>
                  <span>Rohit Gautam</span>
                  <small>Co-Founder</small>
                </div>
              </div>
              <div className={`${styles.founderCard} ${styles.reveal} animate-fade-up delay-300`}>
                <img src="/founders/roshan.png" alt="Roshan Dev" className={styles.founderImg} />
                <div className={styles.founderOverlay}>
                  <span>Roshan Dev</span>
                  <small>Co-Founder</small>
                </div>
              </div>
            </div>

            <Link to="/about" className={`${styles.outlineBtn} ${styles.reveal} animate-fade-up delay-400`}>
              Meet the Founders <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={styles.glowSpot} />
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Every Day You Delay Automation, <br />
              <span className="text-gradient-blue">You Lose Customers.</span>
            </h2>
            <p className={styles.ctaSubtitle}>
              You can keep replying manually. Or you can build a system that closes automatically.
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
                Chat on WhatsApp
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
              <h3>FlowX <span style={{ color: '#3da9fc' }}>AI</span></h3>
              <p>Luxury AI Growth Agency</p>
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
