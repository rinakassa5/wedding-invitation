import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#44121B]">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={heroImage}
          alt="Lieu de mariage"
          className="h-full w-full object-cover object-center"
        />

        {/* Dégradé subtil avec la palette */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(68, 18, 27, 0.36) 0%,
                rgba(90, 25, 36, 0.18) 42%,
                rgba(68, 18, 27, 0.46) 100%
              )
            `,
          }}
        />

        {/* Lumière champagne très discrète */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(182,178,124,0.08), transparent 58%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div
        className={`relative z-10 px-5 text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Bloc texte léger pour lisibilité */}
        <div className="rounded-[28px] bg-[#44121B]/18 px-6 py-8 shadow-[0_18px_50px_rgba(68,18,27,0.25)] backdrop-blur-[2px] md:px-12 md:py-10">
          {/* Decorative flourish */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#B6B27C] to-transparent md:w-20" />

            <span
              className="text-2xl text-[#B6B27C]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                textShadow: "0 2px 10px rgba(68,18,27,0.45)",
              }}
            >
              ✦
            </span>

            <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#B6B27C] to-transparent md:w-20" />
          </div>

          {/* Intro */}
          <p
            className="mb-5 text-xs uppercase tracking-[0.35em] text-[#B6B27C] md:text-sm"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              textShadow: "0 2px 10px rgba(68,18,27,0.55)",
            }}
          >
            Nous nous marions
          </p>

          {/* Names */}
          <h1
            className="mb-5 text-6xl leading-none text-[#F4F0E5] md:text-8xl lg:text-9xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              letterSpacing: "-0.035em",
              textShadow: `
                0 4px 18px rgba(68,18,27,0.75),
                0 0 28px rgba(182,178,124,0.14)
              `,
            }}
          >
            Rina & Islem
          </h1>

          {/* Ornament */}
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#B5B063] to-transparent md:w-24" />

            <span
              className="text-3xl text-[#B5B063]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                textShadow: "0 2px 10px rgba(68,18,27,0.5)",
              }}
            >
              ♥
            </span>

            <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#B5B063] to-transparent md:w-24" />
          </div>

          {/* Date */}
          <p
            className="mb-3 text-xl italic text-[#F4F0E5] md:text-2xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              textShadow: "0 3px 14px rgba(68,18,27,0.7)",
            }}
          >
            Samedi 3 Octobre 2026
          </p>

          {/* Location */}
          <p
            className="text-sm uppercase tracking-[0.18em] text-[#B6B27C]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              textShadow: "0 2px 10px rgba(68,18,27,0.55)",
            }}
          >
            Choisy-Le-Roi, Paris, France
          </p>

          {/* Bottom flourish */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#B6B27C] to-transparent md:w-20" />

            <span
              className="text-2xl text-[#B6B27C]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                textShadow: "0 2px 10px rgba(68,18,27,0.45)",
              }}
            >
              ✦
            </span>

            <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#B6B27C] to-transparent md:w-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;