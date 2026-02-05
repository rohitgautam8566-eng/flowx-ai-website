import type { Route } from "./+types/home";
import { MessageCircle, Sparkles, ChevronRight, Zap, Clock, TrendingUp, Users, CheckCircle } from "lucide-react";
import styles from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FlowX AI - Automate Your Restaurant With AI" },
    { name: "description", content: "AI-powered WhatsApp ordering and high-converting restaurant websites" },
  ];
}

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroOrb} />
        <div className={styles.heroOrb} />
        <div className={styles.heroOrb} />
        <div className={styles.floatingElement} />
        <div className={styles.floatingElement} />
        <div className={styles.floatingElement} />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Automate Your Restaurant With AI
          </h1>
          <p className={styles.heroSubtitle}>
            AI-powered WhatsApp ordering and high-converting restaurant websites — designed to increase orders and reduce manual work.
          </p>
          <div className={styles.heroCtas}>
            <a 
              href="https://wa.me/919006455592" 
              className={styles.ctaPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Get Started on WhatsApp</span>
              <MessageCircle size={20} />
            </a>
            <a href="#services" className={styles.ctaSecondary}>
              <span>View Services</span>
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className={styles.services}>
        <div className={styles.servicesGrid}>
          {/* WhatsApp AI Card */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <MessageCircle size={28} />
            </div>
            <h2 className={styles.serviceTitle}>WhatsApp AI Automation</h2>
            <p className={styles.serviceDescription}>
              Automate customer communication, orders, and reservations with intelligent AI that works 24/7.
            </p>
            <div className={styles.serviceCtas}>
              <a href="#whatsapp-features" className={`${styles.serviceBtn} ${styles.serviceBtnPrimary}`}>
                View Features
              </a>
              <a href="#whatsapp-pricing" className={`${styles.serviceBtn} ${styles.serviceBtnSecondary}`}>
                View Pricing
              </a>
            </div>
          </div>

          {/* Website Development Card */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <Sparkles size={28} />
            </div>
            <h2 className={styles.serviceTitle}>Restaurant Website Development</h2>
            <p className={styles.serviceDescription}>
              Premium websites with AI-generated content and images, optimized for conversion and mobile users.
            </p>
            <div className={styles.serviceCtas}>
              <a href="#website-features" className={`${styles.serviceBtn} ${styles.serviceBtnPrimary}`}>
                View Features
              </a>
              <a href="#website-pricing" className={`${styles.serviceBtn} ${styles.serviceBtnSecondary}`}>
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp AI Deep Dive */}
      <section id="whatsapp-features" className={styles.deepDive}>
        <h2 className={styles.deepDiveTitle}>WhatsApp AI Automation</h2>

        {/* Flow Diagram */}
        <div className={styles.flowDiagram}>
          <div className={styles.flowStep}>
            <div className={styles.flowIcon}>👤</div>
            <div>Customer</div>
          </div>
          <div className={styles.flowArrow}>→</div>
          <div className={styles.flowStep}>
            <div className={styles.flowIcon}>💬</div>
            <div>WhatsApp</div>
          </div>
          <div className={styles.flowArrow}>→</div>
          <div className={styles.flowStep}>
            <div className={styles.flowIcon}>🤖</div>
            <div>AI Agent</div>
          </div>
          <div className={styles.flowArrow}>→</div>
          <div className={styles.flowStep}>
            <div className={styles.flowIcon}>✅</div>
            <div>Order Confirmed</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Automatic order taking</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Table reservations</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Digital menu sharing</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>FAQ automation</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Customer data capture</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Human handover option</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>24/7 response automation</span>
          </div>
        </div>

        {/* Pricing */}
        <div id="whatsapp-pricing" className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h3 className={styles.pricingTitle}>Without POS Integration</h3>
            <div className={styles.pricingPrice}>
              <div className={styles.pricingSetup}>₹5,000</div>
              <div className={styles.pricingMonthly}>Setup Fee</div>
              <div className={styles.pricingSetup} style={{ marginTop: '1rem' }}>₹1,500</div>
              <div className={styles.pricingMonthly}>Monthly</div>
            </div>
            <ul className={styles.pricingFeatures}>
              <li>AI WhatsApp automation</li>
              <li>Order management</li>
              <li>Customer support</li>
              <li>Basic analytics</li>
            </ul>
            <a href="https://wa.me/919006455592" className={styles.pricingCta} target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </div>

          <div className={`${styles.pricingCard} ${styles.recommended}`}>
            <h3 className={styles.pricingTitle}>With POS Integration</h3>
            <div className={styles.pricingPrice}>
              <div className={styles.pricingSetup}>₹10,000</div>
              <div className={styles.pricingMonthly}>Setup Fee</div>
              <div className={styles.pricingSetup} style={{ marginTop: '1rem' }}>₹2,000</div>
              <div className={styles.pricingMonthly}>Monthly</div>
            </div>
            <ul className={styles.pricingFeatures}>
              <li>Everything in basic plan</li>
              <li>POS system integration</li>
              <li>Real-time inventory sync</li>
              <li>Advanced analytics</li>
            </ul>
            <a href="https://wa.me/919006455592" className={styles.pricingCta} target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Website Development Deep Dive */}
      <section id="website-features" className={styles.deepDive}>
        <h2 className={styles.deepDiveTitle}>Restaurant Website Development</h2>

        {/* Features Grid - Pages */}
        <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: 'var(--space-5)', color: 'var(--color-neutral-12)' }}>
          Pages Included
        </h3>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Home Page</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>About Page</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Menu Page</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Gallery Page</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Contact Page</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Offer Landing Pages</span>
          </div>
        </div>

        {/* Core Features */}
        <h3 style={{ fontSize: '1.75rem', fontWeight: '700', margin: 'var(--space-8) 0 var(--space-5)', color: 'var(--color-neutral-12)' }}>
          Core Website Features
        </h3>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Mobile responsive design</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Fast loading speed</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Premium UI design</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>WhatsApp ordering integration</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Google Maps integration</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>SEO optimized structure</span>
          </div>
        </div>

        {/* AI Enhancements */}
        <h3 style={{ fontSize: '1.75rem', fontWeight: '700', margin: 'var(--space-8) 0 var(--space-5)', color: 'var(--color-neutral-12)' }}>
          AI-Powered Enhancements
        </h3>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <Sparkles className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>AI generated food & branding images</span>
          </div>
          <div className={styles.featureItem}>
            <Sparkles className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>AI optimized website content</span>
          </div>
          <div className={styles.featureItem}>
            <Sparkles className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>AI assisted copywriting</span>
          </div>
        </div>

        {/* Maintenance */}
        <h3 style={{ fontSize: '1.75rem', fontWeight: '700', margin: 'var(--space-8) 0 var(--space-5)', color: 'var(--color-neutral-12)' }}>
          Maintenance & Support
        </h3>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Hosting</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Security updates</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Backup system</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureItemIcon} size={20} />
            <span className={styles.featureItemText}>Minor updates</span>
          </div>
        </div>

        {/* Pricing */}
        <div id="website-pricing" className={styles.pricingGrid} style={{ marginTop: 'var(--space-8)' }}>
          <div className={styles.pricingCard}>
            <h3 className={styles.pricingTitle}>Standard Website</h3>
            <div className={styles.pricingPrice}>
              <div className={styles.pricingSetup}>₹5,000</div>
              <div className={styles.pricingMonthly}>Setup Fee</div>
              <div className={styles.pricingSetup} style={{ marginTop: '1rem' }}>₹500</div>
              <div className={styles.pricingMonthly}>Monthly</div>
            </div>
            <ul className={styles.pricingFeatures}>
              <li>All core pages</li>
              <li>Mobile responsive</li>
              <li>Basic AI content</li>
              <li>Hosting & maintenance</li>
            </ul>
            <a href="https://wa.me/919006455592" className={styles.pricingCta} target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </div>

          <div className={`${styles.pricingCard} ${styles.recommended}`}>
            <h3 className={styles.pricingTitle}>Premium Website</h3>
            <div className={styles.pricingPrice}>
              <div className={styles.pricingSetup}>₹8,000</div>
              <div className={styles.pricingMonthly}>Setup Fee</div>
              <div className={styles.pricingSetup} style={{ marginTop: '1rem' }}>₹1,000</div>
              <div className={styles.pricingMonthly}>Monthly</div>
            </div>
            <ul className={styles.pricingFeatures}>
              <li>Everything in Standard</li>
              <li>Advanced AI content</li>
              <li>Custom design work</li>
              <li>Priority support</li>
            </ul>
            <a href="https://wa.me/919006455592" className={styles.pricingCta} target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <h2 className={styles.benefitsTitle}>Why FlowX AI</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <Zap />
            </div>
            <h3 className={styles.benefitTitle}>Built for Restaurants</h3>
            <p className={styles.benefitDescription}>
              Tailored specifically for the restaurant industry with features that address your unique needs.
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <Clock />
            </div>
            <h3 className={styles.benefitTitle}>Faster Responses</h3>
            <p className={styles.benefitDescription}>
              AI responds to customer inquiries instantly, 24/7, ensuring no opportunity is missed.
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <TrendingUp />
            </div>
            <h3 className={styles.benefitTitle}>Increase Conversions</h3>
            <p className={styles.benefitDescription}>
              Convert more website visitors and WhatsApp conversations into actual orders.
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <Users />
            </div>
            <h3 className={styles.benefitTitle}>Reduce Workload</h3>
            <p className={styles.benefitDescription}>
              Automate repetitive tasks so your staff can focus on providing excellent service.
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <CheckCircle />
            </div>
            <h3 className={styles.benefitTitle}>Easy Onboarding</h3>
            <p className={styles.benefitDescription}>
              Quick setup process with full support to get your automation running in days, not months.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <h2 className={styles.testimonialsTitle}>What Restaurants Say</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialStars}>★★★★★</div>
            <p className={styles.testimonialText}>
              "FlowX AI transformed how we handle orders. Our WhatsApp is now our biggest sales channel, and it runs on autopilot!"
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.testimonialAvatar}>RK</div>
              <div className={styles.testimonialInfo}>
                <div className={styles.testimonialName}>Rajesh Kumar</div>
                <div className={styles.testimonialRole}>Owner, Spice Junction</div>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialStars}>★★★★★</div>
            <p className={styles.testimonialText}>
              "The premium website they built looks incredible and our online orders increased by 40% in the first month."
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.testimonialAvatar}>PS</div>
              <div className={styles.testimonialInfo}>
                <div className={styles.testimonialName}>Priya Sharma</div>
                <div className={styles.testimonialRole}>Manager, Café Delight</div>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialStars}>★★★★★</div>
            <p className={styles.testimonialText}>
              "Best investment we made. The AI handles customer queries perfectly and we saved hours every day."
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.testimonialAvatar}>AM</div>
              <div className={styles.testimonialInfo}>
                <div className={styles.testimonialName}>Arjun Mehta</div>
                <div className={styles.testimonialRole}>Owner, Tandoor Express</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaBackground} />
        <div className={styles.finalCtaContent}>
          <h2 className={styles.finalCtaTitle}>
            Ready to Automate Your Restaurant?
          </h2>
          <a 
            href="https://wa.me/919006455592" 
            className={styles.finalCtaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Talk on WhatsApp
            <MessageCircle size={24} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            <div className={styles.footerBrand}>FlowX AI</div>
            <p className={styles.footerDescription}>
              AI-powered automation solutions for modern restaurants. Increase orders, reduce workload, and scale with confidence.
            </p>
            <a 
              href="https://wa.me/919006455592" 
              className={styles.footerWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          <div className={styles.footerSection}>
            <h3>Services</h3>
            <ul className={styles.footerLinks}>
              <li><a href="#whatsapp-features">WhatsApp AI Automation</a></li>
              <li><a href="#website-features">Website Development</a></li>
              <li><a href="#whatsapp-pricing">Pricing</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Company</h3>
            <ul className={styles.footerLinks}>
              <li><a href="#services">About Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="https://wa.me/919006455592" target="_blank" rel="noopener noreferrer">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 FlowX AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
