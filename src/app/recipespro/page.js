"use client";

import { useCallback, useRef } from "react";
import Script from "next/script";

export default function RecipesProPage() {
    const hotmartMountedRef = useRef(false);

    const mountHotmart = useCallback(() => {
        if (hotmartMountedRef.current) return;

        try {
            const el = document.getElementById("hotmart-sales-funnel");
            if (!el) return;

            if (window.checkoutElements) {
                window.checkoutElements.init("salesFunnel").mount("#hotmart-sales-funnel");
                hotmartMountedRef.current = true;
            }
        } catch (e) { }
    }, []);

    return (
        <main className="page">
            <Script id="vturb-perf" strategy="beforeInteractive">
                {`!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`}
            </Script>

            <Script
                src="https://scripts.converteai.net/b6983c31-9e45-4de6-9678-d272c2ce100c/players/698a5c6baa8949c7cb3311b6/v4/player.js"
                strategy="afterInteractive"
            />

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
                {/* IMAGEM */}
                <div className="block">
                    <div className="imgWrap">
                        <img className="img" src="/WAIT!.webp" alt="Almost gone" loading="lazy" />
                    </div>
                </div>

                {/* VTURB */}
                <div className="block">
                    <div className="blockTitle">Click to listen</div>
                    <div className="videoWrap">
                        <vturb-smartplayer
                            id="vid-698a5c6baa8949c7cb3311b6"
                            style={{ display: "block", margin: "0 auto", width: "100%" }}
                        ></vturb-smartplayer>
                    </div>
                </div>

                {/* HOTMART */}
                <div className="wrap">
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
@media (max-width: 768px) {
  .imgWrap img {
    width: 100%;
    max-width: none;
    transform: scale(1.25);
    padding-top: 24px;
  }
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

        /* ===== PC: tudo no quadrado central ===== */
        .block {
          max-width: 980px;
          margin: 0 auto 18px;
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

        .blockTitle {
          padding: 14px 14px 0;
          font-size: 14px;
          font-weight: 800;
          color: rgba(0, 0, 0, 0.8);
        }

        .videoWrap {
          width: 100%
        }
          

        .videoWrap {
  width: 100%;
}

@media (max-width: 768px) {
  .videoWrap {
    max-width: calc(100vw - 20px); /* cria espaço lateral real */
    margin: 0 auto;
  }
}

        vturb-smartplayer {
          width: 100% !important;
          display: block !important;
        }

        /* HOTMART central */
        .wrap {
          max-width: 980px;
          margin: 0 auto;
        }
        .card {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 16px;
          background: #fff;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        }
        .funnel {
          padding: 14px;
        }

        /* ===== MOBILE: imagem + vídeo full width (ponta a ponta) ===== */
        @media (max-width: 768px) {
          .content {
            padding: 0 0 40px; /* sem borda lateral */
          }

          .block {
            max-width: none;
            margin: 0 0 18px;
            border-radius: 0; /* fica “colado” */
            border-left: 0;
            border-right: 0;
          }

          .videoWrap {
            padding: 0; /* vídeo full */
          }

          .blockTitle {
            max-width: 980px;
            margin: 0 auto;
            padding: 14px 16px 10px;
          }
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