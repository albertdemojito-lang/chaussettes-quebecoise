import { AnnouncementBar } from "@/components/sites/sollybloom/announcement-bar";
import { Faq } from "@/components/sites/sollybloom/faq";
import { FeaturedProduct } from "@/components/sites/sollybloom/featured-product";
import { Footer } from "@/components/sites/sollybloom/footer";
import { Header } from "@/components/sites/sollybloom/header";
import { HeroSlider } from "@/components/sites/sollybloom/hero-slider";
import { productUrl } from "@/components/sites/sollybloom/data";
import { BestSellers, ImageText, Newsletter, TrustMarquee } from "@/components/sites/sollybloom/sections";

export default function Home() {
  return (
    <>
      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:p-3">
        Aller au contenu
      </a>
      <AnnouncementBar />
      <Header />
      <main id="contenu">
        <HeroSlider />
        <TrustMarquee />
        <BestSellers />
        <ImageText
          eyebrow="Saison cocooning"
          title="Les chaussettes montantes les plus douillettes"
          text="Intérieur bouclette moelleux, large revers côtelé qui tient sans serrer. Cinq coloris neutres, deux tailles simples."
          cta="Découvrir les Chaussettes Cocooning"
          href={productUrl("sweater-socks")}
          image="/sites/sollybloom/legs-cream.jpg"
          alt="Chaussettes Cocooning crème portées"
        />
        <FeaturedProduct />
        <ImageText
          eyebrow="Fêtes de fin d’année"
          title="Des chaussettes de Noël à porter toute la saison"
          text="Dix motifs brodés en blanc, rouge et vert, cousus dans le revers pour ne jamais craqueler ni se décolorer. Une paire pour la maîtresse, un lot de cinq pour la famille, les dix pour toute la tablée."
          cta="Voir les chaussettes de Noël"
          href={productUrl("christmas-socks")}
          image="/sites/sollybloom/christmas-gift-b.jpg"
          alt="Coffret cadeau de chaussettes de Noël brodées"
        />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
