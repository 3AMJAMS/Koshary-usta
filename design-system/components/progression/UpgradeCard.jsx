import React from "react";

/**
 * A row in the kit-and-fittings shop. Icon tile, name, one sentence of real
 * consequence, and a price button. Owned rows dim; locked rows desaturate.
 */
export function UpgradeCard({
  icon, title, description, price, state = "buy", buyLabel, ownedLabel, cantLabel,
  onBuy, style, ...rest
}) {
  const owned = state === "owned";
  const locked = state === "locked";
  const cant = state === "cant";
  return (
    <div
      {...(owned ? { "data-ks-state": "owned" } : locked ? { "data-ks-state": "locked" } : {})}
      style={{
        display: "flex", gap: "var(--gap-up)", alignItems: "flex-start",
        background: "var(--surface-row)",
        borderRadius: "var(--radius-up)",
        padding: "var(--pad-up)",
        marginBottom: "var(--space-8)",
        border: "var(--outline-ink)",
        boxShadow: "var(--shadow-up)",
        ...style
      }}
      {...rest}
    >
      <div style={{
        flex: "0 0 var(--size-upico)", height: "var(--size-upico)",
        borderRadius: "var(--radius-upico)", display: "grid", placeItems: "center",
        background: "var(--surface-upico)", border: "var(--outline-ink)",
        fontSize: "22px"
      }}>{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div data-ks-display="" style={{
          fontSize: "var(--fs-up-title)", color: "var(--text-head)", lineHeight: "var(--lh-snug)"
        }}>{title}</div>
        {description ? (
          <div style={{
            fontSize: "var(--fs-up-desc)", color: "var(--text-muted)",
            lineHeight: "var(--lh-slip)", marginTop: "var(--space-1)"
          }}>{description}</div>
        ) : null}
      </div>
      <button
        type="button"
        data-ks-press="upbuy"
        disabled={owned || locked || cant}
        onClick={onBuy}
        style={{
          flex: "0 0 auto", alignSelf: "center",
          minWidth: "var(--size-upbuy-w)", minHeight: "var(--size-upbuy-h)",
          borderRadius: "var(--radius-upbuy)", border: "var(--outline-ink)",
          fontFamily: "var(--font-ui)", fontWeight: "var(--fw-black)",
          fontSize: "var(--fs-upbuy)",
          background: owned ? "var(--surface-ok)" : (locked || cant) ? "var(--surface-disabled)" : "linear-gradient(180deg, var(--brass-hi), var(--brass))",
          color: owned ? "var(--text-ok)" : (locked || cant) ? "var(--text-disabled)" : "var(--text-on-brass)",
          boxShadow: "var(--shadow-upbuy)"
        }}
      >
        {owned ? (ownedLabel || "Owned") : cant ? (cantLabel || "Short") : (
          <span data-ks-numeric="">{price != null ? price : buyLabel || "Buy"}</span>
        )}
      </button>
    </div>
  );
}
