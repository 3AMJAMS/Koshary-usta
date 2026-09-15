import React from "react";

const TONE = {
  neutral: { background: "var(--surface-tag)", color: "#F2DFC4" },
  ok:      { background: "var(--surface-ok)", color: "var(--text-ok)" },
  no:      { background: "var(--surface-no)", color: "var(--text-no)" }
};

/** An order component as a pill: what's in the bowl, what's right, what's wrong. */
export function Badge({ tone = "neutral", children, style, ...rest }) {
  const face = TONE[tone] || TONE.neutral;
  return (
    <span
      style={{
        fontSize: "var(--fs-tag)", fontWeight: "var(--fw-bold)",
        padding: "var(--pad-tag)", borderRadius: "var(--radius-pill)",
        border: "var(--outline-ink-thin)", whiteSpace: "nowrap",
        ...face, ...style
      }}
      {...rest}
    >{children}</span>
  );
}
