// app/register/page.js
import Link from "next/link";

export const metadata = {
  title: "Zero Delights Club — Registration",
  description:
    "Product information and compliance page for Zero Delights Club (educational content).",
};

const CHECKOUT_URL = ""; // <-- (opcional) cole aqui seu link de checkout quando quiser
const SUPPORT_EMAIL = "suportdelightsclub@gmail.com";

export default function RegisterPage() {
  const goTo = CHECKOUT_URL || "/#checkout";

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.badge}>Digital Product</div>
          <h1 style={styles.title}>Zero Delights Club</h1>
          <p style={styles.subtitle}>
            Educational and informational content focused on sugar-free and
            gluten-free recipes.
          </p>
        </header>

        {/* Card */}
        <section style={styles.card}>
          {/* ✅ added className */}
          <div style={styles.grid} className="register-grid">
            {/* Mockup */}
            <div style={styles.mediaWrap}>
              <img
                src="/bundle-mockup.webp"
                alt="Zero Delights Club — Product Mockup"
                style={styles.media}
                loading="lazy"
              />
              <div style={styles.mediaNote}>
                Image for illustration purposes only. This is a digital product.
              </div>
            </div>

            {/* Info */}
            <div style={styles.info}>
              <h2 style={styles.h2}>What you’ll receive</h2>
              <ul style={styles.list}>
                <li style={styles.li}>Recipe ebooks and digital materials</li>
                <li style={styles.li}>
                  Video lessons (access instructions included)
                </li>
                <li style={styles.li}>
                  Community access (as described on the checkout page)
                </li>
              </ul>

              <div style={styles.priceRow}>
                <div style={styles.priceLabel}>Price</div>
                <div style={styles.priceValue}>$17.00</div>
              </div>

              <a href={goTo} style={styles.button} aria-label="Proceed">
                Proceed
                <span style={styles.arrow}>→</span>
              </a>

              <div style={styles.supportLine}>
                Need help? Contact support:{" "}
                <a style={styles.link} href={`mailto:${SUPPORT_EMAIL}`}>
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section style={styles.guarantee}>
          {/* ✅ added className */}
          <div style={styles.guaranteeRow} className="register-guarantee-grid">
            <div style={styles.guaranteeBadgeWrap}>
              <img
                src="/guarantee-7-days.webp" // <-- troque depois (ex: /guarantee-365.png)
                alt="100% Satisfaction Guarantee"
                style={styles.guaranteeBadge}
                loading="lazy"
              />
            </div>

            <div style={styles.guaranteeText}>
              <h3 style={styles.guaranteeTitle}>
                You Are Backed By Our 100% Money Back Guarantee
              </h3>
              <p style={styles.guaranteeBody}>
                Your investment today is covered by a 365 day, 100% Money Back
                Guarantee. If you change your mind for any reason over the next
                three months, just email our team for a full refund without
                questions asked.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimers */}
        <section style={styles.disclaimer}>
          <h3 style={styles.h3}>Disclaimer</h3>
          <p style={styles.p}>
            The Zero Delights Club is intended for educational and informational
            purposes only and does not replace medical or nutritional advice,
            diagnosis, or treatment. Results may vary from person to person and
            are not guaranteed. The producer is not responsible for any misuse
            of the information provided.
          </p>

          <p style={styles.p}>
            Hotmart does not perform prior editorial review and does not
            guarantee results or content quality. By purchasing the product, the
            buyer acknowledges and agrees to these conditions.
          </p>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.footerTop}>
            <div>
              <div style={styles.footerBrand}>2B Digital LLC</div>
              <div style={styles.footerText}>
                30 N Gould St Ste R, Sheridan, WY 82801, USA
              </div>
            </div>

            <div style={styles.footerLinks}>
              <Link style={styles.footerLink} href="/privacy">
                Privacy Policy
              </Link>
              <Link style={styles.footerLink} href="/terms">
                Terms of Service
              </Link>
            </div>
          </div>

          <div style={styles.footerBottom}>
            © {new Date().getFullYear()} 2B Digital LLC. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}

