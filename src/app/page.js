export default function Home() {
  return (
    <>
    {/* HERO */}
<section className="hero">
  <div className="hero-content">
    <div className="hero-text">
      <h1>
        LEARN EASY AND DELICIOUS RECIPES SO THAT YOU NO LONGER HAVE TO DEPRIVE
        YOURSELF OF ANYTHING, AND GO BACK TO EATING THE MOST VARIED AND
        DELICIOUS TYPES OF FOOD!
      </h1>

      <button className="cta">
        YEAH! I WANT THE ZERO DELIGHTS CLUB
        <span className="cta-arrow">→</span>
      </button>
    </div>

    {/* essa imagem pode ser trocada depois */}
    <div className="hero-image">
      <img src="/recipe-card.png" alt="Recipes preview" />
    </div>
  </div>
</section>


      {/* BENEFITS */}
      <section className="benefits">
        <h2>SEE THE BENEFITS OF USING OUR RECIPES</h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <span>✔</span>
            <h3>DON'T WORRY ABOUT YOUR GLUCOSE</h3>
            <p>
              All the recipes were created to provide you with a pleasant and
              flavorful diet, while helping you control your glycemic indexes.
            </p>
          </div>

          <div className="benefit-card">
            <span>✔</span>
            <h3>EAT WHAT YOU LIKE</h3>
            <p>
              You will have hundreds of recipe options so you never get tired
              of eating the same thing. The material was made for those who
              want to have a healthy life without restrictions.
            </p>
          </div>

          <div className="benefit-card">
            <span>✔</span>
            <h3>HAVE A QUALITY SLEEP</h3>
            <p>
              Poor sleep quality is a consequence of diabetes. The recipes
              help in the neutralization of diabetic neuropathy, making sleep
              calm and lasting.
            </p>
          </div>

          <div className="benefit-card">
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
      <section className="recipes">
        <h2>
          THERE ARE MORE THAN 500 RECIPES FOR ALL THE MEALS OF YOUR DAY AND THAT
          WILL PROVIDE YOU A MUCH TASTIER AND HEALTHIER LIFE!
        </h2>

        <div className="recipes-grid">
          <div className="recipe-card">
            <img src="/r1.jpg" />
            <h3>BREAKFASTS AND SNACKS</h3>
            <p>Quick and practical recipes.</p>
          </div>

          <div className="recipe-card">
            <img src="/r2.jpg" />
            <h3>LUNCH AND DINNER</h3>
            <p>Complete meals with simple ingredients.</p>
          </div>

          <div className="recipe-card">
            <img src="/r3.jpg" />
            <h3>SWEETS AND DESSERTS</h3>
            <p>Gluten-free and sugar-free desserts.</p>
          </div>

          <div className="recipe-card">
            <img src="/r4.jpg" />
            <h3>ZERO SOUPS AND CREAMS</h3>
            <p>Nutritious soups and broths.</p>
          </div>

          <div className="recipe-card">
            <img src="/r5.jpg" />
            <h3>ZERO SAUCES AND PATES</h3>
            <p>Delicious sauces and pates.</p>
          </div>

          <div className="recipe-card">
            <img src="/r6.jpg" />
            <h3>ZERO HOMEMADE FLOUR</h3>
            <p>Low glycemic flours.</p>
          </div>
        </div>
      </section>
    </>
  );
}
