"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { faqs } from "./data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-[1440px] scroll-mt-24 px-4 py-[60px] md:px-[126px] md:py-[90px]">
      <h2 className="text-center font-heading text-[30px] font-bold text-sb-ink md:text-[39px]">
        Questions fréquentes
      </h2>
      <div className="mt-8 grid grid-cols-1 items-start gap-x-4 gap-y-[15px] md:grid-cols-2 md:gap-x-4">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          const id = `sb-faq-${i}`;
          return (
            <div key={item.q} className="rounded-[8px] bg-sb-ice">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-h-[70px] w-full items-center justify-between gap-4 px-6 text-left text-[17px] font-bold text-sb-ink md:text-[19px]"
                >
                  {item.q}
                  {isOpen ? (
                    <Minus className="size-5 shrink-0" aria-hidden="true" />
                  ) : (
                    <Plus className="size-5 shrink-0" aria-hidden="true" />
                  )}
                </button>
              </h3>
              <div id={id} hidden={!isOpen} className="px-6 pb-6 text-[17px] leading-[1.55] text-sb-ink/85">
                {item.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
