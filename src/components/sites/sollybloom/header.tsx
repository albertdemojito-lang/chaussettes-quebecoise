"use client";

import { Menu, Search, ShoppingBag, User, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { STORE_URL, navLinks } from "./data";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`font-logo text-[30px] leading-none tracking-[0.04em] ${light ? "text-white" : "text-sb-navy"}`}
      aria-label="SollyBloom, accueil"
    >
      S<span className="text-[24px]">OLLY</span>B<span className="text-[24px]">LOOM</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sb-line bg-white">
      <div className="mx-auto grid h-[64px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-4 md:h-[89px] md:px-[60px] lg:grid-cols-[auto_1fr_auto]">
        <button
          type="button"
          className="flex size-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="sb-mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
          <span className="sr-only">Menu</span>
        </button>

        <Logo />

        <nav aria-label="Navigation principale" className="hidden justify-center lg:flex">
          <ul className="flex items-center gap-8 text-[17px] text-sb-ink">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="flex items-center gap-1 hover:underline hover:underline-offset-4">
                  {link.label}
                  {link.label === "Aide" && <ChevronDown className="size-3.5" aria-hidden="true" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-1 text-sb-ink">
          <a href={`${STORE_URL}/account`} className="hidden size-11 items-center justify-center md:flex" aria-label="Mon compte">
            <User className="size-[22px]" strokeWidth={1.6} />
          </a>
          <a href={`${STORE_URL}/search`} className="flex size-11 items-center justify-center" aria-label="Rechercher">
            <Search className="size-[22px]" strokeWidth={1.6} />
          </a>
          <a href={`${STORE_URL}/cart`} className="flex size-11 items-center justify-center" aria-label="Panier">
            <ShoppingBag className="size-[22px]" strokeWidth={1.6} />
          </a>
        </div>
      </div>

      {open && (
        <nav id="sb-mobile-menu" aria-label="Menu mobile" className="border-t border-sb-line bg-white px-4 pb-4 lg:hidden">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label} className="border-b border-sb-line">
                <a href={link.href} className="block py-4 text-[18px] text-sb-ink" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`${STORE_URL}/account`} className="block py-4 text-[18px] text-sb-ink">
                Mon compte
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
