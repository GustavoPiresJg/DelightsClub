"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target); // anima só 1 vez (mais leve)
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
              YEAH! I WANT THE ZERO DELIGHTS CLUB <span className="cta-arrow">→</span>
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
              You will have hundreds of recipe options so you never get tired
              of eating the same thing. The material was made for those who
              want to have a healthy life without restrictions.
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
    </>
  );
}
