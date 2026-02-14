import type { Route } from "./+types/home";
import { MessageCircle, Play, ArrowRight, CheckCircle2, Globe, Bot } from "lucide-react";
import { Navbar } from "~/components/navbar/navbar";
import styles from "./home.module.css";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FlowX AI - Restaurant & Local Business AI Growth Agency" },
    { name: "description", content: "We help restaurants and local businesses automate WhatsApp, capture lost customers, and build AI-powered websites that convert." },
  ];
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'website'>('whatsapp');

  return (
    <div className={styles.page}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            AI Automation Agency
          </div>
          
          <h1 className={styles.heroTitle}>
            Your Competitors Are Using AI.<br />
            <span className={styles.heroTitleHighlight}>Are You Still Replying Manually?</span>
            <div className={styles.heroUnderline} />
          </h1>
          
          <p className={styles.heroSubtitle}>
            We help restaurants and local businesses automate WhatsApp, capture lost customers, and build AI-powered websites that convert.
          </p>
          
          <div className={styles.heroCtas}>
            <a 
              href="https://wa.me/919006455592" 
              className={styles.ctaPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Book Strategy Call</span>
              <div className={styles.ctaGlow} />
            </a>
            <a href="#how-it-works" className={styles.ctaSecondary}>
              <span>See How It Works</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className={styles.problem}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Still Losing Customers Every Day?</h2>
            <p className={styles.sectionSubtitle}>
              Every missed message is a lost opportunity. Every delayed reply is free marketing for your competitor.
            </p>
          </div>
          
          <div className={styles.problemGrid}>
            {[
              "Missed WhatsApp messages",
              "Slow replies = lost orders",
              "Staff overwhelmed during peak hours",
              "No automated order confirmation",
              "No follow-up on interested customers",
              "Competitors responding faster",
              "No proper online system"
            ].map((problem, i) => (
              <div key={i} className={styles.problemCard} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={styles.problemIcon}>✕</div>
                <div className={styles.problemText}>{problem}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Core Solutions */}
      <section id="solutions" className={styles.solutions}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Two AI Systems. One Growth Engine.</h2>
          </div>
          
          <div className={styles.solutionsGrid}>
            {/* WhatsApp AI Card */}
            <div className={styles.solutionCard}>
              <div className={styles.solutionGlow} />
              <div className={styles.solutionHeader}>
                <div className={styles.solutionIconBox}>
                  <Bot size={32} />
                </div>
                <h3 className={styles.solutionTitle}>WhatsApp AI Agent</h3>
              </div>
              
              <p className={styles.solutionDesc}>
                24/7 AI system that handles orders, inquiries, and customer communication automatically.
              </p>
              
              <ul className={styles.solutionList}>
                <li><CheckCircle2 size={16} /> Automatic order taking</li>
                <li><CheckCircle2 size={16} /> Instant confirmation</li>
                <li><CheckCircle2 size={16} /> FAQ automation</li>
                <li><CheckCircle2 size={16} /> Digital menu sharing</li>
                <li><CheckCircle2 size={16} /> Table reservations</li>
                <li><CheckCircle2 size={16} /> Human handover option</li>
                <li><CheckCircle2 size={16} /> Customer data capture</li>
                <li><CheckCircle2 size={16} /> Follow-up messaging</li>
              </ul>
              
              <a href="https://wa.me/919006455592" className={styles.solutionBtn}>
                Explore WhatsApp AI
              </a>
            </div>

            {/* AI Websites Card */}
            <div className={styles.solutionCard}>
              <div className={`${styles.solutionGlow} ${styles.solutionGlowCyan}`} />
              <div className={styles.solutionHeader}>
                <div className={`${styles.solutionIconBox} ${styles.solutionIconBoxCyan}`}>
                  <Globe size={32} />
                </div>
                <h3 className={styles.solutionTitle}>AI Websites</h3>
              </div>
              
              <p className={styles.solutionDesc}>
                High-converting AI-powered websites designed to capture, engage, and convert visitors into paying customers.
              </p>
              
              <ul className={styles.solutionList}>
                <li><CheckCircle2 size={16} /> Modern 3D or premium UI design</li>
                <li><CheckCircle2 size={16} /> AI-optimized copywriting</li>
                <li><CheckCircle2 size={16} /> Mobile-first responsive layout</li>
                <li><CheckCircle2 size={16} /> WhatsApp integration</li>
                <li><CheckCircle2 size={16} /> Conversion-focused structure</li>
                <li><CheckCircle2 size={16} /> Fast loading</li>
                <li><CheckCircle2 size={16} /> Lead capture automation</li>
              </ul>
              
              <a href="https://wa.me/919006455592" className={`${styles.solutionBtn} ${styles.solutionBtnCyan}`}>
                Explore AI Websites
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutCard}>
            <div className={styles.aboutContent}>
              <h2 className={styles.aboutTitle}>Built by Founders. Built for Growth.</h2>
              <div className={styles.aboutText}>
                <p>Hi, I’m <strong>Rohit Gautam</strong>, Co-Founder of FlowX AI.</p>
                <p>After working with restaurants and local businesses, I realized they weren’t losing customers because of bad service — they were losing them because of slow systems.</p>
                <p>Along with my business partner <strong>Roshan Dev</strong>, we built FlowX AI to solve this problem using automation and AI.</p>
                <p className={styles.highlightText}>We don’t build chatbots. We build systems that increase revenue.</p>
              </div>
            </div>
            <div className={styles.aboutVisual}>
              <div className={styles.founderCard}>
                <div className={styles.founderPlaceholder}>
                  <span>Founder Photo</span>
                </div>
                <div className={styles.founderInfo}>
                  <div className={styles.founderName}>Rohit Gautam</div>
                  <div className={styles.founderRole}>Co-Founder</div>
                </div>
              </div>
              <div className={`${styles.founderCard} ${styles.founderCardOffset}`}>
                <div className={styles.founderPlaceholder}>
                  <span>Founder Photo</span>
                </div>
                <div className={styles.founderInfo}>
                  <div className={styles.founderName}>Roshan Dev</div>
                  <div className={styles.founderRole}>Co-Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className={styles.process}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
          </div>
          
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>01</div>
              <h3 className={styles.stepTitle}>We Analyze Your Bottlenecks</h3>
              <p className={styles.stepDesc}>We identify where you are losing customers and money.</p>
            </div>
            <div className={styles.processConnector} />
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>02</div>
              <h3 className={styles.stepTitle}>We Build Your AI System</h3>
              <p className={styles.stepDesc}>Custom setup of WhatsApp AI and Website for your specific needs.</p>
            </div>
            <div className={styles.processConnector} />
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>03</div>
              <h3 className={styles.stepTitle}>You Scale Without Chaos</h3>
              <p className={styles.stepDesc}>Handle 10x more customers without hiring more staff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VSL Section */}
      <section className={styles.vsl}>
        <div className={styles.container}>
          <h2 className={styles.vslTitle}>How Your Competitors Are Stealing Customers With AI</h2>
          <div className={styles.videoWrapper}>
            <div className={styles.videoPlaceholder}>
              <div className={styles.playButton}>
                <Play fill="white" size={32} />
              </div>
              <span>Video Placeholder (Embed YouTube)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional CTA */}
      <section className={styles.finalCta}>
        <div className={styles.ctaBackground} />
        <div className={styles.container}>
          <h2 className={styles.finalTitle}>Not Upgrading Is Also a Decision.</h2>
          <p className={styles.finalSubtitle}>
            If you're tired of missing orders, losing customers, and depending fully on manual replies — Let’s fix it.
          </p>
          
          <div className={styles.finalActions}>
            <a 
              href="https://wa.me/919006455592" 
              className={styles.finalBtnPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Book Your Strategy Call</span>
              <div className={styles.btnPulse} />
            </a>
            <a href="#how-it-works" className={styles.finalBtnSecondary}>
              Test The Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <div className={styles.logo}>FlowX AI</div>
              <p>Restaurant + Local Business AI Growth Agency</p>
            </div>
            <div className={styles.footerLinks}>
              <a href="#solutions">WhatsApp AI Agent</a>
              <a href="#solutions">AI Websites</a>
              <a href="#about">About</a>
              <a href="https://wa.me/919006455592">Contact</a>
            </div>
          </div>
          <div className={styles.copyright}>
            &copy; 2025 FlowX AI. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className={styles.mobileStickyCta}>
        <a href="https://wa.me/919006455592" target="_blank" rel="noopener noreferrer">
          Book Strategy Call
        </a>
      </div>
    </div>
  );
}
