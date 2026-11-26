import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { STORE_URL } from "./data";
import { Logo } from "./header";

const supportLinks = [
  { label: "Nous contacter", href: `${STORE_URL}/pages/contact` },
  { label: "Suivre ma commande", href: `${STORE_URL}/account` },
  { label: "FAQ", href: "/#faq" },
  { label: "Politique de livraison", href: `${STORE_URL}/policies/shipping-policy` },
  { label: "Politique de remboursement", href: `${STORE_URL}/policies/refund-policy` },
];

const legalLinks = [
  { label: "Politique de confidentialité", href: `${STORE_URL}/policies/privacy-policy` },
  { label: "Conditions d’utilisation", href: `${STORE_URL}/policies/terms-of-service` },
];

const payments = ["Amex", "Apple Pay", "Google Pay", "Mastercard", "PayPal", "Shop Pay", "Visa"];

export function Footer() {
  return (
    <footer className="bg-sb-navy-deep text-white">
      <div className="mx-auto max-w-[1440px] px-4 pt-[60px] pb-8 md:px-[55px] md:pt-[90px]">
        <Logo light />
        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr_1.2fr] md:gap-[60px]">
          <div>
            <h2 className="font-heading text-[20px] font-bold">La boutique</h2>
            <p className="mt-5 text-[19px] leading-[1.4] text-white/90">
              Des chaussettes douillettes pour chaque saison, pensées pour les pieds toujours froids.
            </p>
            <p className="mt-3 text-[19px] text-white/90">
              Aide :{" "}
              <a href={`${STORE_URL}/pages/contact`} className="underline underline-offset-4">
                formulaire de contact
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-heading text-[20px] font-bold">Aide</h2>
            <ul className="mt-4 space-y-4 text-[19px] text-white/90">
              {supportLinks.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith("/") ? (
                    <Link href={l.href} className="hover:underline hover:underline-offset-4">
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} className="hover:underline hover:underline-offset-4">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-[20px] font-bold">Offres exclusives !</h2>
            <p className="mt-4 text-[19px] leading-[1.4] text-white/90">
              Inscrivez-vous à notre newsletter pour être le premier informé des nouveautés, promotions et jeux-concours.
            </p>
            <form action={`${STORE_URL}/contact#contact_form`} method="post" className="mt-5 flex border border-white/40">
              <input type="hidden" name="form_type" value="customer" />
              <input type="hidden" name="contact[tags]" value="newsletter" />
              <label htmlFor="sb-footer-email" className="sr-only">
                Adresse e-mail
              </label>
              <input
                id="sb-footer-email"
                type="email"
                name="contact[email]"
                required
                placeholder="E-mail"
                className="min-w-0 flex-1 bg-transparent px-4 py-4 text-[19px] text-white placeholder:text-white/75 focus:outline-none"
              />
              <button type="submit" className="px-4" aria-label="S’inscrire">
                <ChevronRight className="size-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/15 pt-8 md:flex-row">
          <p className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[16px] text-white/90 md:text-[17px]">
            <span>© SollyBloom {new Date().getFullYear()}</span>
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} className="hover:underline">
                {l.label}
              </a>
            ))}
          </p>
          <ul className="flex flex-wrap justify-center gap-1.5" aria-label="Moyens de paiement acceptés">
            {payments.map((p) => (
              <li key={p} className="rounded-[4px] bg-white px-2 py-1 text-[11px] font-bold text-sb-navy">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
