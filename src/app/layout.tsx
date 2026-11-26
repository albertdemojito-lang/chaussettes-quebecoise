import type { Metadata } from "next";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/cormorant-garamond/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "SollyBloom – Les chaussettes les plus douillettes pour chaque saison",
  description:
    "SollyBloom crée des chaussettes cocooning ultra-douces et des chaussettes de saison trop mignonnes. Livraison suivie, garantie 90 jours, retours faciles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
