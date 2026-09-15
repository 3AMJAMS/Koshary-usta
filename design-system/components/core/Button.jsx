import React from "react";

const FACE = {
  brass: { background: "var(--btn-brass)", color: "var(--text-on-brass)" },
  ghost: { background: "var(--btn-ghost)", color: "#FFEBCD" },
  hot:   { background: "var(--btn-hot)", color: "#FFF3E6" },
  go:    { background: "var(--btn-go)", color: "#0E2E19" }
};

/**
 * The dock button. Brass by default; ghost for secondary, hot to refuse a
 * customer, go to confirm. Presses down 4px and the ink slab collapses.
 */
export function Button({
  variant = "brass", wide = false, block = false, pulse = false,
  disabled = false, sub, children, style, ...rest
}) {
  const face = FACE[variant] || FACE.brass;
  return (
    <button
      type="button"
      data-ks-press=""
      disabled={disabled}
      style={{
        flex: block ? "1 1 100%" : wide ? 2 : 1,
        minHeight: "var(--size-btn)",
        borderRadius: "var(--radius-btn)",
        border: "var(--outline-ink)",
        fontFamily: "var(--font-ui)",
        fontWeight: "var(--fw-black)",
        fontSize: "var(--fs-btn)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: sub ? "column" : "row",
        gap: "var(--space-4)", padding: "0 var(--space-7)",
        boxShadow: "var(--shadow-btn)",
        opacity: disabled ? 0.42 : 1,
        animation: pulse ? "ks-btn-pulse var(--dur-btn-pulse) infinite" : undefined,
        ...face, ...style
      }}
      {...rest}
    >
      <span>{children}</span>
      {sub ? (
        <small style={{ display: "block", fontSize: "var(--fs-btn-sub)", fontWeight: "var(--fw-bold)", opacity: 0.8, marginTop: "-2px" }}>{sub}</small>
      ) : null}
    </button>
  );
}
