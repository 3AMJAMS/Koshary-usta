const { Button, Icon, KS_ICONS, Badge } = window.KosharyUstaDesignSystem_f12ad9;

const STREET = {
  position: "absolute", inset: 0,
  background: "radial-gradient(120% 90% at 50% 12%, #7a4a28 0%, #4b2e1c 46%, var(--surface-street) 100%)"
};

/** Out-of-focus Cairo shopfront behind everything. Blurred so UI stays legible. */
function StreetBackdrop({ children }) {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <div style={STREET} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, filter: "blur(9px)", opacity: 0.85 }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} style={{
            position: "absolute", insetBlockEnd: `${120 + (i % 3) * 46}px`, insetInlineStart: `${60 + i * 205}px`,
            width: "150px", height: `${210 + (i % 2) * 90}px`, borderRadius: "10px 10px 0 0",
            background: i % 2 ? "linear-gradient(180deg,#6a4126,#3a2317)" : "linear-gradient(180deg,#7d5130,#412818)"
          }} />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={`l${i}`} style={{
            position: "absolute", insetBlockStart: `${90 + (i % 4) * 58}px`, insetInlineStart: `${100 + i * 152}px`,
            width: "26px", height: "26px", borderRadius: "50%",
            background: i % 3 ? "rgba(227,176,75,.75)" : "rgba(226,132,44,.6)", filter: "blur(3px)"
          }} />
        ))}
      </div>
      {/* warm haze + vignette: the scene is lit from the counter, not from above */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(70% 55% at 50% 78%, rgba(227,176,75,.22), transparent 70%)" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 180px 60px rgba(20,11,7,.7)" }} />
      {children}
    </div>
  );
}

/** Hanging rice/pasta sacks and a strung bulb line — the shopfront dressing. */
function ShopDressing() {
  return (
    <div aria-hidden="true" style={{ position: "absolute", insetBlockStart: 0, insetInline: 0, height: "136px", pointerEvents: "none" }}>
      <div style={{ position: "absolute", insetBlockStart: "26px", insetInline: "-10px", height: "3px", background: "rgba(36,22,17,.55)", borderRadius: "2px" }} />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <span key={i} style={{
          position: "absolute", insetBlockStart: "22px", insetInlineStart: `${64 + i * 142}px`,
          width: "12px", height: "12px", borderRadius: "50%", background: "var(--brass-300)",
          boxShadow: "0 0 16px 4px rgba(227,176,75,.55)"
        }} />
      ))}
      {[["rice", 54], ["pasta", 168], ["chickpea", 928], ["lentil", 1042]].map(([k, x], i) => (
        <div key={i} style={{
          position: "absolute", insetBlockStart: "34px", insetInlineStart: `${x}px`, width: "62px", height: "86px",
          borderRadius: "8px 8px 16px 16px",
          background: `linear-gradient(180deg, var(--ing-${k}), var(--ing-${k}-shade))`,
          border: "2px solid rgba(36,22,17,.4)", boxShadow: "var(--shadow-2)", opacity: 0.92
        }}>
          <div style={{ position: "absolute", insetBlockStart: "-7px", insetInline: "14px", height: "12px", borderRadius: "6px", background: "#8d6a44", border: "2px solid rgba(36,22,17,.45)" }} />
        </div>
      ))}
    </div>
  );
}

/** Language switch — present on every screen, top inline-end. */
function LangToggle({ lang, onChange }) {
  return (
    <div style={{ display: "inline-flex", padding: "3px", borderRadius: "var(--radius-pill)", background: "rgba(36,22,17,.62)", border: "2px solid rgba(227,176,75,.42)", gap: "2px" }}>
      {[["en", "EN"], ["ar", "ع"]].map(([k, l]) => (
        <button key={k} data-ks-press onClick={() => onChange(k)} style={{
          minWidth: "46px", minHeight: "34px", border: "none", borderRadius: "var(--radius-pill)", cursor: "pointer",
          background: lang === k ? "linear-gradient(180deg,var(--brass-300),var(--brass-500))" : "transparent",
          color: lang === k ? "var(--char-900)" : "var(--cream-200)",
          font: `var(--fw-bold) var(--fs-body-sm)/1 var(--font-ui)`
        }}>{l}</button>
      ))}
    </div>
  );
}

Object.assign(window, { StreetBackdrop, ShopDressing, LangToggle });
