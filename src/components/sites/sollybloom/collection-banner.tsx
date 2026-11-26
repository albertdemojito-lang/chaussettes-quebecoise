import { Gift } from "lucide-react";

export function CollectionBanner() {
  return (
    <section
      aria-label="Offre Black Friday"
      className="relative flex h-[162px] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,#1f5c99_0%,#0b2545_55%,#071a33_100%)] px-4 text-center md:h-[245px]"
    >
      <Gift
        className="absolute top-1/2 left-[6%] hidden size-[120px] -translate-y-1/2 -rotate-12 text-sb-gold/35 md:block"
        strokeWidth={1}
        aria-hidden="true"
      />
      <Gift
        className="absolute top-1/2 right-[6%] hidden size-[120px] -translate-y-1/2 rotate-12 text-sb-gold/35 md:block"
        strokeWidth={1}
        aria-hidden="true"
      />
      <div>
        <p className="font-heading text-[12px] font-semibold tracking-[0.25em] text-sb-gold uppercase md:text-[17px]">
          Chaussettes Cocooning
        </p>
        <p className="font-heading text-[40px] leading-[1.05] font-extrabold text-white md:text-[68px]">Black Friday</p>
        <p className="font-heading text-[22px] leading-tight font-extrabold text-sb-gold uppercase md:text-[34px]">
          5 achetées = 5 offertes
        </p>
        <p className="mt-0.5 text-[13px] font-bold text-white md:text-[18px]">Sur chaque pack, dans chaque coloris</p>
      </div>
    </section>
  );
}
