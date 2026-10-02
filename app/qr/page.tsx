import type { Metadata } from "next";
import QRCode from "qrcode";
import { siteUrl } from "@/lib/donacion";

export const metadata: Metadata = {
  title: "QR para el banner · Restauremos San Francisco",
  robots: { index: false, follow: false },
};

const COLOR = { dark: "#1d2a38", light: "#ffffff" };

export default async function QrPage() {
  const url = siteUrl();
  const svg = await QRCode.toString(url, {
    type: "svg",
    errorCorrectionLevel: "H",
    margin: 2,
    color: COLOR,
  });
  const png = await QRCode.toDataURL(url, {
    errorCorrectionLevel: "H",
    margin: 2,
    width: 2048,
    color: COLOR,
  });
  const svgHref = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

  return (
    <main className="mx-auto flex max-w-xl flex-1 flex-col items-center px-6 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-celeste-oscuro">
        Uso interno
      </p>
      <h1 className="font-display mt-2 text-3xl font-bold text-tinta">
        QR para el banner
      </h1>
      <p className="mt-3 text-tinta-suave">
        Apunta a <span className="font-mono text-sm text-tinta">{url}</span>.
        Descargalo en SVG para imprenta o en PNG de alta resolución.
      </p>

      <div
        className="mt-8 w-full max-w-xs rounded-3xl border border-tinta/10 bg-white p-4 shadow-xl shadow-tinta/10 [&_svg]:h-auto [&_svg]:w-full"
        dangerouslySetInnerHTML={{ __html: svg }}
      />

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={svgHref}
          download="qr-sanfrancisco.svg"
          className="rounded-full bg-tinta px-6 py-3 font-medium text-crema hover:bg-celeste-oscuro"
        >
          Descargar SVG
        </a>
        <a
          href={png}
          download="qr-sanfrancisco.png"
          className="rounded-full border border-tinta/15 bg-white px-6 py-3 font-medium text-tinta hover:border-celeste-oscuro hover:text-celeste-oscuro"
        >
          Descargar PNG (2048px)
        </a>
      </div>

      <p className="mt-10 text-xs text-tinta-suave">
        Si el dominio final cambia, definí <code>NEXT_PUBLIC_SITE_URL</code> en
        Vercel y volvé a generar el QR.
      </p>
    </main>
  );
}
