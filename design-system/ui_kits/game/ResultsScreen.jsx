const { Button, Icon, KS_ICONS, Badge, Panel, StarRating, StatReadout, KosharyBowl } = window.KosharyUstaDesignSystem_f12ad9;

const R = {
  en: { title: "Shift Over", sub: "Day 7 · Lunch rush", served: "Served", perfect: "Perfect bowls", kemala: "Kemala", spilled: "Spilled", best: "Best streak", takings: "Takings", tips: "Tips", total: "Total", retry: "Play Again", shop: "Shop", next: "Next Day", note: "Three regulars came back today. Keep the rice vat full and they will bring friends." },
  ar: { title: "خلصت الورديّة", sub: "اليوم ٧ · زحمة الضهر", served: "اتقدّم", perfect: "أطباق مظبوطة", kemala: "كمالة", spilled: "اتكب", best: "أطول سلسلة", takings: "المبيعات", tips: "بقشيش", total: "الإجمالي", retry: "العب تاني", shop: "المحل", next: "اليوم اللي بعده", note: "تلات زباين دايمين رجعوا النهاردة. خلي حلة الرز مليانة وهيجيبوا صحابهم." }
};

const ROWS = [
  ["served", "ticket", "18", null],
  ["perfect", "perfect", "13", "herb"],
  ["kemala", "kemala", "6", "brass"],
  ["spilled", "spill", "2", "fail"],
  ["best", "combo", "×9", "brass"]
];

function ResultsScreen({ lang, setLang, onRetry, onShop, onNext }) {
  const t = R[lang];
  const rtl = lang === "ar";
  return (
    <div dir={rtl ? "rtl" : "ltr"} style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <StreetBackdrop />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "var(--surface-overlay)" }} />
      <div style={{ position: "absolute", insetBlockStart: "var(--space-7)", insetInlineEnd: "var(--space-8)", zIndex: 4 }}>
        <LangToggle lang={lang} onChange={setLang} />
      </div>
      <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", zIndex: 3 }}>
        <Panel tone="cream" elevation={3} style={{ width: "760px" }} bodyStyle={{ padding: "var(--space-8)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-7)" }}>
            <div style={{ flex: 1 }}>
              <div style={{ font: `400 ${rtl ? 46 : 42}px/1.05 var(--font-display)`, color: "var(--text-strong)" }}>{t.title}</div>
              <div style={{ font: "var(--fw-semibold) var(--fs-caption)/1 var(--font-ui)", color: "var(--text-muted)", letterSpacing: "var(--ls-wide)", marginBlockStart: "6px" }}>{t.sub}</div>
              <div style={{ marginBlockStart: "var(--space-6)" }}><StarRating value={2} showEmpty size={40} /></div>
            </div>
            <KosharyBowl size={150} steam layers={[{ key: "rice", amount: 2 }, { key: "lentils" }, { key: "pasta" }, { key: "chickpeas" }, { key: "sauce" }, { key: "onion" }]} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "var(--space-4)", marginBlockStart: "var(--space-7)" }}>
            {ROWS.map(([k, icon, val, tone]) => (
              <div key={k} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-5) var(--space-3)", borderRadius: "var(--radius-card)", background: "var(--cream-100)", border: "2px solid var(--line-rim)", boxShadow: "var(--shadow-sunken)" }}>
                <Icon name={KS_ICONS[icon]} size="lg" color={tone ? `var(--state-${tone === "herb" ? "good" : tone === "brass" ? "perfect" : "fail"})` : "var(--char-500)"} />
                <span data-ks-numeric style={{ font: "var(--fw-black) var(--fs-title-sm)/1 var(--font-ui)", color: "var(--text-strong)" }}>{val}</span>
                <span style={{ font: "var(--fw-semibold) var(--fs-micro)/1.2 var(--font-ui)", color: "var(--text-muted)", textAlign: "center" }}>{t[k]}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", marginBlockStart: "var(--space-6)", padding: "var(--space-5) var(--space-6)", borderRadius: "var(--radius-card)", background: "linear-gradient(180deg, var(--herb-500), var(--herb-700))", border: "2px solid var(--herb-700)", boxShadow: "var(--shadow-1)" }}>
            <span style={{ font: "var(--fw-semibold) var(--fs-body)/1.5 var(--font-ui)", color: "var(--cream-100)", flex: 1 }}>{t.note}</span>
            <div style={{ display: "flex", gap: "var(--space-5)" }}>
              {[[t.takings, "612"], [t.tips, "148"], [t.total, "760"]].map(([l, v], i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ font: "var(--fw-semibold) var(--fs-micro)/1 var(--font-ui)", color: "rgba(251,240,220,.75)", letterSpacing: "var(--ls-wide)", textTransform: "uppercase" }}>{l}</div>
                  <div data-ks-numeric style={{ font: `var(--fw-black) ${i === 2 ? "var(--fs-title-sm)" : "var(--fs-body-lg)"}/1.2 var(--font-ui)`, color: i === 2 ? "var(--brass-300)" : "var(--cream-50)" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: "var(--space-5)", marginBlockStart: "var(--space-7)" }}>
            <Button variant="quiet" onClick={onRetry} icon={<Icon name={KS_ICONS.back} size="sm" />}>{t.retry}</Button>
            <Button variant="quiet" onClick={onShop} icon={<Icon name={KS_ICONS.shop} size="sm" />}>{t.shop}</Button>
            <Button variant="brass" size="lg" block onClick={onNext} iconEnd={<i className="ph-fill ph-arrow-right" data-ks-flip />}>{t.next}</Button>
          </div>
        </Panel>
      </div>
    </div>
  );
}

Object.assign(window, { ResultsScreen });
