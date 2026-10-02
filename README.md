# Restauremos San Francisco

Landing de donación para la campaña de restauración de la Iglesia San Francisco
(San Miguel de Tucumán). Pensada para abrirse desde el QR del banner de la fachada.

- `/` — página principal: alias con botón de copiar, datos de la cuenta, fotos.
- `/qr` — genera el QR (SVG y PNG) que apunta al sitio, para mandar a imprenta.

## Correr local

```bash
npm install
npm run dev
```

## Deploy en Vercel

1. Importar el repo en Vercel (framework Next.js, sin configuración extra).
2. Opcional: variable `NEXT_PUBLIC_SITE_URL` con el dominio final
   (ej. `https://sanfrancisco.vercel.app`). Si no está, usa el dominio de
   producción que expone Vercel.
3. Abrir `/qr` en producción y descargar el QR para el banner.

## Editar textos y datos

Alias, CBU, titular y textos de cabecera están en `lib/donacion.ts`.
