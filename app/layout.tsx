import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { SITIO, siteUrl } from "@/lib/donacion";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: `${SITIO.nombre} · ${SITIO.organizacion}`,
  description: SITIO.descripcion,
  openGraph: {
    title: "Ayudemos a restaurar la Iglesia San Francisco",
    description: SITIO.descripcion,
    locale: "es_AR",
    type: "website",
    images: [{ url: "/img/fachada.webp", width: 1140, height: 1424 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayudemos a restaurar la Iglesia San Francisco",
    description: SITIO.descripcion,
    images: ["/img/fachada.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#8fbfe0",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-AR"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
