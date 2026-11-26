"use client";

import { useEffect, useState } from "react";

// End of the Black Friday / Cyber Monday promo, Sydney time.
const END = Date.parse("2026-12-01T00:00:00+11:00");

type Parts = { d: number; h: number; m: number; s: number };

const getParts = (): Parts => {
  const total = Math.max(0, Math.floor((END - Date.now()) / 1000));
  return {
    d: Math.floor(total / 86400),
    h: Math.floor((total % 86400) / 3600),
    m: Math.floor((total % 3600) / 60),
    s: total % 60,
  };
};

const pad = (n: number) => String(n).padStart(2, "0");

export function AnnouncementBar() {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    const tick = () => setParts(getParts());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const units: { key: keyof Parts; label: string }[] = [
    { key: "d", label: "Jours" },
    { key: "h", label: "H" },
    { key: "m", label: "Min" },
    { key: "s", label: "Sec" },
  ];

  return (
    <div className="bg-sb-navy text-white">
      <div className="mx-auto flex min-h-[58px] max-w-[1440px] items-center justify-center gap-4 px-4 py-1.5 md:gap-8">
        <div className="text-center leading-tight">
          <p className="font-heading text-[13px] font-bold tracking-[0.12em] uppercase md:text-[15px]">
            Black Friday
          </p>
          <p className="flex items-center justify-center gap-1.5 text-[11px] font-bold tracking-wide uppercase md:text-[12px]">
            <span className="size-2 rounded-full bg-sb-gold" aria-hidden="true" />
            5 achetées = 5 offertes
          </p>
        </div>
        <div className="flex items-start gap-1" role="timer" aria-label="Fin de l’offre dans">
          {units.map((u, i) => (
            <div key={u.key} className="flex items-start gap-1">
              <div className="flex flex-col items-center">
                <span className="min-w-[34px] rounded-[5px] bg-white/15 px-1.5 py-0.5 text-center text-[14px] font-bold tabular-nums">
                  {parts ? pad(parts[u.key]) : "00"}
                </span>
                <span className="mt-0.5 text-[8px] tracking-wider uppercase opacity-80">{u.label}</span>
              </div>
              {i < units.length - 1 && <span className="pt-0.5 font-bold" aria-hidden="true">:</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
