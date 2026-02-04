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

    {/* WHATSAPP COMMUNITY (ADMIN-ONLY) */}
<section className="community reveal">
  <div className="community-wrap">
    <div className="community-left">
      <h2 className="community-title">
        YOUR VIP WHATSAPP COMMUNITY <br />
        (DAILY RECIPES EVERY DAY)
      </h2>

      <p className="community-sub">
        Join our private, closed WhatsApp <b>community channel</b> and receive a fresh
        recipe daily so you stay consistent without overthinking what to eat.
      </p>

      <ul className="community-list">
        <li>✅ 1 recipe per day (simple daily routine)</li>
        <li>✅ quick & practical recipes</li>
        <li>✅ zero sugar, no guilt</li>
        <li>✅ motivation and support to keep going</li>
      </ul>

      <button className="cta community-cta">
        YES! I WANT DAILY RECIPES <span className="cta-arrow">→</span>
      </button>

      <p className="community-note">
        *You’ll receive access details right after purchase.
      </p>
    </div>

    <div className="community-right">
      <div className="wa-mock">
        <div className="wa-top">
          <div className="wa-avatar" />
          <div className="wa-top-text">
            <div className="wa-name">Zero Delights Club</div>
            <div className="wa-status">Community Channel • Daily Recipe</div>
          </div>
        </div>

        <div className="wa-chat">
          <div className="wa-bubble wa-bubble-left">
            Today’s recipe is live ✅
            <span className="wa-time">09:02</span>
          </div>

          <div className="wa-bubble wa-bubble-left">
            🍳 “3-Minute Zero Sugar Pancakes”
            <span className="wa-time">09:03</span>
          </div>

          {/* PHOTO MESSAGE (placeholder) */}
          <div className="wa-bubble wa-bubble-left wa-bubble-photo">
            <img
              className="wa-photo"
              src="/recipe-photo.jpg"
              alt="Pancakes recipe"
            />
            <div className="wa-photoText">
              <div className="wa-photoTitle">Zero Sugar Pancakes</div>
              <div className="wa-photoLine">
                Ingredients: eggs, almond flour, cinnamon...
              </div>
            </div>
            <span className="wa-time">09:04</span>
          </div>

          <div className="wa-bubble wa-bubble-left">
            Tomorrow: a new dessert recipe 😍
            <span className="wa-time">09:07</span>
          </div>
        </div>

    
      </div>
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
    <div className="carousel reveal">
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
