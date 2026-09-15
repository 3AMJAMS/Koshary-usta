import React from "react";

const VALUE_COLOR = { money: "var(--brass-hi)", rep: "var(--ward-hi)" };

/**
 * A HUD chip on the steel rail: cash, reputation, day. `bump` fires the
 * punch-and-tilt when the number changes.
 */
export function StatReadout({ kind = "money", label, value, bump = false, style, ...rest }) {
  return (
    <div
      style={{
        display: "flex", alignItems: "center", gap: "var(--gap-chip)",
        background: "var(--surface-chip)",
        border: "var(--outline-ink-thin)",
        borderRadius: "var(--radius-pill)",
        padding: "var(--pad-chip)",
        fontSize: "var(--fs-chip)", fontWeight: "var(--fw-bold)",
        letterSpacing: "var(--ls-chip)", whiteSpace: "nowrap",
        boxShadow: "var(--shadow-chip)",
        animation: bump ? "ks-chip-bump var(--dur-chip-bump) var(--ease-spring)" : undefined,
        ...style
      }}
      {...rest}
    >
      {label ? <span>{label}</span> : null}
      <b data-ks-numeric="" style={{ fontWeight: "var(--fw-black)", fontSize: "var(--fs-chip-value)", color: VALUE_COLOR[kind] }}>{value}</b>
    </div>
  );
}
