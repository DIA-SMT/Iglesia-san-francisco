import Image from "next/image";
import HeroSlideshow from "@/components/HeroSlideshow";
import CopyButton from "@/components/CopyButton";
import { DONACION, SITIO } from "@/lib/donacion";

export default function Home() {
  return (
    <main className="flex-1">
      {/* ─────────── HERO ─────────── */}
      <section className="relative isolate min-h-[92svh] overflow-hidden text-white">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-gradient-to-b from-tinta/55 via-tinta/30 to-tinta/75" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-crema to-transparent sm:h-36" />

        <div className="relative mx-auto flex min-h-[92svh] max-w-5xl flex-col px-6 pb-28 pt-8 sm:px-8">
          <header className="fade-up flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/80">
            <span>{SITIO.organizacion}</span>
            <span className="hidden sm:inline">{SITIO.ciudad}</span>
          </header>

          <div className="mt-auto max-w-3xl pt-10">
            <p className="fade-up mb-5 inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] backdrop-blur-sm sm:gap-3 sm:px-4 sm:text-xs sm:tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-ocre" />
              Campaña de restauración
            </p>
            <h1 className="fade-up-2 font-display text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl xl:text-7xl">
              Ayudemos a restaurar la{" "}
              <span className="text-celeste-claro">Iglesia San Francisco</span>
            </h1>
            <p className="fade-up-3 mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl xl:max-w-2xl xl:text-2xl">
              Un patrimonio que forma parte de nuestra historia necesita del
              compromiso de todos.
            </p>
            <div className="fade-up-3 mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#donar"
                className="inline-flex items-center gap-2 rounded-full bg-ocre px-7 py-3.5 text-base font-semibold text-tinta shadow-xl shadow-black/25 transition hover:bg-[#dba44a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Quiero sumarme
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 5v14m0 0-6-6m6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#historia"
                className="text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
              >
                Conocé la iglesia
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── DONAR ─────────── */}
      <section
        id="donar"
        className="relative mx-auto -mt-20 max-w-3xl scroll-mt-6 px-4 sm:px-8 lg:max-w-4xl"
      >
        <div className="overflow-hidden rounded-3xl border border-tinta/10 bg-white shadow-2xl shadow-tinta/10">
          <div className="border-b border-tinta/10 bg-celeste-claro/60 px-5 py-5 sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-celeste-oscuro">
              Doná por transferencia
            </p>
            <h2 className="font-display mt-1 text-2xl font-bold text-tinta sm:text-3xl">
              Transferí al alias de la iglesia
            </h2>
          </div>

          <div className="px-5 py-7 sm:px-10 sm:py-10">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-tinta-suave">
              Alias
            </p>
            <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p
                className="select-all font-mono text-[clamp(1.05rem,5.8vw,1.875rem)] font-semibold tracking-wide text-tinta"
                aria-label={`Alias ${DONACION.alias}`}
              >
                {DONACION.alias}
              </p>
              <CopyButton value={DONACION.alias} label="Copiar alias" className="shrink-0" />
            </div>

            <p className="mt-6 text-base leading-relaxed text-tinta-suave">
              Funciona desde cualquier banco o billetera virtual: Mercado Pago,
              Ualá, Naranja X, Brubank o la app de tu banco. Copiá el alias,
              pegalo como destinatario y elegí el monto que quieras aportar.
            </p>

            <ol className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {[
                ["1", "Abrí tu app", "Del banco o de la billetera que uses."],
                ["2", "Pegá el alias", "En “Nuevo destinatario” o “Transferir”."],
                ["3", "Elegí el monto", "Cada aporte, grande o chico, suma."],
              ].map(([n, t, d]) => (
                <li
                  key={n}
                  className="flex items-start gap-3 rounded-2xl border border-tinta/8 bg-crema/70 p-4 sm:block"
                >
                  <span className="font-display w-5 shrink-0 text-2xl font-bold leading-none text-ocre-oscuro sm:w-auto sm:leading-normal">
                    {n}
                  </span>
                  <div>
                    <p className="font-semibold text-tinta sm:mt-1">{t}</p>
                    <p className="mt-0.5 text-sm text-tinta-suave">{d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <details className="group mt-8 rounded-2xl border border-tinta/10">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-semibold text-tinta [&::-webkit-details-marker]:hidden">
                Ver todos los datos de la cuenta
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform group-open:rotate-180"
                >
                  <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <dl className="divide-y divide-tinta/8 border-t border-tinta/10 text-sm">
                <Dato label="Titular" value={DONACION.titular} />
                <Dato label="CUIT" value={DONACION.cuit} copy />
                <Dato label="CBU" value={DONACION.cbu} copy mono />
                <Dato label="Banco" value={DONACION.banco} />
                <Dato label="Tipo de cuenta" value={DONACION.tipoCuenta} />
              </dl>
            </details>
          </div>
        </div>
      </section>

      {/* ─────────── HISTORIA / GALERÍA ─────────── */}
      <section
        id="historia"
        className="mx-auto max-w-6xl scroll-mt-10 px-6 pb-8 pt-24 sm:px-8 sm:pt-32"
      >
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-celeste-oscuro">
              Por qué importa
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight text-tinta sm:text-4xl">
              Siglos de historia en el corazón de Tucumán
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-tinta-suave">
              <p>
                La Iglesia San Francisco es uno de los templos más antiguos de la
                ciudad y un símbolo de San Miguel de Tucumán. Sus retablos
                dorados, sus pinturas murales y su cúpula forman parte del
                paisaje y de la memoria de generaciones de tucumanos.
              </p>
              <p>
                El paso del tiempo dejó huellas: humedad, desprendimientos y
                deterioro en el interior y la fachada. Restaurarla es cuidar un
                patrimonio que es de todos.
              </p>
              <p className="font-display text-xl font-medium italic text-tinta">
                “Cada aporte ayuda a conservar este lugar para las próximas
                generaciones.”
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <figure className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/img/nave.webp"
                alt="Nave central de la Iglesia San Francisco con sus arcos dorados y lámparas"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </figure>
            <figure className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image
                src="/img/altar.webp"
                alt="Retablo mayor dorado de la Iglesia San Francisco"
                fill
                sizes="(min-width: 768px) 20vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </figure>
            <figure className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image
                src="/img/fachada-anterior.webp"
                alt="Fachada de la iglesia con su cúpula, antes de la pintura actual"
                fill
                sizes="(min-width: 768px) 20vw, 50vw"
                className="object-cover object-[58%_center] transition-transform duration-700 hover:scale-105"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ─────────── CTA FINAL ─────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-tinta px-5 py-12 text-center text-white sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-celeste/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-ocre/25 blur-3xl"
          />
          <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-celeste-claro">
            Sumate hoy
          </p>
          <h2 className="font-display relative mt-3 text-3xl font-bold sm:text-4xl">
            Tu aporte deja huella
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/75">
            Transferí al alias y compartí esta página con quien quieras que se sume.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <p className="font-mono text-[clamp(1rem,5.5vw,1.5rem)] font-semibold tracking-wide">
              {DONACION.alias}
            </p>
            <CopyButton
              value={DONACION.alias}
              label="Copiar alias"
              className="!bg-ocre !text-tinta hover:!bg-[#dba44a]"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-tinta/10 bg-crema-2/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-center text-sm text-tinta-suave sm:flex-row sm:text-left">
          <p className="font-semibold text-tinta">{SITIO.organizacion}</p>
          <p>Iglesia y Convento San Francisco · {SITIO.ciudad}</p>
        </div>
      </footer>
    </main>
  );
}

function Dato({
  label,
  value,
  copy = false,
  mono = false,
}: {
  label: string;
  value: string;
  copy?: boolean;
  mono?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-tinta-suave">
          {label}
        </dt>
        <dd
          className={`mt-0.5 break-words text-tinta ${
            mono ? "font-mono text-base tracking-wide" : ""
          }`}
        >
          {value}
        </dd>
      </div>
      {copy && (
        <CopyButton
          value={value}
          variant="ghost"
          label="Copiar"
          className="self-start sm:self-auto"
        />
      )}
    </div>
  );
}
