import React from "react";

/** The ink-gapped stack of label/value rows on every overlay card. */
export function StatRows({ children, style, ...rest }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: "var(--gap-rows)",
      background: "var(--ink)", border: "var(--outline-ink)",
      borderRadius: "var(--radius-rows)", overflow: "hidden",
      margin: "var(--space-9) 0", boxShadow: "var(--shadow-rows)", ...style
    }} {...rest}>{children}</div>
  );
}

/** One row. `total` for the bill line, `pos`/`neg` to colour the number. */
export function StatRow({ label, value, tone, total = false, onClick, style, ...rest }) {
  const valueColor = total ? "var(--brass-hi)"
    : tone === "pos" ? "var(--text-pos)"
    : tone === "neg" ? "var(--text-neg)"
    : "var(--text-value)";
  return (
    <div
      {...(onClick ? { "data-ks-press": "row", role: "button", tabIndex: 0, onClick } : {})}
      style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        gap: "var(--space-7)",
        background: total ? "var(--surface-row-total)" : "var(--surface-row)",
        padding: "var(--pad-row)",
        fontSize: "var(--fs-row)", fontWeight: "var(--fw-bold)",
        ...style
      }}
      {...rest}
    >
      <span style={{ color: "var(--text-label)" }}>{label}</span>
      <b data-ks-numeric="" style={{ fontWeight: "var(--fw-black)", color: valueColor, fontSize: total ? "var(--fs-chip-value)" : undefined }}>{value}</b>
    </div>
  );
}
