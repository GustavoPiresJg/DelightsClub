// src/app/membership/page.js

export const metadata = {
  title: "Membership — Purchase Approved",
};

export default function MembershipPage() {
  return (
    <main className="mb-wrap">
      <div className="mb-card">
        <div className="mb-hero">
          <img
            className="mb-heroImg"
            src="/APPROVED.webp" 
            alt="Purchase approved successfully"
            loading="lazy"
          />
        </div>

    
        <h1 className="mb-title">🎉 CONGRATULATIONS ON YOUR PURCHASE!</h1>

        <p className="mb-text">Your purchase has been successfully approved!</p>

        <p className="mb-text">
          You will now receive an email with the subject <b>“Purchase Approved”</b>{" "}
          in your main inbox, spam or promotions folder and follow the
          instructions on the button.
        </p>
      </div>
    </main>
  );
}
