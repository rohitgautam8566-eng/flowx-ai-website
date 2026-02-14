import { useEffect } from "react";
import styles from "./whatsapp.module.css";
import { Navbar } from "../components/navbar/navbar";
import { Check, ArrowRight, MessageCircle, Database, Zap, Clock, Users, Shield } from "lucide-react";

export default function WhatsAppAgentPage() {
  
  useEffect(() => {
    // Simple intersection observer for fade-in elements
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
              Turn Every WhatsApp Message Into <span className={styles.gradientText}>Revenue.</span>
            </h1>
            <p className={styles.heroSubtext}>
              24/7 AI system that handles inquiries, confirms orders, captures leads, and follows up automatically.
            </p>
            <div className={styles.heroButtons}>
              <a href="#book" className={styles.primaryBtn}>
                Book Strategy Call <ArrowRight size={18} />
              </a>
              <a href="#demo" className={styles.secondaryBtn}>
                See Live Demo
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.workflowContainer}>
              {/* Animated Diagram Nodes */}
              <div className={styles.nodeWrapper}>
                <div className={`${styles.node} ${styles.customer}`}>
                  <Users size={24} />
                  <span>Customer</span>
                </div>
                <div className={styles.connectionLine} />
                <div className={`${styles.node} ${styles.whatsapp}`}>
                  <MessageCircle size={24} />
                  <span>WhatsApp</span>
                </div>
                <div className={styles.connectionLine} />
                <div className={`${styles.node} ${styles.aiBrain}`}>
                  <Zap size={24} />
                  <span>AI Brain</span>
                  <div className={styles.pulseRing} />
                </div>
                <div className={styles.connectionLine} />
                <div className={`${styles.node} ${styles.success}`}>
                  <Check size={24} />
                  <span>Order Confirmed</span>
                </div>
                <div className={styles.connectionLine} />
                <div className={`${styles.node} ${styles.data}`}>
                  <Database size={24} />
                  <span>Data</span>
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
            Restaurants Are <span className={styles.textRed}>Losing Orders</span> Every Day.
          </h2>
          <div className={styles.problemsGrid}>
            {[
              "Staff missing WhatsApp messages",
              "Slow reply time = Lost customers",
              "Orders not confirmed properly",
              "No follow-up on leads",
              "Manual chaos during peak hours",
              "Customers switching to competitors"
            ].map((problem, i) => (
              <div key={i} className={`${styles.problemCard} ${styles.reveal}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className={styles.problemIcon}>✕</div>
                <p>{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>
            System Features
          </h2>
          <div className={styles.featureGrid}>
            {[
              { icon: Zap, title: "Automatic Order Taking", desc: "Handle complex orders instantly without human intervention." },
              { icon: Check, title: "Instant Confirmation", desc: "Send immediate receipts and estimates." },
              { icon: Clock, title: "Table Reservations", desc: "Book tables 24/7 directly through chat." },
              { icon: MessageCircle, title: "FAQ Automation", desc: "Answer common questions about location, menu, and hours." },
              { icon: Database, title: "Customer Data Capture", desc: "Automatically save names, numbers, and preferences." },
              { icon: Users, title: "Human Handover", desc: "Seamlessly alert staff when a human is needed." },
              { icon: Shield, title: "24/7 Response", desc: "Never sleep. Never miss a message." },
              { icon: ArrowRight, title: "Follow-up Messaging", desc: "Re-engage customers who didn't complete orders." }
            ].map((feature, i) => (
              <div key={i} className={`${styles.featureCard} ${styles.reveal}`}>
                <feature.icon className={styles.featureIcon} size={28} />
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className={styles.founders}>
        <div className={styles.container}>
          <div className={`${styles.founderContent} ${styles.reveal}`}>
            <h2>Built By Founders Who Understand Growth.</h2>
            <p className={styles.founderQuote}>"We don’t build chatbots. We build revenue systems."</p>
            
            <div className={styles.founderGrid}>
              <div className={styles.founderCard}>
                <div className={styles.avatarPlaceholder}>RG</div>
                <h3>Rohit Gautam</h3>
                <span>Co-Founder, FlowX AI</span>
              </div>
              <div className={styles.founderCard}>
                <div className={styles.avatarPlaceholder}>RD</div>
                <h3>Roshan Dev</h3>
                <span>Co-Founder, FlowX AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} id="book">
        <div className={styles.ctaGlow} />
        <div className={`${styles.ctaContent} ${styles.reveal}`}>
          <h2>Still Handling Orders Manually?</h2>
          <p>Doing nothing is also a decision.</p>
          <div className={styles.ctaButtons}>
            <a href="https://wa.me/1234567890?text=YES" className={styles.primaryBtnLarge}>
              Reply YES and We’ll Show You How
            </a>
            <a href="#call" className={styles.secondaryBtnLarge}>
              Book Strategy Call
            </a>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://flowxai.in">FlowX AI Website</a>
            <span>•</span>
            <a href="#">Instagram</a>
            <span>•</span>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
}
