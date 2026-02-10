"use client";

import { useCallback, useRef } from "react";
import Script from "next/script";

export default function RecipesProPage() {
  const hotmartMountedRef = useRef(false);

  const mountHotmart = useCallback(() => {
    // monta 1 vez só
    if (hotmartMountedRef.current) return;

    try {
      const el = document.getElementById("hotmart-sales-funnel");
      if (!el) return;

      // checkoutElements vem do script da Hotmart
      if (window.checkoutElements) {
        window.checkoutElements.init("salesFunnel").mount("#hotmart-sales-funnel");
        hotmartMountedRef.current = true;
      }
    } catch (e) {
      // não explode o site por causa do widget
      // (se a Hotmart bloquear, deixa quieto)
    }
  }, []);

  return (
    <main className="page">
      {/* VTurb perf snippet */}
      <Script id="vturb-perf" strategy="beforeInteractive">
        {`!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`}
      </Script>

      {/* VTurb player script (melhor assim do que createElement manual) */}
      <Script
        src="https://scripts.converteai.net/b6983c31-9e45-4de6-9678-d272c2ce100c/players/698a5c6baa8949c7cb3311b6/v4/player.js"
        strategy="afterInteractive"
      />

      {/* Hotmart funnel script + mount quando carregar */}
      <Script
        src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
        strategy="afterInteractive"
        onLoad={mountHotmart}
      />

      <section className="topbar">
        <div className="topbar-inner">
          <h1>Do not close this page</h1>
          <p>
            <b>Important:</b> Do not click “Back” or close this page. Watch the video below to confirm your purchase.
          </p>
        </div>
      </section>

      <section className="content">
        <div className="wrap">
          {/* Imagem / aviso */}
          <div className="card">
            <div className="imgWrap">
              <img className="img" src="/WAIT!.webp" alt="Almost gone" loading="lazy" />
            </div>
          </div>

          {/* VTurb */}
          <div className="card">
            <div className="videoTitle">Click to listen</div>
            <div className="videoWrap">
              <vturb-smartplayer
                id="vid-698a5c6baa8949c7cb3311b6"
                style={{ display: "block", margin: "0 auto", width: "100%" }}
              ></vturb-smartplayer>
            </div>
          </div>

          {/* Hotmart funnel */}
          <div className="card">
            <div id="hotmart-sales-funnel" className="funnel" />
          </div>
        </div>
      </section>

      <style jsx>{`
        .page {
          background: #ffffff;
          color: #0b0b0c;
          min-height: 100vh;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
            Apple Color Emoji, Segoe UI Emoji;
        }

        .topbar {
          background: #4b76f2;
          color: #fff;
          padding: 22px 16px;
          text-align: center;
        }
        .topbar-inner {
          max-width: 980px;
          margin: 0 auto;
        }
        .topbar h1 {
          margin: 0 0 6px;
          font-size: 26px;
          font-weight: 900;
          letter-spacing: -0.2px;
        }
        .topbar p {
          margin: 0;
          font-size: 16px;
          line-height: 1.35;
          opacity: 0.95;
        }

        .content {
          padding: 18px 16px 40px;
        }
        .wrap {
          max-width: 980px;
          margin: 0 auto;
          display: grid;
          gap: 18px;
        }

        .card {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 16px;
          background: #fff;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        }

        .imgWrap {
          width: 100%;
          background: #f6f6f6;
        }
        .img {
          width: 100%;
          height: auto;
          display: block;
        }

        .videoTitle,
        .funnelTitle {
          padding: 14px 14px 0;
          font-size: 14px;
          font-weight: 800;
          color: rgba(0, 0, 0, 0.8);
        }

        .videoWrap {
          padding: 14px;
        }

        .funnel {
          padding: 14px;
        }

        @media (min-width: 900px) {
          .topbar {
            padding: 28px 16px;
          }
          .topbar h1 {
            font-size: 30px;
          }
        }
      `}</style>
    </main>
  );
}
