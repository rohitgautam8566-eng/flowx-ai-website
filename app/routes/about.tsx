import { Link } from "react-router";
import { ArrowRight, Mail, Phone, TrendingUp, Users, Clock, ShieldCheck } from "lucide-react";
import { Navbar } from "../components/navbar/navbar";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.glowOrb1} />
          <div className={styles.glowOrb2} />
          <div className={styles.particles} />
        </div>
        
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeadline}>
              We Don’t Build Tools. <br />
              <span className={styles.gradientText}>We Build Growth Engines.</span>
            </h1>
            <p className={styles.heroSubtext}>
              FlowX AI is an AI Growth Agency helping restaurants and local businesses automate operations, 
              increase conversions, and scale revenue using intelligent systems.
            </p>
            
            <div className={styles.heroButtons}>
              <a href="#contact" className={styles.primaryButton}>
                Book Strategy Call <ArrowRight size={20} />
              </a>
              <a href="https://wa.me/918576066041" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
                Message Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <h2 className={styles.sectionHeadline}>Why We Started FlowX AI</h2>
            <div className={styles.storyText}>
              <p>
                Most restaurants and local businesses are losing customers daily — 
                missed calls, delayed WhatsApp replies, manual follow-ups, and poor online presence.
              </p>
              <p className={styles.highlightParagraph}>We saw the gap.</p>
              <p>
                AI wasn’t being used to grow businesses — it was just being sold as a “tool”.
              </p>
              <p>
                So we built FlowX AI with one mission:
              </p>
              <h3 className={styles.missionStatement}>
                Turn AI into predictable revenue systems for real businesses.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Founder Section */}
      <section className={styles.founderSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeadline}>Built By Founders Obsessed With Growth</h2>
          
          <div className={styles.foundersGrid}>
            {/* Founder 1 */}
            <div className={styles.founderCard}>
              <div className={styles.imageWrapper}>
                <div className={styles.imageGlow} />
                <img 
                  src="https://placehold.co/400x400/050816/00f0ff?text=Rohit" 
                  alt="Rohit Gautam" 
                  className={styles.founderImage} 
                />
              </div>
              <h3 className={styles.founderName}>Rohit Gautam</h3>
              <p className={styles.founderTitle}>Co-Founder, FlowX AI</p>
              <p className={styles.founderBio}>
                AI Automation Strategist focused on building scalable customer journeys, 
                conversion systems, and revenue-driven automation for modern businesses.
              </p>
              <div className={styles.founderContact}>
                <span className={styles.iconWrapper}><Phone size={16} /></span>
                <span>+91 8576066041</span>
              </div>
            </div>

            {/* Founder 2 */}
            <div className={styles.founderCard}>
              <div className={styles.imageWrapper}>
                <div className={styles.imageGlow} />
                <img 
                  src="https://placehold.co/400x400/050816/00f0ff?text=Roshan" 
                  alt="Roshan Dev" 
                  className={styles.founderImage} 
                />
              </div>
              <h3 className={styles.founderName}>Roshan Dev</h3>
              <p className={styles.founderTitle}>Co-Founder, FlowX AI</p>
              <p className={styles.founderBio}>
                Systems Architect & Technical Lead specializing in AI infrastructure, 
                automation workflows, and performance-driven digital platforms.
              </p>
              <div className={styles.founderContact}>
                <span className={styles.iconWrapper}><Phone size={16} /></span>
                <span>+91 9006455592</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Philosophy Section */}
      <section className={styles.philosophySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeadline}>Our Philosophy</h2>
          
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyItem}>
              <TrendingUp className={styles.philosophyIcon} />
              <p>AI should increase revenue, not complexity</p>
            </div>
            <div className={styles.philosophyItem}>
              <Users className={styles.philosophyIcon} />
              <p>Automation should reduce staff stress, not replace people</p>
            </div>
            <div className={styles.philosophyItem}>
              <Clock className={styles.philosophyIcon} />
              <p>Systems should work 24/7 even when you don’t</p>
            </div>
            <div className={styles.philosophyItem}>
              <ShieldCheck className={styles.philosophyIcon} />
              <p>Growth should be predictable</p>
            </div>
          </div>

          <p className={styles.closingLine}>
            If it doesn’t grow your business, we don’t build it.
          </p>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactCard}>
            <h2 className={styles.contactHeadline}>Let’s Build Your Growth System</h2>
            <p className={styles.contactSubtext}>
              If you’re ready to stop losing customers and start scaling with AI, let’s talk.
            </p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <a href="mailto:flowx.ai.in@gmail.com">flowx.ai.in@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <a href="tel:+918576066041">Rohit Gautam: +91 8576066041</a>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <a href="tel:+919006455592">Roshan Dev: +91 9006455592</a>
              </div>
            </div>

            <div className={styles.contactButtons}>
              <a href="tel:+918576066041" className={styles.primaryButton}>
                Book Strategy Call
              </a>
              <a href="https://wa.me/918576066041" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
