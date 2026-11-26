"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, Shirt, Waves } from "lucide-react";
import { useState } from "react";
import { productUrl } from "./data";

const gallery = [
  { src: "/sites/sollybloom/lineup.jpg", alt: "Les cinq coloris neutres des Chaussettes Cocooning" },
  { src: "/sites/sollybloom/legs-cream.jpg", alt: "Chaussettes Cocooning crème portées" },
  { src: "/sites/sollybloom/pack-flat.jpg", alt: "Cinq paires de Chaussettes Cocooning à plat" },
  { src: "/sites/sollybloom/legs-black.jpg", alt: "Chaussettes Cocooning noires portées" },
  { src: "/sites/sollybloom/cream.jpg", alt: "Chaussettes Cocooning crème" },
  { src: "/sites/sollybloom/taupe.jpg", alt: "Chaussettes Cocooning taupe" },
  { src: "/sites/sollybloom/black.jpg", alt: "Chaussettes Cocooning noires" },
];

const benefits = [
  { icon: Waves, text: "Bien plus chaudes qu’elles n’en ont l’air" },
  { icon: Shirt, text: "Tiennent toutes seules, sans jamais serrer" },
  { icon: Heart, text: "Si confortables qu’on oublie qu’on les porte" },
];

export function FeaturedProduct() {
  const [active, setActive] = useState(0);
  const go = (i: number) => setActive((i + gallery.length) % gallery.length);

  return (
    <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-4 py-[60px] md:grid-cols-[579px_1fr] md:gap-[55px] md:px-[141px] md:py-[105px]">
      <div>
        <div className="group relative aspect-square overflow-hidden bg-sb-ice">
          <Image
            src={gallery[active].src}
            alt={gallery[active].alt}
            fill
            sizes="(min-width: 768px) 579px, 100vw"
            className="object-cover"
          />
          <button
            type="button"
            onClick={() => go(active - 1)}
            className="absolute top-1/2 left-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-sb-navy shadow"
          >
            <ChevronLeft className="size-5" />
            <span className="sr-only">Image précédente</span>
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-sb-navy shadow"
          >
            <ChevronRight className="size-5" />
            <span className="sr-only">Image suivante</span>
          </button>
        </div>
        <div className="mt-3 flex gap-[11px] overflow-x-auto pb-1">
          {gallery.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Afficher l’image ${i + 1}`}
              aria-current={i === active}
              className={`relative size-[83px] shrink-0 overflow-hidden border-b-2 pb-1 ${i === active ? "border-sb-navy" : "border-transparent"}`}
            >
              <Image src={img.src} alt="" fill sizes="83px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="md:pt-1">
        <h2 className="font-heading text-[28px] leading-[1.2] font-bold text-sb-ink md:max-w-[460px] md:text-[33px]">
          Chaussettes Cocooning – Les chaussettes montantes les plus douillettes (5 paires)
        </h2>
        <ul className="mt-5 space-y-2">
          {benefits.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2.5 text-[17px] text-sb-ink">
              <Icon className="size-4 shrink-0 text-sb-sea" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
        <a
          href={productUrl("sweater-socks")}
          className="mt-6 flex h-[46px] w-full items-center justify-center bg-sb-navy text-[17px] tracking-wide text-white uppercase transition-colors hover:bg-sb-sea md:max-w-[524px]"
        >
          Voir l’offre
        </a>
      </div>
    </section>
  );
}
