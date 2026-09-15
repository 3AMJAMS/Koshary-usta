import React from "react";
import { ING, nameOf } from "./OrderTicket.jsx";

/** Steel for the boiled things, a shallow tray for the onions. */
const VESSEL = {
  vat:   { h: 78, lip: 12, radius: "var(--radius-up)" },
  pot:   { h: 66, lip: 11, radius: "var(--radius-up)" },
  sauce: { h: 58, lip: 10, radius: "var(--radius-upico)" },
  tray:  { h: 40, lip: 8,  radius: "var(--radius-upico)" }
};

/**
 * A CSS STAND-IN for a canvas-drawn vessel. The shipping game paints every
 * vat, pot, sauce jug and onion tray on the canvas with an ink outline, a
 * steel rim highlight and per-grain fill. Use this in mockups and static
 * cards; read the canvas for the real thing.
 */
export function IngredientVat({
  ingredient = "ruz", level = 100, steam = true, active = false, empty = false,
  count, label, lang = "ar", onScoop, style, ...rest
}) {
  const ing = ING[ingredient] || ING.ruz;
  const v = VESSEL[ing.vessel] || VESSEL.vat;
  const pct = Math.max(0, Math.min(100, level));
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-3)", ...style }}>
      <div
        {...(onScoop ? { "data-ks-press": "prep", role: "button", tabIndex: 0, onClick: onScoop } : {})}
        style={{
          position: "relative", width: "72px", height: v.h,
          borderRadius: v.radius,
          border: "var(--outline-ink)",
          background: "linear-gradient(180deg, var(--steel-hi) 0%, var(--steel) 22%, var(--steel-lo) 78%, var(--steel-dk) 100%)",
          boxShadow: active ? "var(--shadow-up), 0 0 0 3px var(--brass)" : "var(--shadow-up)",
          overflow: "hidden",
          animation: empty ? "ks-prep-warn var(--dur-prep-warn) infinite" : undefined
        }}
      >
        {/* contents, filling from the bottom */}
        <div aria-hidden="true" style={{
          position: "absolute", insetInline: "4px", bottom: "4px",
          height: "calc(" + pct + "% - 8px)",
          minHeight: pct > 0 ? "6px" : 0,
          borderRadius: "0 0 " + v.radius + " " + v.radius,
          background: "linear-gradient(180deg, " + ing.col + ", " + ing.col2 + ")",
          transition: "height var(--dur-meter) var(--ease-spring-meter)"
        }}>
          {/* the grain overlay is what stops food reading as a colour block */}
          <span style={{
            position: "absolute", inset: 0, opacity: 0.5, mixBlendMode: "multiply",
            backgroundImage: "radial-gradient(" + ing.col2 + " 1px, transparent 1.4px)",
            backgroundSize: ing.vessel === "sauce" ? "10px 10px" : "6px 6px"
          }} />
        </div>
        {/* steel lip */}
        <div aria-hidden="true" style={{
          position: "absolute", insetInline: 0, top: 0, height: v.lip,
          background: "linear-gradient(180deg, var(--steel-hi), var(--steel-lo))",
          borderBottom: "var(--outline-ink-thin)"
        }} />
        {steam ? (
          <div aria-hidden="true" style={{ position: "absolute", insetInline: 0, top: "-18px", height: "24px", pointerEvents: "none" }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                position: "absolute", insetInlineStart: 14 + i * 18 + "px", bottom: 0,
                width: "13px", height: "13px", borderRadius: "50%",
                background: "var(--daqqa)", filter: "blur(4px)", opacity: 0
              }} />
            ))}
          </div>
        ) : null}
        {count != null ? (
          <span data-ks-numeric="" style={{
            position: "absolute", insetInlineEnd: "4px", bottom: "4px",
            fontSize: "var(--fs-prep-qty)", fontWeight: "var(--fw-black)",
            color: "var(--ink)", background: "var(--brass-hi)",
            border: "var(--outline-ink-thin)", borderRadius: "var(--radius-pill)",
            padding: "0 5px"
          }}>{count}</span>
        ) : null}
      </div>
      <span style={{
        fontSize: "var(--fs-prep-sub)", fontWeight: "var(--fw-bold)",
        color: empty ? "var(--text-no)" : "var(--text-head)", textAlign: "center", whiteSpace: "nowrap"
      }}>{label || nameOf(ingredient, lang)}</span>
    </div>
  );
}
