import { Link } from "react-router";
import { MessageCircle, Mail, TrendingUp, Cpu, Clock, ShieldCheck, Phone } from "lucide-react";
import styles from "./about.module.css";
import { Navbar } from "~/components/navbar/navbar";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.gradientOrb}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} ${styles.fadeUp}`}>
            Built by Founders<br />Who Understand Growth.
          </h1>
          <p className={`${styles.heroSubtitle} ${styles.fadeUp} ${styles.delay1}`}>
            We don’t build chatbots. We build revenue systems for modern businesses.
          </p>
        </div>
      </section>

      {/* 2. FOUNDER SECTION - ROHIT */}
      <section className={styles.founderSection}>
        <div className={styles.founderRow}>
          <div className={`${styles.founderImageWrapper} ${styles.fadeUp} ${styles.delay2}`}>
            <div className={styles.founderGlow}></div>
            <img 
              src="/founders/rohit.webp" 
              alt="Rohit Gautam, Co-Founder FlowX AI" 
              className={styles.founderImage}
            />
          </div>
          <div className={`${styles.founderContent} ${styles.fadeUp} ${styles.delay3}`}>
            <h2 className={styles.founderName}>Rohit Gautam</h2>
            <span className={styles.founderRole}>Co-Founder, FlowX AI</span>
            
            <p className={styles.founderBio}>
              I help restaurants and local businesses turn missed messages, delayed replies, and manual chaos into automated revenue systems.
            </p>
            
            <div className={styles.founderHighlight}>
              "My focus is simple — Build predictable growth engines powered by AI."
            </div>

            <p className={styles.founderBio}>
              From WhatsApp automation to conversion-driven funnels, I design systems that capture leads, confirm orders instantly, and increase repeat customers without increasing staff workload.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} /> 
                <span>+91 8576066041</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <span>flowx.ai.in@gmail.com</span>
              </div>
            </div>

            <a href="https://wa.me/918576066041" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              <MessageCircle size={20} />
              Message Rohit on WhatsApp
            </a>
          </div>
        </div>

        {/* 2. FOUNDER SECTION - ROSHAN */}
        <div className={`${styles.founderRow} ${styles.reverse}`}>
          <div className={`${styles.founderImageWrapper} ${styles.fadeUp} ${styles.delay2}`}>
             <div className={styles.founderGlow}></div>
             <img 
              src="/founders/roshan.png" 
              alt="Roshan Dev, Co-Founder FlowX AI" 
              className={styles.founderImage}
            />
          </div>
          <div className={`${styles.founderContent} ${styles.fadeUp} ${styles.delay3}`}>
            <h2 className={styles.founderName}>Roshan Dev</h2>
            <span className={styles.founderRole}>Co-Founder, FlowX AI</span>
            
            <p className={styles.founderBio}>
              I architect the backend intelligence behind our automation systems.
            </p>

             <p className={styles.founderBio}>
              From AI workflow design to scalable system integration, I ensure every automation runs fast, secure, and performance-driven.
            </p>
            
            <div className={styles.founderHighlight}>
              "If Rohit designs the strategy — I build the engine that powers it."
            </div>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} /> 
                <span>+91 9006455592</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <span>flowx.ai.in@gmail.com</span>
              </div>
            </div>

            <a href="https://wa.me/919006455592?text=Hi%20I%20am%20interested%20in%20your%20AI%20automation%20services" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              <MessageCircle size={20} />
              Message Roshan on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 3. STORY SECTION */}
      <section className={styles.storySection}>
        <div className={styles.storyContent}>
          <h2 className={`${styles.sectionTitle} ${styles.fadeUp}`}>Why We Started FlowX AI</h2>
          
          <p className={`${styles.storyText} ${styles.fadeUp} ${styles.delay1}`}>
            Most restaurants and local businesses don’t lose customers because they are bad.
          </p>

          <div className={`${styles.storyList} ${styles.fadeUp} ${styles.delay2}`}>
            <div className={styles.storyItem}><span className={styles.bullet}>•</span> They reply late</div>
            <div className={styles.storyItem}><span className={styles.bullet}>•</span> Orders get missed</div>
            <div className={styles.storyItem}><span className={styles.bullet}>•</span> Staff gets overloaded</div>
            <div className={styles.storyItem}><span className={styles.bullet}>•</span> No proper follow-up system exists</div>
            <div className={styles.storyItem}><span className={styles.bullet}>•</span> Competitors respond instantly</div>
          </div>

          <p className={`${styles.storyText} ${styles.fadeUp} ${styles.delay3}`}>
            We built FlowX AI to fix that.
          </p>

           <h3 className={`${styles.missionStatement} ${styles.fadeUp} ${styles.delay4}`}>
            We create automated revenue systems that work 24/7 — even when your staff is offline.
          </h3>
        </div>
      </section>

      {/* 4. PHILOSOPHY SECTION */}
      <section className={styles.philosophySection}>
        <div className="text-center">
            <h2 className={`${styles.sectionTitle} ${styles.fadeUp}`}>Our Philosophy</h2>
        </div>
        
        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={`${styles.card} ${styles.fadeUp} ${styles.delay1}`}>
            <TrendingUp className={styles.cardIcon} size={32} />
            <h3 className={styles.cardTitle}>Revenue First</h3>
            <p className={styles.cardText}>AI should increase revenue, not complexity. If it doesn't grow your bottom line, we don't build it.</p>
          </div>

          {/* Card 2 */}
          <div className={`${styles.card} ${styles.fadeUp} ${styles.delay2}`}>
            <Cpu className={styles.cardIcon} size={32} />
            <h3 className={styles.cardTitle}>Automation Over Manual</h3>
            <p className={styles.cardText}>Humans shouldn't do robot work. We automate the repetitive so your team can focus on the personal.</p>
          </div>

          {/* Card 3 */}
          <div className={`${styles.card} ${styles.fadeUp} ${styles.delay3}`}>
            <Clock className={styles.cardIcon} size={32} />
            <h3 className={styles.cardTitle}>Systems Over Staff</h3>
            <p className={styles.cardText}>Staff get sick, tired, and busy. Our systems work 24/7/365 without taking a break.</p>
          </div>

          {/* Card 4 */}
          <div className={`${styles.card} ${styles.fadeUp} ${styles.delay4}`}>
            <ShieldCheck className={styles.cardIcon} size={32} />
            <h3 className={styles.cardTitle}>Growth With Predictability</h3>
            <p className={styles.cardText}>Stop guessing. We build systems that give you predictable, scalable growth every single month.</p>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={`${styles.ctaTitle} ${styles.fadeUp}`}>Ready to Build a Real<br />AI Growth Engine?</h2>
          <p className={`${styles.ctaText} ${styles.fadeUp} ${styles.delay1}`}>
            If you're tired of missed orders and manual chaos —<br />Let’s fix it properly.
          </p>

          <div className={`${styles.buttonGroup} ${styles.fadeUp} ${styles.delay2}`}>
            <a href="https://calendly.com/flowxai/15-min-free-discovery-call" target="_blank" className={styles.primaryBtn}>
              Book Strategy Call
            </a>
            <Link to="/ai-websites" className={styles.secondaryBtn}>
              Test Our AI Demo
            </Link>
          </div>
          
          <p className={`${styles.whatsappSubtext} ${styles.fadeUp} ${styles.delay3}`}>
            Or message us directly on WhatsApp and we’ll show you how it works in your business.
          </p>
        </div>
      </section>
    </div>
  );
}
