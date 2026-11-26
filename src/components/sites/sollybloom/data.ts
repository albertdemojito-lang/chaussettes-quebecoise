export const STORE_URL = "https://sollybloom.com";

export const productUrl = (handle: string) => `${STORE_URL}/products/${handle}`;

const priceFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "AUD",
});

export const formatPrice = (amount: number) => priceFormatter.format(amount);

export type Product = {
  handle: string;
  title: string;
  price: number;
  image: string;
  badge?: string;
  swatches: string[];
};

export const bestSellers: Product[] = [
  {
    handle: "sweater-socks",
    title: "Chaussettes Cocooning – Les chaussettes montantes les plus douillettes (5 paires)",
    price: 29.97,
    image: "/sites/sollybloom/lineup.jpg",
    badge: "Best-seller",
    swatches: ["#ece6dc", "#a5774f", "#8b7563", "#4a3428", "#141414"],
  },
  {
    handle: "sweater-socks-winter-pack-5-pairs",
    title: "Chaussettes Cocooning – Pack Hiver (5 paires)",
    price: 29.97,
    image: "/sites/sollybloom/winter.jpg",
    badge: "Nouveau",
    swatches: ["#f1b7c4", "#9fd0ea", "#7b7d80", "#3b3f47", "#23356f"],
  },
  {
    handle: "christmas-socks",
    title: "Chaussettes de Noël – Les plus mignonnes des fêtes",
    price: 7.99,
    image: "/sites/sollybloom/christmas-gift.jpg",
    badge: "Ça part vite",
    swatches: ["#f4f1ea", "#d61f26", "#8c1c25", "#1fa458", "#0f6e3c"],
  },
  {
    handle: "black-sweater-socks-the-coziest-slouchy-boot-socks-5-pairs",
    title: "Chaussettes Cocooning Noires (5 paires)",
    price: 29.97,
    image: "/sites/sollybloom/black.jpg",
    badge: "Couleur star",
    swatches: ["#141414"],
  },
  {
    handle: "cream-sweater-socks-the-coziest-slouchy-boot-socks-5-pairs",
    title: "Chaussettes Cocooning Crème (5 paires)",
    price: 29.97,
    image: "/sites/sollybloom/cream.jpg",
    badge: "Couleur star",
    swatches: ["#ece6dc"],
  },
  {
    handle: "navy-sweater-socks-5-pairs",
    title: "Chaussettes Cocooning Bleu Marine (5 paires)",
    price: 29.97,
    image: "/sites/sollybloom/navy.jpg",
    badge: "Nouveau",
    swatches: ["#23356f"],
  },
  {
    handle: "charcoal-sweater-socks-5-pairs",
    title: "Chaussettes Cocooning Anthracite (5 paires)",
    price: 29.97,
    image: "/sites/sollybloom/charcoal.jpg",
    badge: "Nouveau",
    swatches: ["#4a4d52"],
  },
  {
    handle: "taupe-sweater-socks-the-coziest-slouchy-boot-socks-5-pairs",
    title: "Chaussettes Cocooning Taupe (5 paires)",
    price: 29.97,
    image: "/sites/sollybloom/taupe.jpg",
    swatches: ["#8b7563"],
  },
];

export const navLinks = [
  { label: "🎄 Chaussettes de Noël", href: productUrl("christmas-socks") },
  { label: "Chaussettes Cocooning", href: productUrl("sweater-socks") },
  { label: "Nouveaux coloris", href: productUrl("sweater-socks-winter-pack-5-pairs") },
  { label: "Toutes les chaussettes", href: `${STORE_URL}/collections/all` },
  { label: "Aide", href: "#faq" },
];

export const trustItems = [
  "Black Friday",
  "Garantie 90 jours",
  "Livraison rapide et suivie",
  "Service client 7j/7",
  "Paiement sécurisé",
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Comment fonctionnent vos offres groupées ?",
    a: "Choisissez la quantité souhaitée sur la fiche produit : la réduction s’applique automatiquement au moment du paiement, sans code à saisir.",
  },
  {
    q: "Quand vais-je recevoir ma commande ?",
    a: "Chaque commande est expédiée sous 1 à 2 jours ouvrés avec un numéro de suivi. Le délai de livraison estimé s’affiche au moment du paiement.",
  },
  {
    q: "Livrez-vous à l’international ?",
    a: "Oui. Les pays desservis et les frais de livraison sont indiqués au moment du paiement, avant de valider votre commande.",
  },
  {
    q: "Comment suivre ma commande ?",
    a: "Vous recevez un lien de suivi par e-mail dès l’expédition de votre commande. Vous pouvez l’utiliser à tout moment pour voir où en est votre colis.",
  },
  {
    q: "Quelle est votre politique de retour ?",
    a: "Vous êtes couvert(e) pendant 90 jours : remboursement intégral sous 30 jours après la livraison, échange ou remplacement gratuit jusqu’à 90 jours en cas de problème avec votre commande.",
  },
  {
    q: "Quelles tailles proposez-vous ?",
    a: "Les Chaussettes Cocooning existent en deux tailles : US 5-8 (EU 35-38) et US 8,5-12 (EU 39-42), en pointures femme.",
  },
  {
    q: "Comment les laver ?",
    a: "Lavage en machine à froid, puis séchage à l’air libre pour garder la maille douce. Si vous utilisez le sèche-linge, choisissez une température basse et un cycle délicat. Pas d’eau de Javel.",
  },
  {
    q: "Comment vous contacter ?",
    a: "Écrivez-nous via la page Contact de la boutique : une vraie personne répond à chaque message sous 24 h les jours ouvrés.",
  },
];
