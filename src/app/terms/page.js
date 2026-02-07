import Link from "next/link";

export const metadata = {
  title: "Terms of Use | Zero Delights Club",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      {/* BACK LINK (sem onClick, funciona em Server Component) */}
      <Link href="/" className="legal-back" aria-label="Go back to home">
        <span className="legal-back-icon">←</span>
        <span className="legal-back-text">Back</span>
      </Link>

      <div className="legal-wrap">
        <h1 className="legal-title">Terms of Use</h1>
        <p className="legal-updated">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="legal-section">
          <h2>1. Overview</h2>
          <p>
            By accessing this website and/or purchasing any digital content, you
            agree to these Terms of Use. If you do not agree, do not use this
            website.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Digital Product & Access</h2>
          <p>
            The content offered is digital and may include recipe ebooks, bonus
            materials, and video lessons. Access details are provided after
            purchase confirmation.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Copyright & License</h2>
          <p>
            All materials are protected by copyright. You receive a personal,
            non-transferable license to use the content for personal purposes
            only.
          </p>
          <p>
            It is prohibited to reproduce, publish, distribute, resell, share,
            or make the content publicly available (including websites, social
            networks, forums, or printed copies) without prior written
            permission.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. No Medical Advice</h2>
          <p>
            The content is for informational and educational purposes only and
            does not replace medical advice. Always consult your physician or
            nutritionist before making dietary changes.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Refund Policy</h2>
          <p>
            If a refund policy is offered on the checkout page, it applies as
            described there. If you have any issues accessing the product,
            contact{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=suportdelightsclub@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6c2f9b",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              suportdelightsclub@gmail.com
            </a>{" "}
            for help.
          </p>
        </section>


        <section className="legal-section">
          <h2>6. Contact</h2>
          <p>
            For questions about these terms, contact us using the support.
          </p>
        </section>
      </div>
    </main>
  );
}
