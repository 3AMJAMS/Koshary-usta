import React from "react";

/** The one-line paper confirmation that slides up over the dock. */
export function Toast({ open = false, children, style, ...rest }) {
  return (
    <div
      role="status"
      style={{
        background: "var(--paper)",
        border: "var(--outline-ink)",
        borderRadius: "var(--radius-pill)",
        padding: "var(--pad-toast)",
        fontSize: "var(--fs-toast)", fontWeight: "var(--fw-black)",
        color: "var(--ink)", textAlign: "center", maxWidth: "86vw",
        boxShadow: "var(--shadow-toast)",
        opacity: open ? 1 : 0,
        transform: open ? "translateY(-6px) scale(1)" : "scale(.8)",
        transition: "opacity var(--dur-fade), transform var(--dur-balloon) var(--ease-spring-pop)",
        pointerEvents: "none",
        ...style
      }}
      {...rest}
    >{children}</div>
  );
}
