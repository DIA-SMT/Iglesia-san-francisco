"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  /** object-position para elegir qué parte de la foto queda visible */
  position?: string;
};

const SLIDES: Slide[] = [
  {
    src: "/img/fachada.webp",
    alt: "Fachada celeste de la Iglesia San Francisco al atardecer",
    position: "55% 30%",
  },
  {
    src: "/img/hero/obra-altar.jpg",
    alt: "Equipo de restauración con cascos frente al retablo mayor con andamios",
    position: "center 35%",
  },
  {
    src: "/img/hero/obra-planos.jpg",
    alt: "Arquitectos revisando los planos de la restauración dentro de la iglesia",
    position: "center 40%",
  },
  {
    src: "/img/hero/fachada-dia.jpg",
    alt: "Fachada de la Iglesia San Francisco bajo el cielo de Tucumán",
    position: "40% 35%",
  },
  {
    src: "/img/hero/obra-nave.jpg",
    alt: "Vecinos y prensa recorriendo la nave de la iglesia durante la obra",
    position: "center 45%",
  },
];

const INTERVAL_MS = 7000;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      if (document.hidden) return;
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-roledescription="carrusel">
      {SLIDES.map((slide, i) => {
        const active = i === index;
        return (
          <div
            key={slide.src}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-[2200ms] ease-in-out ${
              active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              style={{ objectPosition: slide.position }}
              className={`object-cover ${
                active && !reduceMotion
                  ? i % 2 === 0
                    ? "kenburns-in"
                    : "kenburns-drift"
                  : ""
              }`}
            />
          </div>
        );
      })}

      {!reduceMotion && (
        <div className="absolute bottom-36 right-6 z-10 flex gap-2 sm:bottom-40 sm:right-8">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Ver foto ${i + 1} de ${SLIDES.length}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-7 bg-white" : "w-1.5 bg-white/45 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
