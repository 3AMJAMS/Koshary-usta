import React from "react";

/**
 * The overlay card every non-gameplay screen is built from: title, story
 * beats, shop, day-end. Dark wall gradient, thick ink outline, 7px ink slab.
 */
export function Panel({ eyebrow, title, children, style, bodyStyle, ...rest }) {
  return (
    <section
      style={{
        background: "var(--surface-card)",
        border: "var(--outline-ink)",
        borderRadius: "var(--radius-card)",
        padding: "var(--pad-card)",
        boxShadow: "var(--shadow-card)",
        animation: "ks-card-in var(--dur-card-in) var(--ease-spring-card)",
        ...style
      }}
      {...rest}
    >
      {eyebrow ? (
        <span style={{
          display: "inline-block", fontSize: "var(--fs-eyebrow)", fontWeight: "var(--fw-black)",
          color: "var(--text-on-brass)", marginBottom: "var(--space-4)",
          letterSpacing: ".4px", background: "var(--brass)",
          border: "var(--outline-ink-thin)", borderRadius: "var(--radius-pill)",
          padding: "var(--pad-eyebrow)", boxShadow: "var(--shadow-eyebrow)"
        }}>{eyebrow}</span>
      ) : null}
      {title ? (
        <h2 data-ks-display="" style={{
          fontSize: "var(--fs-card-h2)", margin: "0 0 var(--space-2)",
          color: "var(--text-head)", lineHeight: "var(--lh-display)",
          textShadow: "var(--shadow-text-display)"
        }}>{title}</h2>
      ) : null}
      <div style={bodyStyle}>{children}</div>
    </section>
  );
}

/** Section heading inside a Panel. */
export function PanelHeading({ children, style }) {
  return (
    <h3 data-ks-display="" style={{
      fontSize: "var(--fs-card-h3)", margin: "var(--space-13) 0 var(--space-6)",
      color: "var(--brass-hi)", ...style
    }}>{children}</h3>
  );
}

/** The 2.5px brass-tinted divider used between Panel sections. */
export function PanelRule({ style }) {
  return <div aria-hidden="true" style={{ height: "2.5px", borderRadius: "2px", background: "rgba(255,220,160,.25)", margin: "var(--space-11) 0", ...style }} />;
}
