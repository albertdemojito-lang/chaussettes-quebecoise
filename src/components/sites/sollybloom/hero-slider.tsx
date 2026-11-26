"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { productUrl } from "./data";

const slides = [
  {
    eyebrow: "Nouveaux coloris",
    title: "Pack Hiver",
    subtitle: "5 achetées = 5 offertes",
    cta: "Découvrir",
    href: productUrl("sweater-socks-winter-pack-5-pairs"),
    image: "/sites/sollybloom/winter.jpg",
    alt: "Cinq paires de chaussettes cocooning aux couleurs d’hiver",
  },
  {
    eyebrow: "Black Friday",
    title: "Chaussettes Cocooning",
    subtitle: "Les plus douillettes de la saison",
    cta: "J’en profite",
    href: productUrl("sweater-socks"),
    image: "/sites/sollybloom/lineup.jpg",
    alt: "Cinq paires de chaussettes cocooning aux tons neutres",
  },
  {
    eyebrow: "Fêtes de fin d’année",
    title: "Chaussettes de Noël",
    subtitle: "À offrir… et à garder",
    cta: "Voir les modèles",
    href: productUrl("christmas-socks"),
    image: "/sites/sollybloom/christmas-gift.jpg",
    alt: "Coffret cadeau de chaussettes de Noël brodées",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      aria-roledescription="carrousel"
      aria-label="Offres du moment"
      className="relative overflow-hidden bg-sb-ice"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
    >
      <div
        className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            className="grid w-full shrink-0 grid-cols-1 md:h-[480px] md:grid-cols-2"
            role="group"
            aria-roledescription="diapositive"
            aria-label={`${i + 1} sur ${slides.length}`}
            aria-hidden={i !== index}
            inert={i !== index}
          >
            <div className="relative aspect-square md:aspect-auto md:h-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-sb-ice to-[#d5e3f1] px-6 py-10 text-center md:items-end md:px-[80px] md:text-right">
              <p className="font-heading text-[14px] font-semibold tracking-[0.2em] text-sb-sea uppercase md:text-[17px]">
                {slide.eyebrow}
              </p>
              <h2 className="mt-2 font-heading text-[44px] leading-[0.95] font-extrabold text-sb-navy md:text-[86px]">
                {slide.title}
              </h2>
              <p className="mt-3 font-heading text-[20px] font-bold text-sb-sea uppercase md:text-[30px]">
                {slide.subtitle}
              </p>
              <a
                href={slide.href}
                className="mt-6 inline-flex h-[46px] items-center rounded-full bg-sb-navy px-12 text-[15px] font-bold tracking-wide text-white uppercase transition-colors hover:bg-sb-sea"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1 md:left-1/4">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => go(i)}
            aria-label={`Voir la diapositive ${i + 1}`}
            aria-current={i === index}
            className="flex size-6 items-center justify-center"
          >
            <span
              className={`size-[9px] rounded-full border border-sb-navy transition-colors ${i === index ? "bg-sb-navy" : "bg-white"}`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
