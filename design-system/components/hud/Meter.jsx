import React from "react";

/**
 * The generic bar used on overlay cards for reputation, batch quality and
 * batch quantity. Springs to its new width rather than sliding linearly —
 * unlike PatienceMeter, which is a timer.
 */
export function Meter({ value = 0, color = "var(--good)", style, barStyle, ...rest }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        height: "var(--h-meter)", borderRadius: "var(--radius-pill)",
        background: "var(--surface-well)", overflow: "hidden",
        border: "var(--outline-ink-thin)", flex: 1, ...style
      }}
      {...rest}
    >
      <i style={{
        display: "block", height: "100%", width: pct + "%",
        borderRadius: "var(--radius-pill)", background: color,
        transition: "width var(--dur-meter) var(--ease-spring-meter)",
        ...barStyle
      }} />
    </div>
  );
}
