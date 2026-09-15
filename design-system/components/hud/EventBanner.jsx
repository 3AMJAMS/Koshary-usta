import React from "react";

/**
 * The morning headline — one daily modifier, shown centred over the stage
 * before service starts. Paper card on ink, springs in from 70%.
 */
export function EventBanner({ kicker, title, detail, open = true, style, ...rest }) {
  return (
    <div
      style={{
        width: "min(86%, var(--event-max))",
        background: "var(--paper)",
        border: "var(--outline-ink)",
        borderRadius: "var(--radius-event)",
        padding: "var(--pad-event)",
        textAlign: "center",
        color: "var(--ink)",
        boxShadow: "var(--shadow-event)",
        opacity: open ? 1 : 0,
        transform: open ? "scale(1)" : "scale(.7)",
        transition: "opacity var(--dur-fade), transform var(--dur-event) var(--ease-spring)",
        ...style
      }}
      {...rest}
    >
      {kicker ? (
        <div style={{
          fontSize: "var(--fs-event-kicker)", fontWeight: "var(--fw-black)",
          letterSpacing: "var(--ls-kicker)", color: "#A2620C"
        }}>{kicker}</div>
      ) : null}
      {title ? (
        <div data-ks-display="" style={{
          fontSize: "var(--fs-event)", lineHeight: "var(--lh-display)",
          margin: "var(--space-1) 0 var(--space-2)"
        }}>{title}</div>
      ) : null}
      {detail ? (
        <div style={{
          fontSize: "var(--fs-event-body)", fontWeight: "var(--fw-bold)",
          lineHeight: "var(--lh-body)", opacity: 0.85
        }}>{detail}</div>
      ) : null}
    </div>
  );
}
