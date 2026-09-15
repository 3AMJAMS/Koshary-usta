import React from "react";

const TONE = {
  good:    "var(--text-pos)",
  perfect: "var(--brass-hi)",
  kemala:  "var(--good)",
  combo:   "var(--combo)",
  warn:    "var(--warn)",
  spill:   "var(--bad)"
};

/**
 * The floating judgement pop. Ink-stroked display type that punches up, holds
 * a beat, then drifts away. `big` for the ones that matter.
 */
export function ServeFeedback({ kind = "good", children, big = false, style, ...rest }) {
  return (
    <span
      data-ks-display=""
      data-ks-outline=""
      style={{
        fontFamily: "var(--font-display)",
        fontSize: big ? "var(--fs-pop-big)" : "var(--fs-pop)",
        color: TONE[kind] || "#fff",
        WebkitTextStroke: (big ? "var(--stroke-pop-big)" : "var(--stroke-pop)") + " var(--ink)",
        paintOrder: "stroke fill",
        textShadow: "0 3px 0 rgba(0,0,0,.35)",
        whiteSpace: "nowrap", pointerEvents: "none",
        animation: "ks-pop-up var(--dur-pop) var(--ease-pop-score) forwards",
        ...style
      }}
      {...rest}
    >{children}</span>
  );
}
