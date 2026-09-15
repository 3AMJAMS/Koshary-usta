import React from "react";

/** Thresholds are fixed game-wide: above 60 good, 60-30 warn, below 30 bad. */
export function patienceColor(pct) {
  return pct > 60 ? "var(--good)" : pct > 30 ? "var(--warn)" : "var(--bad)";
}

/**
 * The current customer's patience, pinned top-inline-end of the stage.
 * Drains linearly — easing a timer reads as lag. Panics below 22%.
 */
export function PatienceMeter({ value = 100, panic, style, ...rest }) {
  const pct = Math.max(0, Math.min(100, value));
  const isPanic = panic == null ? pct <= 22 : panic;
  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        width: "var(--w-patience)", height: "var(--h-patience)",
        background: "var(--surface-well)",
        border: "var(--outline-ink)",
        borderRadius: "var(--radius-pill)",
        overflow: "hidden", boxShadow: "var(--shadow-pat)",
        animation: isPanic ? "ks-patience-panic var(--dur-panic) infinite" : undefined,
        ...style
      }}
      {...rest}
    >
      <i style={{
        display: "block", height: "100%", width: pct + "%",
        background: patienceColor(pct),
        transition: "width var(--dur-patience) linear, background var(--dur-meter)"
      }} />
    </div>
  );
}
