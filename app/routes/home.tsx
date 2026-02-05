import type { Route } from "./+types/home";
import {
  MessageSquare,
  Globe,
  ArrowRight,
  CheckCircle,
  Zap,
  TrendingUp,
  Users,
  Clock,
  Shield,
  Star,
} from "lucide-react";
import styles from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FlowX AI - Automate Your Restaurant With AI" },
    {
      name: "description",
      content:
        "AI-powered WhatsApp ordering and high-converting restaurant websites — designed to increase orders and reduce manual work.",
    },
  ];
}

export default function Home() {
  const whatsappLink = "https://wa.me/919006455592";

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGrid} />
          <div className={styles.floatingElement} />
          <div className={styles.floatingElement} />
          <div className={styles.floatingElement} />
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Automate Your Restaurant With AI</h1>
          <p className={styles.heroSubtitle}>
            AI-powered WhatsApp ordering and high-converting restaurant websites — designed to increase orders and
            reduce manual work.
          </p>
          <div className={styles.heroCtas}>
            <a href={whatsappLink} className={styles.primaryCta} target="_blank" rel="noopener noreferrer">
              Get Started on WhatsApp
            </a>
            <a href="#services" className={styles.secondaryCta}>
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className={styles.trustSection}>
        <h2 className={styles.trustStatement}>Built for modern restaurants ready to scale</h2>
        <div className={styles.trustBadges}>
          <div className={styles.badge}>AI-Powered Automation</div>
          <div className={styles.badge}>24/7 Customer Support</div>
          <div className={styles.badge}>Restaurant Specialists</div>
          <div className={styles.badge}>Proven Results</div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {/* WhatsApp AI Card */}
          <div className={styles.serviceCard}>
            <MessageSquare className={styles.serviceIcon} />
            <h3 className={styles.serviceTitle}>WhatsApp AI Automation</h3>
            <p className={styles.serviceDescription}>
              Transform customer conversations into confirmed orders. Our AI handles inquiries, takes orders, and
              manages reservations 24/7 through WhatsApp.
            </p>
            <div className={styles.serviceButtons}>
              <a href="#whatsapp-features" className={styles.serviceButton}>
                View Features
              </a>
              <a href="#whatsapp-pricing" className={styles.serviceButtonOutline}>
                View Pricing
              </a>
            </div>
          </div>

          {/* Website Development Card */}
          <div className={styles.serviceCard}>
            <Globe className={styles.serviceIcon} />
            <h3 className={styles.serviceTitle}>Restaurant Website Development</h3>
            <p className={styles.serviceDescription}>
              Premium, fast-loading websites designed to convert visitors into customers. Integrated with AI-powered
              features and WhatsApp ordering.
            </p>
            <div className={styles.serviceButtons}>
              <a href="#website-features" className={styles.serviceButton}>
                View Features
              </a>
              <a href="#website-pricing" className={styles.serviceButtonOutline}>
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp AI Deep Dive */}
      <section id="whatsapp-features" className={styles.deepDiveSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>WhatsApp AI Automation</h2>
          <p className={styles.sectionSubtitle}>
            Intelligent automation that handles customer conversations like your best staff member
          </p>
        </div>

        <div className={styles.flowDiagram}>
          <div className={styles.flowStep}>Customer</div>
          <ArrowRight className={styles.flowArrow} />
          <div className={styles.flowStep}>WhatsApp</div>
          <ArrowRight className={styles.flowArrow} />
          <div className={styles.flowStep}>AI</div>
          <ArrowRight className={styles.flowArrow} />
          <div className={styles.flowStep}>Order Confirmed</div>
        </div>

        <div className={styles.featuresList}>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureIcon} />
            <span className={styles.featureText}>Automatic order taking with menu integration</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureIcon} />
            <span className={styles.featureText}>Table reservations and booking management</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureIcon} />
            <span className={styles.featureText}>Digital menu sharing with images and prices</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureIcon} />
            <span className={styles.featureText}>FAQ automation for common questions</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureIcon} />
            <span className={styles.featureText}>Customer data capture and CRM integration</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureIcon} />
            <span className={styles.featureText}>Human handover for complex requests</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureIcon} />
            <span className={styles.featureText}>24/7 response automation - never miss an order</span>
          </div>
          <div className={styles.featureItem}>
            <CheckCircle className={styles.featureIcon} />
            <span className={styles.featureText}>Multi-language support for diverse customers</span>
          </div>
        </div>

        <div id="whatsapp-pricing" className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h3 className={styles.planName}>Without POS Integration</h3>
            <div className={styles.planSetup}>₹5,000</div>
            <div className={styles.planMonthly}>₹1,500/month</div>
            <ul className={styles.planFeatures}>
              <li>AI-powered WhatsApp bot</li>
              <li>Order taking automation</li>
              <li>Menu management</li>
              <li>Customer database</li>
              <li>Basic analytics</li>
            </ul>
            <a href={whatsappLink} className={styles.planCta} target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </div>

          <div className={`${styles.pricingCard} ${styles.recommended}`}>
            <h3 className={styles.planName}>With POS Integration</h3>
            <div className={styles.planSetup}>₹10,000</div>
            <div className={styles.planMonthly}>₹2,000/month</div>
            <ul className={styles.planFeatures}>
              <li>Everything in basic plan</li>
              <li>POS system integration</li>
              <li>Real-time inventory sync</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
            </ul>
            <a href={whatsappLink} className={styles.planCta} target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Website Development Deep Dive */}
      <section id="website-features" className={styles.deepDiveSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Restaurant Website Development</h2>
          <p className={styles.sectionSubtitle}>Premium websites that convert visitors into loyal customers</p>
        </div>

        <div className={styles.featuresList}>
          <div className={styles.featureItem}>
            <Globe className={styles.featureIcon} />
            <div>
              <strong className={styles.featureText}>Complete Page Suite</strong>
              <p className={styles.featureText}>Home, About, Menu, Gallery, Contact & Custom Offer Pages</p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <Zap className={styles.featureIcon} />
            <div>
              <strong className={styles.featureText}>Lightning Fast Performance</strong>
              <p className={styles.featureText}>Optimized loading speeds for better user experience and SEO</p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <MessageSquare className={styles.featureIcon} />
            <div>
              <strong className={styles.featureText}>WhatsApp Integration</strong>
              <p className={styles.featureText}>Direct ordering through WhatsApp from your website</p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <TrendingUp className={styles.featureIcon} />
            <div>
              <strong className={styles.featureText}>SEO Optimized</strong>
              <p className={styles.featureText}>Structured for maximum visibility on Google searches</p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <Star className={styles.featureIcon} />
            <div>
              <strong className={styles.featureText}>AI-Generated Content</strong>
              <p className={styles.featureText}>Professional food images, branding, and copywriting powered by AI</p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <Shield className={styles.featureIcon} />
            <div>
              <strong className={styles.featureText}>Secure & Maintained</strong>
              <p className={styles.featureText}>Hosting, security updates, backups, and ongoing support</p>
            </div>
          </div>
        </div>

        <div id="website-pricing" className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h3 className={styles.planName}>Standard Website</h3>
            <div className={styles.planSetup}>₹5,000</div>
            <div className={styles.planMonthly}>₹500/month</div>
            <ul className={styles.planFeatures}>
              <li>5 essential pages</li>
              <li>Mobile responsive design</li>
              <li>WhatsApp integration</li>
              <li>Basic SEO setup</li>
              <li>Hosting included</li>
              <li>Monthly updates</li>
            </ul>
            <a href={whatsappLink} className={styles.planCta} target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </div>

          <div className={`${styles.pricingCard} ${styles.recommended}`}>
            <h3 className={styles.planName}>Premium Website</h3>
            <div className={styles.planSetup}>₹8,000</div>
            <div className={styles.planMonthly}>₹1,000/month</div>
            <ul className={styles.planFeatures}>
              <li>Everything in standard</li>
              <li>AI-generated visuals</li>
              <li>Advanced SEO optimization</li>
              <li>Custom offer pages</li>
              <li>Priority support</li>
              <li>Weekly updates</li>
            </ul>
            <a href={whatsappLink} className={styles.planCta} target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Why FlowX AI */}
      <section className={styles.benefitsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why FlowX AI</h2>
          <p className={styles.sectionSubtitle}>Built specifically for restaurants who want to scale with AI</p>
        </div>

        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <Users className={styles.benefitIcon} />
            <h3 className={styles.benefitTitle}>Restaurant Specialists</h3>
            <p className={styles.benefitDescription}>
              We understand restaurant operations and build solutions tailored to your unique needs
            </p>
          </div>

          <div className={styles.benefitCard}>
            <Clock className={styles.benefitIcon} />
            <h3 className={styles.benefitTitle}>Faster Responses</h3>
            <p className={styles.benefitDescription}>
              AI responds instantly to customer inquiries, reducing wait times and increasing satisfaction
            </p>
          </div>

          <div className={styles.benefitCard}>
            <TrendingUp className={styles.benefitIcon} />
            <h3 className={styles.benefitTitle}>Increase Conversions</h3>
            <p className={styles.benefitDescription}>
              Turn more website visitors and WhatsApp chats into confirmed orders
            </p>
          </div>

          <div className={styles.benefitCard}>
            <Zap className={styles.benefitIcon} />
            <h3 className={styles.benefitTitle}>Reduce Workload</h3>
            <p className={styles.benefitDescription}>
              Free up your staff from repetitive tasks to focus on delivering great food and service
            </p>
          </div>

          <div className={styles.benefitCard}>
            <CheckCircle className={styles.benefitIcon} />
            <h3 className={styles.benefitTitle}>Easy Onboarding</h3>
            <p className={styles.benefitDescription}>
              Quick setup process with full training and ongoing support from our team
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What Restaurant Owners Say</h2>
        </div>

        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialQuote}>
              "FlowX AI transformed how we handle orders. Our WhatsApp is now automated and we never miss a customer
              inquiry, even during rush hours."
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>RK</div>
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>Rajesh Kumar</div>
                <div className={styles.authorRole}>Owner, Spice Garden</div>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <p className={styles.testimonialQuote}>
              "The website they built is stunning and our online orders increased by 40% in the first month. The AI
              integration is seamless."
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>PS</div>
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>Priya Sharma</div>
                <div className={styles.authorRole}>Manager, Café Delight</div>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <p className={styles.testimonialQuote}>
              "Best investment we made for our restaurant. The AI handles reservations perfectly and our staff can focus
              on what they do best."
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>AM</div>
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>Arjun Mehta</div>
                <div className={styles.authorRole}>Owner, Tandoor House</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCtaSection}>
        <div className={styles.finalCtaBackground} />
        <div className={styles.finalCtaContent}>
          <h2 className={styles.finalCtaTitle}>Ready To Automate Your Restaurant?</h2>
          <a href={whatsappLink} className={styles.finalCtaButton} target="_blank" rel="noopener noreferrer">
            Talk on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>FlowX AI</div>
            <p className={styles.footerTagline}>Automating restaurants with intelligent AI solutions</p>
            <a href={whatsappLink} className={styles.whatsappButton} target="_blank" rel="noopener noreferrer">
              <MessageSquare className={styles.whatsappIcon} />
              Contact on WhatsApp
            </a>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Services</h4>
            <a href="#whatsapp-features" className={styles.footerLink}>
              WhatsApp AI Automation
            </a>
            <a href="#website-features" className={styles.footerLink}>
              Website Development
            </a>
            <a href="#whatsapp-pricing" className={styles.footerLink}>
              Pricing
            </a>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Company</h4>
            <a href="#services" className={styles.footerLink}>
              About Us
            </a>
            <a href="#whatsapp-features" className={styles.footerLink}>
              How It Works
            </a>
            <a href={whatsappLink} className={styles.footerLink} target="_blank" rel="noopener noreferrer">
              Contact
            </a>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Resources</h4>
            <a href="#whatsapp-features" className={styles.footerLink}>
              Features
            </a>
            <a href="#website-features" className={styles.footerLink}>
              Case Studies
            </a>
            <a href={whatsappLink} className={styles.footerLink} target="_blank" rel="noopener noreferrer">
              Support
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          © 2024 FlowX AI. All rights reserved. Empowering restaurants with AI automation.
        </div>
      </footer>
    </div>
  );
}
