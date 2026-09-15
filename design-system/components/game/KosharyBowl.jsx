import React from "react";
import { ING } from "./OrderTicket.jsx";

/**
 * A CSS STAND-IN for the canvas-drawn bowl. The shipping game paints the bowl,
 * every layer and the overfill wobble on the canvas. Use this for static cards
 * and mockups; read the canvas for the real thing.
 *
 * Layers stack bottom-up in the order they were scooped, which is how the
 * player checks their own work against the slip.
 */
export function KosharyBowl({ size = 150, layers = [], steam = false, overfull = false, style, ...rest }) {
  const total = layers.reduce((n, l) => n + (l.amount || 1), 0);
  return (
    <div style={{ position: "relative", width: size, ...style }} {...rest}>
      {overfull ? (
        <span data-ks-display="" data-ks-outline="" style={{
          position: "absolute", insetBlockStart: "-26px", insetInline: 0, textAlign: "center",
          fontSize: "var(--fs-event-body)", color: "var(--bad)",
          WebkitTextStroke: "3px var(--ink)", paintOrder: "stroke fill", whiteSpace: "nowrap"
        }}>OVERFULL!</span>
      ) : null}
      <div style={{
        position: "relative", height: size * 0.52, overflow: "hidden",
        borderRadius: "0 0 " + size * 0.44 + "px " + size * 0.44 + "px",
        border: "var(--outline-ink)",
        background: "linear-gradient(180deg, var(--steel-hi), var(--steel) 34%, var(--steel-lo) 86%, var(--steel-dk))",
        boxShadow: overfull ? "var(--shadow-up), 0 0 0 3px var(--bad)" : "var(--shadow-up)",
        display: "flex", flexDirection: "column-reverse"
      }}>
        {layers.map((l, i) => {
          const ing = ING[l.key];
          if (!ing) return null;
          return (
            <div key={i} style={{
              position: "relative",
              flex: (l.amount || 1),
              background: "linear-gradient(180deg, " + ing.col + ", " + ing.col2 + ")"
            }}>
              <span aria-hidden="true" style={{
                position: "absolute", inset: 0, opacity: 0.45, mixBlendMode: "multiply",
                backgroundImage: "radial-gradient(" + ing.col2 + " 1px, transparent 1.4px)",
                backgroundSize: "6px 6px"
              }} />
            </div>
          );
        })}
        {!total ? (
          <div style={{ flex: 1, background: "rgba(0,0,0,.35)" }} />
        ) : null}
      </div>
      {/* the bowl foot */}
      <div aria-hidden="true" style={{
        width: size * 0.36, height: size * 0.06, margin: "0 auto",
        background: "var(--steel-lo)", border: "var(--outline-ink-thin)",
        borderTop: 0, borderRadius: "0 0 " + size * 0.04 + "px " + size * 0.04 + "px"
      }} />
    </div>
  );
}
