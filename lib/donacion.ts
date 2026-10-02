export const DONACION = {
  alias: "SANFRANCISCO.TUCUMAN",
  cbu: "0070089420000018477920",
  titular:
    "Provincia Franciscana de la Asunción de la Santísima Virgen del Río de la Plata",
  cuit: "30-62381015-8",
  banco: "Banco Galicia · Sucursal 89",
  tipoCuenta: "Cuenta corriente en pesos",
} as const;

export const SITIO = {
  nombre: "Restauremos San Francisco",
  organizacion: "Comisión de Amigos de la Iglesia San Francisco",
  ciudad: "San Miguel de Tucumán",
  descripcion:
    "Ayudemos a restaurar la Iglesia San Francisco de Tucumán. Un patrimonio que forma parte de nuestra historia necesita del compromiso de todos.",
} as const;

export function siteUrl(): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL;
  if (env) return env.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
