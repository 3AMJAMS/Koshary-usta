import React from "react";
import { patienceColor } from "../hud/PatienceMeter.jsx";

/**
 * Who walks in. Every multiplier here is from the source — an office worker
 * runs out of patience fastest (0.62), a tourist tips best (2.10), and a
 * critic moves reputation more than three times as hard as anyone else.
 */
export const ARCH = {
  walkin:  { ar: "زبون",      en: "Walk-in",       pat: 1.00, tip: 1.00, rep: 1.00, w: 26, icon: "🙂" },
  office:  { ar: "موظف",      en: "Office worker", pat: 0.62, tip: 0.85, rep: 0.90, w: 22, icon: "⏱",
             arS: "مستعجل — الغدا نص ساعة", enS: "In a hurry — half an hour for lunch" },
  regular: { ar: "زبون قديم", en: "Regular",       pat: 1.30, tip: 1.35, rep: 1.45, w: 18, icon: "★",
             slangAlways: true, arS: "بيطلب بلغة المحل", enS: "Orders in the house language" },
  tourist: { ar: "سايح",      en: "Tourist",       pat: 1.45, tip: 2.10, rep: 0.75, w: 12, icon: "📷",
             showman: true, arS: "عايز يتفرج على الشغل", enS: "Wants to watch the show" },
  family:  { ar: "عيلة",      en: "Family",        pat: 1.20, tip: 1.25, rep: 1.20, w: 10, icon: "👨‍👩‍👧",
             bigOnly: true, arS: "حلّة للبيت", enS: "A pot to take home" },
  critic:  { ar: "صحفي",      en: "Critic",        pat: 0.90, tip: 1.60, rep: 3.20, w: 5,  icon: "📝",
             strict: true, arS: "بيكتب في الجرنان", enS: "Writes for the paper" }
};

/** Which chapter each archetype starts appearing in. */
export const ARCH_FROM = { walkin: 0, office: 1, regular: 1, tourist: 3, family: 3, critic: 2 };

/** Mood follows the same thresholds as the patience bar. */
export function moodOf(patience) {
  return patience > 80 ? "delighted"
    : patience > 60 ? "happy"
    : patience > 30 ? "impatient"
    : "annoyed";
}

/**
 * A STAND-IN. In the shipping game the customer is drawn on the canvas by
 * makeLook() — randomised skin, cloth, hat, hijab, beard, glasses, plus a
 * tourist camera flash — and there is no DOM customer card at all. This
 * component exists so mockups can place a figure with the correct archetype
 * data, label and mood ring. Pass `art` once real artwork exists.
 */
export function CustomerFigure({
  archetype = "walkin", patience = 100, lang = "ar", art, size = 96, showLabel = true, style, ...rest
}) {
  const a = ARCH[archetype] || ARCH.walkin;
  const ring = patienceColor(patience);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)", ...style }} {...rest}>
      <div style={{
        width: size, height: size, borderRadius: "var(--radius-up)",
        border: "var(--outline-ink)",
        boxShadow: "inset 0 0 0 3px " + ring + ", var(--shadow-up)",
        background: art ? undefined : "var(--surface-upico)",
        display: "grid", placeItems: "center", overflow: "hidden",
        fontSize: Math.round(size * 0.42)
      }}>
        {art || <span aria-hidden="true">{a.icon}</span>}
      </div>
      {showLabel ? (
        <>
          <span data-ks-display="" style={{ fontSize: "var(--fs-prep-title)", color: "var(--text-head)", lineHeight: "var(--lh-tight)" }}>
            {lang === "ar" ? a.ar : a.en}
          </span>
          {(lang === "ar" ? a.arS : a.enS) ? (
            <span style={{ fontSize: "var(--fs-slip-who)", fontWeight: "var(--fw-bold)", color: "var(--text-muted)", textAlign: "center", maxWidth: size + 40 }}>
              {lang === "ar" ? a.arS : a.enS}
            </span>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
