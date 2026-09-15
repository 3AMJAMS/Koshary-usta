import React from "react";

/**
 * The seven things on the counter. `slang` is what the shop actually calls
 * each one — a regular orders in it, and from chapter 4 everyone does.
 * Colours are the exact col / col2 pair each ingredient is drawn with.
 */
export const ING = {
  rzmix:   { ar: "رز بعدس وشعرية", en: "Rice, lentil & vermicelli", slang: "بندق",   slangEn: "bondo’",   col: "var(--ing-rzmix)",   col2: "var(--ing-rzmix-shade)",   vessel: "vat",   w: 1.00 },
  ruz:     { ar: "رز بشعرية",      en: "Rice & vermicelli",         slang: "بندق",   slangEn: "bondo’",   col: "var(--ing-ruz)",     col2: "var(--ing-ruz-shade)",     vessel: "vat",   w: 1.00 },
  maca:    { ar: "مكرونة",         en: "Macaroni",                  slang: "لوز",    slangEn: "loz",      col: "var(--ing-maca)",    col2: "var(--ing-maca-shade)",    vessel: "vat",   w: 0.95 },
  ads:     { ar: "عدس",            en: "Brown lentils",             slang: "كهرمان", slangEn: "kahraman", col: "var(--ing-ads)",     col2: "var(--ing-ads-shade)",     vessel: "vat",   w: 1.05 },
  homos:   { ar: "حمص",            en: "Chickpeas",                 slang: "حمص",    slangEn: "homos",    col: "var(--ing-homos)",   col2: "var(--ing-homos-shade)",   vessel: "pot",   w: 0.85 },
  salsa:   { ar: "صلصة",           en: "Tomato sauce",              slang: "مونة",   slangEn: "moona",    col: "var(--ing-salsa)",   col2: "var(--ing-salsa-shade)",   vessel: "sauce", w: 1.15 },
  taqleya: { ar: "تقلية",          en: "Crispy onions",             slang: "ورد",    slangEn: "ward",     col: "var(--ing-taqleya)", col2: "var(--ing-taqleya-shade)", vessel: "tray",  w: 1.45 }
};

/** The counter's own word for a component, in whichever script is on screen. */
export function slangOf(key, lang = "ar") {
  const i = ING[key];
  if (!i) return key;
  return lang === "ar" ? i.slang : (i.slangEn || i.en);
}

/** The plain name, in whichever script is on screen. */
export function nameOf(key, lang = "ar") {
  const i = ING[key];
  if (!i) return key;
  return lang === "ar" ? i.ar : i.en;
}

/**
 * The paid ticket on the spike. Paper slip, perforated bottom edge, flutters
 * down when it arrives and ticks when a line is filled.
 */
export function OrderTicket({
  no, name, who, whoIcon, lines = [], total, tick = false, lang = "ar", slang = false, style, ...rest
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "min(52%, var(--slip-max))",
        background: "var(--surface-slip)",
        color: "var(--text-slip)",
        border: "var(--outline-ink)",
        borderRadius: "var(--radius-slip)",
        padding: "var(--pad-slip)",
        fontSize: "var(--fs-slip)", lineHeight: "var(--lh-slip)",
        boxShadow: "var(--shadow-slip)",
        transformOrigin: "top center",
        animation: tick
          ? "ks-slip-tick var(--dur-slip-tick) ease-out"
          : "ks-slip-in var(--dur-slip-in) var(--ease-spring)",
        ...style
      }}
      {...rest}
    >
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        borderBottom: "1.5px dashed rgba(42,31,23,.35)",
        paddingBottom: "var(--space-2)", marginBottom: "var(--space-3)"
      }}>
        <span data-ks-display="" style={{ fontSize: "var(--fs-slip-name)", lineHeight: "var(--lh-tight)", textShadow: "none" }}>{name}</span>
        {no != null ? <span data-ks-numeric="" style={{ fontSize: "var(--fs-slip-no)", opacity: 0.65, fontWeight: "var(--fw-bold)" }}>#{no}</span> : null}
      </div>
      {who ? (
        <div style={{
          fontSize: "var(--fs-slip-who)", fontWeight: "var(--fw-bold)",
          color: "var(--text-slip-extra)", letterSpacing: "var(--ls-chip)",
          margin: "-1px 0 var(--space-2)", display: "flex", alignItems: "center", gap: "var(--space-2)"
        }}>{whoIcon ? <span aria-hidden="true">{whoIcon}</span> : null}{who}</div>
      ) : null}
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {lines.map((l, i) => (
          <li key={i} style={{
            display: "flex", justifyContent: "space-between", gap: "var(--space-5)",
            fontWeight: "var(--fw-semibold)",
            color: l.state === "no" ? "var(--text-slip-no)" : l.state === "ex" ? "var(--text-slip-extra)" : undefined,
            textDecoration: l.state === "no" ? "line-through" : undefined,
            opacity: l.state === "no" ? 0.8 : 1
          }}>
            <span>{slang ? slangOf(l.key, lang) : nameOf(l.key, lang)}</span>
            {l.qty != null ? <span data-ks-numeric="">×{l.qty}</span> : null}
          </li>
        ))}
      </ul>
      {total != null ? (
        <div style={{
          marginTop: "var(--space-3)", paddingTop: "var(--space-2)",
          borderTop: "1.5px dashed rgba(42,31,23,.35)",
          display: "flex", justifyContent: "space-between",
          fontSize: "var(--fs-combo-label)", fontWeight: "var(--fw-bold)"
        }}>
          <span>{lang === "ar" ? "الحساب" : "Total"}</span>
          <span data-ks-numeric="">{total}</span>
        </div>
      ) : null}
      <span aria-hidden="true" style={{
        position: "absolute", insetInline: 0, bottom: "-5px", height: "6px",
        background: "repeating-linear-gradient(90deg,#E4D5B4 0 5px,transparent 5px 10px)"
      }} />
    </div>
  );
}
