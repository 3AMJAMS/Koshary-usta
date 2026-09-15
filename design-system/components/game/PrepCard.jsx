import React from "react";
import { Meter } from "../hud/Meter.jsx";

/**
 * One batch on the morning prep board: how much is cooked and how good it is.
 * Turns green when it is ready and pulses red when the vat has run dry.
 */
export function PrepCard({
  title, sub, swatch, quality = 0, quantity = 0, servings, state = "idle",
  onClick, style, ...rest
}) {
  const bg = state === "done" ? "var(--surface-prep-done)"
    : state === "empty" ? "var(--surface-prep-empty)"
    : "var(--surface-row)";
  return (
    <button
      type="button"
      data-ks-press="prep"
      onClick={onClick}
      style={{
        position: "relative", overflow: "hidden", textAlign: "start",
        background: bg,
        border: "var(--outline-ink)",
        borderRadius: "var(--radius-prep)",
        padding: "var(--pad-prep)",
        boxShadow: "var(--shadow-up)",
        fontFamily: "var(--font-ui)", color: "var(--text-body)",
        animation: state === "empty" ? "ks-prep-warn var(--dur-prep-warn) infinite" : undefined,
        ...style
      }}
      {...rest}
    >
      <div data-ks-display="" style={{
        fontSize: "var(--fs-prep-title)", color: "var(--text-head)",
        lineHeight: "var(--lh-snug)"
      }}>{title}</div>
      {sub ? (
        <div style={{
          fontSize: "var(--fs-prep-sub)", color: "#C6B098",
          margin: "var(--space-2) 0 var(--space-5)", fontWeight: "var(--fw-bold)"
        }}>{sub}</div>
      ) : null}
      <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
        <Meter value={quantity} color="var(--brass)" />
        <span data-ks-numeric="" style={{ fontSize: "var(--fs-prep-qty)", fontWeight: "var(--fw-bold)", minWidth: "30px", textAlign: "end" }}>
          {servings != null ? servings : Math.round(quantity) + "%"}
        </span>
      </div>
      <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center", marginTop: "var(--space-4)" }}>
        <Meter value={quality} color="var(--good)" />
        <span data-ks-numeric="" style={{ fontSize: "var(--fs-prep-qty)", fontWeight: "var(--fw-bold)", minWidth: "30px", textAlign: "end" }}>
          {Math.round(quality)}%
        </span>
      </div>
      {swatch ? (
        <span aria-hidden="true" style={{
          position: "absolute", top: "var(--space-7)", insetInlineEnd: "var(--space-7)",
          width: "15px", height: "15px", borderRadius: "50%",
          background: swatch, border: "1.5px solid rgba(255,255,255,.25)"
        }} />
      ) : null}
    </button>
  );
}
