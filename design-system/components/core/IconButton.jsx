import React from "react";

/** The small square chrome button on the HUD rail: sound, pause, language. */
export function IconButton({ label, children, style, ...rest }) {
  return (
    <button
      type="button"
      data-ks-press="icon"
      aria-label={label}
      style={{
        width: "var(--size-iconbtn)", height: "var(--size-iconbtn)",
        borderRadius: "var(--radius-iconbtn)",
        border: "var(--outline-ink-thin)",
        background: "var(--surface-iconbtn)",
        color: "var(--text-on-ink)",
        fontSize: "var(--fs-iconbtn)", fontWeight: "var(--fw-bold)",
        fontFamily: "var(--font-ui)",
        display: "grid", placeItems: "center", padding: 0,
        boxShadow: "var(--shadow-iconbtn)",
        ...style
      }}
      {...rest}
    >{children}</button>
  );
}
