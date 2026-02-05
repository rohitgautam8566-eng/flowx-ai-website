import type { Route } from "./+types/home";
import { MessageCircle, Sparkles, ChevronRight, Zap, Clock, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Navbar } from "~/components/navbar/navbar";
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
      <Navbar />
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
        <div className={styles.servicesIntro}>
          <h2 className={styles.servicesIntroTitle}>
            Our Two Core Solutions For Restaurant Growth
          </h2>
          <p className={styles.servicesIntroDescription}>
            We focus on solving the two biggest problems restaurants face today — handling customer communication efficiently and building a strong online presence that converts visitors into real orders.
          </p>
        </div>
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
          <div className={styles.featuresRow}>
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
          </div>
          <div className={`${styles.featuresRow} ${styles.centered}`}>
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
        </div>

        {/* Pricing */}
        <div id="whatsapp-pricing" className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h3 className={styles.pricingTitle}>Without POS Integration</h3>
            <div className={styles.pricingPrice}>
              <div className={styles.pricingSetup}>₹5,000</div>
              <div className={styles.pricingMonthly}>Setup Fee</div>
              <div className={`${styles.pricingSetup} ${styles.pricingSetupSecondary}`}>₹1,500</div>
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
              <div className={`${styles.pricingSetup} ${styles.pricingSetupSecondary}`}>₹2,000</div>
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

        {/* Pages & Core Features - Content Block */}
        <div className={styles.contentBlock}>
          <div className={styles.contentBlockText}>
            <h3 className={styles.contentBlockTitle}>Complete Website Package</h3>
            <p className={styles.contentBlockDescription}>
              We build fully responsive restaurant websites with all the essential pages your customers expect. Every website includes mobile-optimized design, fast loading speeds, and SEO structure to help you rank higher in local searches.
            </p>
            <div className={styles.featureHighlights}>
              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>🏠</div>
                <div className={styles.highlightText}>
                  <div className={styles.highlightTitle}>Essential Pages</div>
                  <div className={styles.highlightDesc}>Home, About, Menu, Gallery, Contact & Offer Pages</div>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>📱</div>
                <div className={styles.highlightText}>
                  <div className={styles.highlightTitle}>Mobile-First Design</div>
                  <div className={styles.highlightDesc}>Perfect experience on all devices with responsive layouts</div>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>⚡</div>
                <div className={styles.highlightText}>
                  <div className={styles.highlightTitle}>Performance Optimized</div>
                  <div className={styles.highlightDesc}>Lightning-fast loading speeds for better user experience</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentBlockFeatures}>
            <div className={styles.featureColumn}>
              <div className={styles.featureColumnTitle}>Pages Included</div>
              <div className={styles.compactFeature}>
                <CheckCircle size={16} />
                <span>Home Page</span>
              </div>
              <div className={styles.compactFeature}>
                <CheckCircle size={16} />
                <span>About Page</span>
              </div>
              <div className={styles.compactFeature}>
                <CheckCircle size={16} />
                <span>Menu Page</span>
              </div>
              <div className={styles.compactFeature}>
                <CheckCircle size={16} />
                <span>Gallery Page</span>
              </div>
              <div className={styles.compactFeature}>
                <CheckCircle size={16} />
                <span>Contact Page</span>
              </div>
              <div className={styles.compactFeature}>
                <CheckCircle size={16} />
                <span>Offer Landing Pages</span>
              </div>
            </div>
            <div className={styles.featureColumn}>
              <div className={styles.featureColumnTitle}>Core Features</div>
              <div className={styles.compactFeature}>
                <CheckCircle size={16} />
                <span>Premium UI Design</span>
              </div>
              <div className={styles.compactFeature}>
                <CheckCircle size={16} />
                <span>WhatsApp Integration</span>
              </div>
              <div className={styles.compactFeature}>
                <CheckCircle size={16} />
                <span>Google Maps</span>
              </div>
              <div className={styles.compactFeature}>
                <CheckCircle size={16} />
                <span>SEO Optimized</span>
              </div>
              <div className={styles.compactFeature}>
                <CheckCircle size={16} />
                <span>Fast Loading</span>
              </div>
              <div className={styles.compactFeature}>
                <CheckCircle size={16} />
                <span>Mobile Responsive</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Enhancements Banner */}
        <div className={styles.aiEnhancementsBanner}>
          <div className={styles.bannerIcon}>
            <Sparkles size={32} />
          </div>
          <div className={styles.bannerContent}>
            <h3 className={styles.bannerTitle}>AI-Powered Content Generation</h3>
            <p className={styles.bannerDescription}>
              Every website includes AI-generated food photography, branding images, and professionally optimized copywriting — saving you thousands in content creation costs.
            </p>
            <div className={styles.bannerFeatures}>
              <div className={styles.bannerFeature}>
                <Sparkles size={18} />
                <span>AI-Generated Food & Brand Images</span>
              </div>
              <div className={styles.bannerFeature}>
                <Sparkles size={18} />
                <span>SEO-Optimized Content Writing</span>
              </div>
              <div className={styles.bannerFeature}>
                <Sparkles size={18} />
                <span>Professional Copywriting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Maintenance - Horizontal Checklist */}
        <div className={styles.maintenanceSection}>
          <h3 className={styles.maintenanceTitle}>Included Maintenance & Support</h3>
          <div className={styles.maintenanceGrid}>
            <div className={styles.maintenanceItem}>
              <div className={styles.maintenanceIcon}>🛡️</div>
              <div className={styles.maintenanceText}>
                <div className={styles.maintenanceLabel}>Hosting Included</div>
                <div className={styles.maintenanceDesc}>Reliable cloud hosting</div>
              </div>
            </div>
            <div className={styles.maintenanceItem}>
              <div className={styles.maintenanceIcon}>🔒</div>
              <div className={styles.maintenanceText}>
                <div className={styles.maintenanceLabel}>Security Updates</div>
                <div className={styles.maintenanceDesc}>Regular patches & monitoring</div>
              </div>
            </div>
            <div className={styles.maintenanceItem}>
              <div className={styles.maintenanceIcon}>💾</div>
              <div className={styles.maintenanceText}>
                <div className={styles.maintenanceLabel}>Automatic Backups</div>
                <div className={styles.maintenanceDesc}>Daily data protection</div>
              </div>
            </div>
            <div className={styles.maintenanceItem}>
              <div className={styles.maintenanceIcon}>🔧</div>
              <div className={styles.maintenanceText}>
                <div className={styles.maintenanceLabel}>Minor Updates</div>
                <div className={styles.maintenanceDesc}>Content changes included</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div id="website-pricing" className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h3 className={styles.pricingTitle}>Standard Website</h3>
            <div className={styles.pricingPrice}>
              <div className={styles.pricingSetup}>₹5,000</div>
              <div className={styles.pricingMonthly}>Setup Fee</div>
              <div className={`${styles.pricingSetup} ${styles.pricingSetupSecondary}`}>₹500</div>
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
              <div className={`${styles.pricingSetup} ${styles.pricingSetupSecondary}`}>₹1,000</div>
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
          <div className={styles.benefitsRow}>
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
          </div>

          <div className={`${styles.benefitsRow} ${styles.centered}`}>
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
