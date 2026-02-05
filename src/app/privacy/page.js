import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Zero Delights Club",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      {/* BACK LINK */}
      <Link href="/" className="legal-back" aria-label="Go back to home">
        <span className="legal-back-icon">←</span>
        <span className="legal-back-text">Back</span>
      </Link>

      <div className="legal-wrap">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-updated">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="legal-section">
          <h2>1. What we collect</h2>
          <p>
            We may collect basic information such as your name, email address,
            and purchase or transaction details to deliver the product and
            provide support.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. How we use your data</h2>
          <p>
            We use your data to provide access to the product, send purchase
            confirmations, deliver updates, and respond to customer support
            requests.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Cookies</h2>
          <p>
            This website may use cookies and similar technologies to improve site
            performance and measure traffic. You can control cookies through
            your browser settings.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Sharing</h2>
          <p>
            We do not sell your personal data. We may share limited information
            with payment processors and service providers only as needed to
            deliver the product and operate the site.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Data security</h2>
          <p>
            We take reasonable measures to protect your information. However, no
            method of transmission or storage is 100% secure.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Your rights</h2>
          <p>
            You may request access, correction, or deletion of your personal data
            where applicable. Contact us through the support information
            provided on the checkout or purchase confirmation.
          </p>
        </section>
      </div>
    </main>
  );
}
