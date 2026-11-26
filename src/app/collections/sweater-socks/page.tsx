import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/sites/sollybloom/announcement-bar";
import { CollectionBanner } from "@/components/sites/sollybloom/collection-banner";
import { sweaterSocksCollection } from "@/components/sites/sollybloom/data";
import { Footer } from "@/components/sites/sollybloom/footer";
import { Header } from "@/components/sites/sollybloom/header";
import { ProductCard } from "@/components/sites/sollybloom/sections";

export const metadata: Metadata = {
  title: "Chaussettes Cocooning – SollyBloom",
  description:
    "Toutes nos Chaussettes Cocooning : intérieur bouclette moelleux, large revers côtelé qui tient sans serrer, dans 14 packs et coloris.",
};

export default function SweaterSocksCollection() {
  return (
    <>
      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:p-3">
        Aller au contenu
      </a>
      <AnnouncementBar />
      <Header />
      <main id="contenu">
        <CollectionBanner />
        <div className="px-4 pt-[50px] pb-[36px] text-center md:pt-[56px] md:pb-[60px]">
          <h1 className="font-heading text-[26px] font-bold text-sb-ink md:text-[33px]">
            Chaussettes Cocooning
            <sup className="ml-1 align-super text-[13px] font-semibold">
              {sweaterSocksCollection.length}
              <span className="sr-only"> produits</span>
            </sup>
          </h1>
        </div>
        <ul className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-4 gap-y-10 px-4 pb-[60px] md:gap-x-[34px] md:gap-y-[60px] md:px-[55px] md:pb-[90px] lg:grid-cols-4">
          {sweaterSocksCollection.map((p) => (
            <ProductCard key={p.handle} product={p} />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
