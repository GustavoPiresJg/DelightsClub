"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function Home() {
  // Fade-in reveal
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero reveal">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              LEARN EASY AND DELICIOUS RECIPES SO THAT YOU NO LONGER HAVE TO
              DEPRIVE YOURSELF OF ANYTHING, AND GO BACK TO EATING THE MOST
              VARIED AND DELICIOUS TYPES OF FOOD!
            </h1>

            <div className="hero-image reveal reveal-delay-1">
              <img src="/recipe-card.png" alt="Recipes preview" />
            </div>

            <button className="cta reveal reveal-delay-2">
              YEAH! I WANT THE ZERO DELIGHTS CLUB{" "}
              <span className="cta-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits reveal">
        <h2 className="reveal">SEE THE BENEFITS OF USING OUR RECIPES</h2>

        <div className="benefits-grid">
          <div className="benefit-card reveal">
            <span>✔</span>
            <h3>DON'T WORRY ABOUT YOUR GLUCOSE</h3>
            <p>
              All the recipes were created to provide you with a pleasant and
              flavorful diet, while helping you control your glycemic indexes.
            </p>
          </div>

          <div className="benefit-card reveal">
            <span>✔</span>
            <h3>EAT WHAT YOU LIKE</h3>
            <p>
              You will have hundreds of recipe options so you never get tired of
              eating the same thing. The material was made for those who want to
              have a healthy life without restrictions.
            </p>
          </div>

          <div className="benefit-card reveal">
            <span>✔</span>
            <h3>HAVE A QUALITY SLEEP</h3>
            <p>
              Poor sleep quality is a consequence of diabetes. The recipes help
              in the neutralization of diabetic neuropathy, making sleep calm
              and lasting.
            </p>
          </div>

          <div className="benefit-card reveal">
            <span>✔</span>
            <h3>REDUCED STRESS LEVELS</h3>
            <p>
              By controlling blood sugar and keeping the body in balance, the
              mind also benefits a lot, keeping hormone release and stress
              levels very low.
            </p>
          </div>
        </div>
      </section>

      {/* RECIPES */}
      <section className="recipes reveal">
        <h2 className="reveal">
          THERE ARE MORE THAN 500 RECIPES FOR ALL THE MEALS OF YOUR DAY AND THAT
          WILL PROVIDE YOU A MUCH TASTIER AND HEALTHIER LIFE!
        </h2>

        <div className="recipes-grid">
          <div className="recipe-card reveal">
            <img src="/r1.jpg" alt="Breakfasts and snacks" />
            <h3>BREAKFASTS AND SNACKS</h3>
            <p>Quick and practical recipes.</p>
          </div>

          <div className="recipe-card reveal">
            <img src="/r2.jpg" alt="Lunch and dinner" />
            <h3>LUNCH AND DINNER</h3>
            <p>Complete meals with simple ingredients.</p>
          </div>

          <div className="recipe-card reveal">
            <img src="/r3.jpg" alt="Sweets and desserts" />
            <h3>SWEETS AND DESSERTS</h3>
            <p>Gluten-free and sugar-free desserts.</p>
          </div>

          <div className="recipe-card reveal">
            <img src="/r4.jpg" alt="Zero soups and creams" />
            <h3>ZERO SOUPS AND CREAMS</h3>
            <p>Nutritious soups and broths.</p>
          </div>

          <div className="recipe-card reveal">
            <img src="/r5.jpg" alt="Zero sauces and pates" />
            <h3>ZERO SAUCES AND PATES</h3>
            <p>Delicious sauces and pates.</p>
          </div>

          <div className="recipe-card reveal">
            <img src="/r6.jpg" alt="Zero homemade flour" />
            <h3>ZERO HOMEMADE FLOUR</h3>
            <p>Low glycemic flours.</p>
          </div>
        </div>
      </section>

      {/* STORY + CAROUSEL */}
      <section className="story reveal">
        <div className="story-wrap">
          <h2 className="story-title">
            DO YOU KNOW THOSE SYMPTOMS OF DIABETES THAT INTERFERE SO MUCH IN YOUR
            DAILY LIFE? FORGET THEM! ALSO FORGET ABOUT A BLAND AND RESTRICTED
            DIET THAT TAKES AWAY ALL THE PLEASURE OF EATING!
          </h2>

          <div className="story-text">
            <p>
              We know how difficult it is to have diabetes, gluten and lactose
              intolerance, high cholesterol and live with restrictions every
              day. You might think it’s a life sentence where you’re mired in
              painful injections and a routine of having to deny yourself the
              pleasures of food forever, but we’re here to prove you wrong! Now
              you can eat the most different and tasty types of food and still
              maintain balance so that high glycemic indexes are no longer a
              problem for you.
            </p>

            <p>
              Even if you feel lost, anxious and don’t understand anything about
              nutrition and healthy eating! Eat right, taste food, and still be
              in control of your health naturally!
            </p>

            <p>
              You’ll have over 500 tried and tested recipes, all gluten free and
              sugar free for every meal of your day!
            </p>

            <p>
              Developed to provide a balanced, tasty and practical diet, with
              the aim of maintaining the health and hormonal balance of your
              body.
            </p>

            <p>
              We are talking about varied, tasty and rich dishes! You will be
              delighted to eat again!
            </p>
          </div>

          <Carousel />
        </div>
      </section>


      {/* FEATURES SIMPLE */}
