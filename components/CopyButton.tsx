"use client";

import { useEffect, useState } from "react";

type Props = {
  value: string;
  label?: string;
  copiedLabel?: string;
  variant?: "primary" | "ghost";
  className?: string;
};

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to legacy path
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export default function CopyButton({
  value,
  label = "Copiar",
  copiedLabel = "¡Copiado!",
  variant = "primary",
  className = "",
}: Props) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const t = setTimeout(() => setState("idle"), 2200);
    return () => clearTimeout(t);
  }, [state]);

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-celeste-oscuro active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-tinta text-crema hover:bg-celeste-oscuro px-6 py-3 text-base shadow-lg shadow-tinta/15"
      : "border border-tinta/15 bg-white/70 text-tinta hover:border-celeste-oscuro hover:text-celeste-oscuro px-3 py-1.5 text-sm";

  const text =
    state === "copied" ? copiedLabel : state === "error" ? "No se pudo copiar" : label;

  return (
    <button
      type="button"
      onClick={async () => {
        const ok = await copyText(value);
        setState(ok ? "copied" : "error");
      }}
      aria-live="polite"
      className={`${base} ${styles} ${className}`}
    >
      {state === "copied" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12.5 10 17.5 19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )}
      <span>{text}</span>
    </button>
  );
}
