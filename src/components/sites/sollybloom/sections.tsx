import Image from "next/image";
import { STORE_URL, bestSellers, formatPrice, productUrl, trustItems, type Product } from "./data";

export function TrustMarquee() {
  const row = [...trustItems, ...trustItems];
  return (
    <section aria-label="Nos engagements" className="overflow-hidden bg-sb-navy py-3 text-white">
      <ul className="sb-marquee flex w-max gap-[88px] pl-[88px] text-[16px] md:text-[19px]">
        {[...row, ...row].map((item, i) => (
          <li key={i} aria-hidden={i >= trustItems.length} className="whitespace-nowrap">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <li className="group relative flex flex-col text-center">
      <div className="relative aspect-square overflow-hidden bg-sb-ice">
        {product.badge && (
          <span className="absolute top-[10px] left-[6px] z-10 bg-sb-navy px-[11px] py-[5px] text-[14px] text-white">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 263px, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <a
          href={productUrl(product.handle)}
          className="absolute inset-x-3 bottom-3 z-10 flex h-[42px] translate-y-2 items-center justify-center bg-white text-[14px] font-bold tracking-wide text-sb-navy uppercase opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100"
        >
          Ajouter au panier
          <span className="sr-only"> : {product.title}</span>
        </a>
      </div>
      <h3 className="mt-4 px-2 text-[16px] leading-[1.35] text-sb-ink md:text-[19px]">
        <a href={productUrl(product.handle)} className="after:absolute after:inset-0 hover:underline">
          {product.title}
        </a>
      </h3>
      <p className="mt-1 text-[16px] text-sb-muted md:text-[19px]">{formatPrice(product.price)}</p>
      <div className="mt-2 flex justify-center gap-1.5" aria-hidden="true">
        {product.swatches.map((c) => (
          <span key={c} className="size-[11px] rounded-full ring-1 ring-black/10" style={{ backgroundColor: c }} />
        ))}
      </div>
    </li>
  );
}

export function BestSellers() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-[60px] md:px-[141px] md:py-[100px]">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-heading text-[26px] font-bold text-sb-ink md:text-[33px]">Nos best-sellers</h2>
        <a
          href={`${STORE_URL}/collections/all`}
          className="bg-sb-navy px-4 py-[10px] text-[14px] tracking-wide text-white uppercase transition-colors hover:bg-sb-sea md:text-[17px]"
        >
          Tout voir
        </a>
      </div>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-[37px] md:gap-y-[60px] lg:grid-cols-4">
        {bestSellers.map((p) => (
          <ProductCard key={p.handle} product={p} />
        ))}
      </ul>
    </section>
  );
}

export function ImageText({
  eyebrow,
  title,
  text,
  cta,
  href,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="grid grid-cols-1 bg-sb-ice md:min-h-[605px] md:grid-cols-2">
      <div className="order-2 flex flex-col justify-center px-6 py-12 md:order-1 md:px-[141px] md:py-16">
        <p className="text-[14px] tracking-wide text-sb-ink uppercase md:text-[15px]">{eyebrow}</p>
        <h2 className="mt-3 max-w-[440px] font-heading text-[34px] leading-[1.15] font-bold text-sb-ink md:text-[45px]">
          {title}
        </h2>
        <p className="mt-5 max-w-[440px] text-[18px] leading-[1.5] text-sb-ink md:text-[20px]">{text}</p>
        <a
          href={href}
          className="mt-8 self-start bg-sb-navy px-5 py-[11px] text-[16px] tracking-wide text-white uppercase transition-colors hover:bg-sb-sea md:text-[18px]"
        >
          {cta}
        </a>
      </div>
      <div className="relative order-1 aspect-square md:order-2 md:aspect-auto">
        <Image src={image} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="bg-sb-ice px-4 py-[60px] text-center md:py-[90px]">
      <h2 className="font-heading text-[32px] font-bold text-sb-ink md:text-[45px]">Restez informé(e)</h2>
      <p className="mt-3 text-[17px] text-sb-ink md:text-[20px]">
        Nouveaux modèles et coloris, et quelques astuces maison de temps en temps. Pas de spam.
      </p>
      <form
        action={`${STORE_URL}/contact#contact_form`}
        method="post"
        className="mx-auto mt-8 flex max-w-[484px] border-b border-sb-ink/40"
      >
        <input type="hidden" name="form_type" value="customer" />
        <input type="hidden" name="contact[tags]" value="newsletter" />
        <label htmlFor="sb-newsletter-email" className="sr-only">
          Adresse e-mail
        </label>
        <input
          id="sb-newsletter-email"
          type="email"
          name="contact[email]"
          required
          placeholder="E-mail"
          className="min-w-0 flex-1 bg-transparent py-4 text-[20px] text-sb-ink placeholder:text-sb-ink/70 focus:outline-none"
        />
        <button type="submit" className="px-2 text-[16px] tracking-wide text-sb-ink uppercase hover:underline">
          S’inscrire
        </button>
      </form>
    </section>
  );
}
