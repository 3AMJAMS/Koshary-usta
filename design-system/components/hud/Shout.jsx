import React from "react";

/**
 * A comic speech balloon from the shop — the customer calling an order in
 * the house language, or the runner shouting it down to the kitchen.
 */
export function Shout({ open = false, children, style, ...rest }) {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: "42%",
        background: "var(--paper)",
        border: "var(--outline-ink)",
        borderRadius: "var(--radius-shout)",
        padding: "var(--pad-shout)",
        fontSize: "var(--fs-shout)", fontWeight: "var(--fw-bold)",
        color: "var(--ink)", textAlign: "center",
        boxShadow: "var(--shadow-shout)",
        opacity: open ? 1 : 0,
        transform: open ? "none" : "scale(.5) translateY(8px)",
        transformOrigin: "bottom right",
        transition: "opacity var(--dur-patience), transform var(--dur-balloon) var(--ease-spring-pop)",
        ...style
      }}
      {...rest}
    >
      {children}
      <span aria-hidden="true" style={{
        position: "absolute", bottom: "-13px", insetInlineEnd: "18px",
        width: 0, height: 0, border: "7px solid transparent",
        borderTopColor: "var(--ink)", borderBottom: 0
      }} />
      <span aria-hidden="true" style={{
        position: "absolute", bottom: "-8px", insetInlineEnd: "21px", zIndex: 1,
        width: 0, height: 0, border: "5px solid transparent",
        borderTopColor: "var(--paper)", borderBottom: 0
      }} />
    </div>
  );
}