const styles = {
  page: {
    background: "#ffffff",
    color: "#0b0b0c",
    minHeight: "100vh",
    padding: "48px 16px",
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
  },

  guarantee: {
    marginTop: 18,
    padding: 18,
    borderRadius: 18,
    border: "1px solid rgba(0,0,0,0.10)",
    background: "#fff",
  },
  guaranteeRow: {
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    gap: 16,
    alignItems: "center",
  },
  guaranteeBadgeWrap: {
    width: 120,
    height: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  guaranteeBadge: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  guaranteeText: {
    minWidth: 0,
  },
  guaranteeTitle: {
    margin: 0,
    fontSize: 16,
    fontWeight: 900,
    lineHeight: 1.25,
  },
  guaranteeBody: {
    marginTop: 8,
    marginBottom: 0,
    fontSize: 14,
    lineHeight: 1.6,
    color: "rgba(0,0,0,0.75)",
  },

  container: {
    maxWidth: 980,
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: 24,
  },
  badge: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(0,0,0,0.10)",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 0.2,
    background: "#fafafa",
  },
  title: {
    margin: "14px 0 8px",
    fontSize: 40,
    lineHeight: 1.05,
    letterSpacing: -0.6,
    fontWeight: 800,
  },
  subtitle: {
    margin: 0,
    color: "rgba(0,0,0,0.65)",
    fontSize: 16,
    lineHeight: 1.5,
  },
  card: {
    border: "1px solid rgba(0,0,0,0.10)",
    borderRadius: 18,
    padding: 18,
    background: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 18,
    alignItems: "center",
  },
  mediaWrap: {
    borderRadius: 16,
    overflow: "hidden",
    border: "1px solid rgba(0,0,0,0.08)",
    background: "#fafafa",
  },
  media: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  mediaNote: {
    padding: "10px 12px",
    fontSize: 12,
    color: "rgba(0,0,0,0.60)",
    borderTop: "1px solid rgba(0,0,0,0.06)",
    background: "#fff",
  },
  info: {
    padding: 8,
  },
  h2: {
    margin: "0 0 10px",
    fontSize: 18,
    fontWeight: 800,
    letterSpacing: -0.2,
  },
  list: {
    margin: "0 0 16px",
    paddingLeft: 18,
    color: "rgba(0,0,0,0.80)",
    lineHeight: 1.6,
  },
  li: {
    marginBottom: 6,
  },
  priceRow: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 12,
    padding: "12px 12px",
    borderRadius: 14,
    background: "#fafafa",
    border: "1px solid rgba(0,0,0,0.06)",
    marginBottom: 12,
  },
  priceLabel: {
    fontSize: 13,
    color: "rgba(0,0,0,0.65)",
    fontWeight: 700,
  },
  priceValue: {
    fontSize: 20,
    fontWeight: 900,
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    padding: "14px 14px",
    borderRadius: 14,
    background: "#111111",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 900,
    letterSpacing: 0.2,
  },
  arrow: {
    display: "inline-block",
    transform: "translateY(1px)",
  },
  supportLine: {
    marginTop: 12,
    fontSize: 13,
    color: "rgba(0,0,0,0.65)",
  },
  link: {
    color: "#0b57d0",
    textDecoration: "none",
    fontWeight: 700,
  },
  disclaimer: {
    marginTop: 18,
    padding: 18,
    borderRadius: 18,
    border: "1px solid rgba(0,0,0,0.10)",
    background: "#fff",
  },
  h3: {
    margin: "0 0 10px",
    fontSize: 16,
    fontWeight: 900,
  },
  p: {
    margin: "0 0 10px",
    color: "rgba(0,0,0,0.75)",
    lineHeight: 1.6,
    fontSize: 14,
  },
  footer: {
    marginTop: 20,
    paddingTop: 18,
    borderTop: "1px solid rgba(0,0,0,0.10)",
  },
  footerTop: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  footerBrand: {
    fontWeight: 900,
    letterSpacing: -0.2,
  },
  footerText: {
    marginTop: 6,
    color: "rgba(0,0,0,0.65)",
    fontSize: 13,
    lineHeight: 1.5,
  },
  footerLinks: {
    display: "flex",
    gap: 14,
    alignItems: "center",
  },
  footerLink: {
    color: "rgba(0,0,0,0.70)",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 13,
  },
  footerBottom: {
    marginTop: 14,
    color: "rgba(0,0,0,0.55)",
    fontSize: 12,
  },
};

// Mobile tweaks (sem CSS extra)
if (typeof window !== "undefined") {
  // nada aqui — server safe
}