<section className="simple-features">
  <div className="simple-features-wrap">
    <h2 className="simple-features-title">
      THE MOST DELICIOUS MEALS IN VERSIONS
    </h2>

    <ul className="simple-features-list">
      <li>LOW IN CALORIES</li>
      <li>ZERO SUGAR</li>
      <li>ZERO GLUTEN</li>
      <li>DAIRY FREE</li>
      <li>LOW CARB</li>
    </ul>
  </div>
</section>




{/* OFFER / PRICE */}
<section className="offer">
  <div className="offer-wrap">
    <p className="offer-top">Do not lose this chance!</p>

    <h2 className="offer-title">Limited time book promotion</h2>
    <h3 className="offer-subtitle">More than 80% discount!</h3>

    <div className="offer-book">
      <img src="/recipe.jpg" alt="Zero Delights Book" />
    </div>

    <p className="offer-price">
      From <span className="offer-old">$67.90</span> for only{" "}
      <span className="offer-new">$17.00</span>
    </p>

    <p className="offer-note">PRICE IN DOLAR</p>
    <p className="offer-note2">PAY IN YOUR LOCAL CURRENCY BY CLICKING BELOW</p>

    <div className="offer-down">⬇️</div>

    <button className="offer-cta">
      YEAH! I WANT THE RECIPES
    </button>

    <div className="offer-stock">
      <div className="offer-stock-top">
        <span>LAST 8 UNITS AVAILABLE</span>
        <span className="offer-stock-right">85%</span>
      </div>

      <div className="offer-bar">
        <div className="offer-bar-fill" style={{ width: "92%" }} />
      </div>
    </div>
  </div>
</section>

{/* TESTIMONIALS */}
<section className="testimonials">
  <div className="testimonials-wrap">
    <h2 className="testimonials-title">WHO BOUGHT, APPROVED!</h2>

    <p className="testimonials-sub">
      Our book is a hit with professionals and ordinary people alike. See what
      they’re saying:
    </p>

    <div className="testimonials-grid">
      {/* Card 1 */}
      <article className="t-card">
        <div className="t-head">
          <img className="t-avatar" src="/ml1.jpg" alt="Stefanny" />
          <div className="t-meta">
            <div className="t-name">Stefanny</div>
            <div className="t-stars" aria-label="5 stars">
              ★★★★★
            </div>
          </div>
        </div>

        <p className="t-text">
          I love the material, very practical and beautiful. I liked it so much
          that I recommended it to friends. Thank you for the material and your
          attention. Approved!
        </p>
      </article>

      {/* Card 2 */}
      <article className="t-card">
        <div className="t-head">
          <img className="t-avatar" src="/ml2.jpg" alt="Sophia" />
          <div className="t-meta">
            <div className="t-name">Sophia</div>
            <div className="t-stars" aria-label="5 stars">
              ★★★★★
            </div>
          </div>
        </div>

        <p className="t-text">
          I loved the recipes, they are simple and easy to prepare. I already
          had the ingredients at home. Very convenient. I’m diabetic and these
          recipes help me a lot to balance my blood sugar.
        </p>
      </article>

      {/* Card 3 */}
      <article className="t-card">
        <div className="t-head">
          <img className="t-avatar" src="/ml3.jpg" alt="Albert" />
          <div className="t-meta">
            <div className="t-name">Albert</div>
            <div className="t-stars" aria-label="5 stars">
              ★★★★★
            </div>
          </div>
        </div>

        <p className="t-text">
          My wife saw the ad and we decided to buy it. Even I, who doesn’t
          normally cook, made one and it went well. Payment was instant and
          everything worked perfectly. I recommend it!
        </p>
      </article>
    </div>
  </div>
</section>

{/* STATS / PROOF */}
<section className="stats">
  <div className="stats-wrap">
    <h2 className="stats-title">
      DID YOU KNOW THAT IT IS PROVEN BY DOCTORS AND NUTRITIONISTS THAT FOOD IS
      THE KEY TO TOTAL CONTROL OF DIABETES?
    </h2>

    <p className="stats-sub">
      Every year, the number of people who discover this secret and change their
      lives grows. See what the latest data suggests:
    </p>

    <div className="stats-grid">
      <StatCard
        id="s1"
        prefix="+"
        value={7000000}
        suffix=""
        label="More than 7 million people around the world have lost weight and controlled their diabetes."
      />

      <StatCard
        id="s2"
        prefix="+"
        value={1000}
        suffix=""
        label="A habit change indicated for those who want to control diabetes naturally and without medication."
      />

      <StatCard
        id="s3"
        prefix="+"
        value={6257314}
        suffix=""
        label="Millions of people around the world reported dozens of benefits just by changing their diet."
      />
    </div>
  </div>
</section>



{/* GUARANTEE */}
<section className="guarantee">
  <div className="guarantee-wrap">
    <div className="guarantee-badge">
      <img
        src="/guarantee-7-days.png"
        alt="7 Day Money Back Guarantee"
        loading="lazy"
      />
    </div>

    <div className="guarantee-content">
      <h2 className="guarantee-title">UNCONDITIONAL GUARANTEE</h2>

      <p className="guarantee-text">
        If you buy our recipes and for some reason you don’t like it, just ask
        us for your money back within 7 days of purchase and we’ll give you a
        100% refund, without any red tape!
      </p>
    </div>
  </div>
</section>


  
    </>
  );
}

function Carousel() {
  const images = useMemo(
    () => ["/c1.jpg", "/c2.jpg", "/c3.jpg", "/c4.jpg", "/c5.jpg"],
    []
  );

  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(4);

   useEffect(() => {
    const update = () => setPerView(window.innerWidth <= 900 ? 1 : 4);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, images.length - perView);
  const clamp = (n) => Math.max(0, Math.min(maxIndex, n));
  const goTo = (n) => setIndex(clamp(n));
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  // swipe
  const startX = useRef(0);
  const deltaX = useRef(0);
  const dragging = useRef(false);

  const onTouchStart = (e) => {
    dragging.current = true;
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
  };

  const onTouchMove = (e) => {
    if (!dragging.current) return;
    deltaX.current = e.touches[0].clientX - startX.current;
  };

  const onTouchEnd = () => {
    if (!dragging.current) return;
    dragging.current = false;

    const threshold = 40;
    if (deltaX.current > threshold) prev();
    if (deltaX.current < -threshold) next();
  };

  const translatePct = (index * 100) / perView;

  return (
    <div className="carousel">
      <div className="carousel-shell">
        <button
          className="carousel-btn left"
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous"
        >
          ‹
        </button>

        <div
          className="carousel-viewport"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${translatePct}%)` }}
          >
            {images.map((src, i) => (
              <div className="carousel-item" key={`${src}-${i}`}>
                <img src={src} alt={`Recipe ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-btn right"
          onClick={next}
          disabled={index === maxIndex}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      <div className="carousel-dots" aria-label="Carousel pagination">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function StatCard({ id, prefix = "", value = 0, suffix = "", label = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;

          const duration = 700; // rápido e bonito
          const start = performance.now();
          const from = 0;

          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            // easing suave mas rápido
            const eased = 1 - Math.pow(1 - t, 3);
            const current = Math.round(from + (value - from) * eased);
            setDisplay(current);

            if (t < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const format = (n) => n.toLocaleString("en-US");

  return (
    <div className="stat-card" ref={ref} id={id}>
      <div className="stat-number">
        <span className="stat-prefix">{prefix}</span>
        {format(display)}
        <span className="stat-suffix">{suffix}</span>
      </div>

      <p className="stat-text">{label}</p>
    </div>
  );
}
