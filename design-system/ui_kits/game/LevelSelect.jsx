const { Button, Icon, KS_ICONS, Badge, Panel, LevelNode, EventBanner, StatReadout } = window.KosharyUstaDesignSystem_f12ad9;

const LEVELS = [
  { n: 1, en: "First morning", ar: "أول صباح", state: "cleared", stars: 3 },
  { n: 2, en: "Market day", ar: "يوم السوق", state: "cleared", stars: 2 },
  { n: 3, en: "Quiet morning", ar: "صباح هادي", state: "cleared", stars: 3 },
  { n: 4, en: "Lunch rush", ar: "زحمة الضهر", state: "available", stars: 0, event: true },
  { n: 5, en: "Tour bus", ar: "أتوبيس سياحة", state: "locked", stars: 0 },
  { n: 6, en: "The critic", ar: "الناقد", state: "locked", stars: 0 }
];

const LS = {
  en: { chapter: "Chapter 2", place: "Sayeda Zeinab", back: "Back", start: "Start Shift", event: "Friday rush", detail: "The queue fills twice as fast. Keep the rice vat topped up.", mod: "−20% patience", money: "Pounds", rep: "Rep" },
  ar: { chapter: "الفصل الثاني", place: "السيدة زينب", back: "رجوع", start: "ابدأ الورديّة", event: "زحمة الجمعة", detail: "الطابور بيمتلي بسرعة الضعف. خلي حلة الرز مليانة.", mod: "−٢٠٪ صبر", money: "جنيه", rep: "السمعة" }
};

function LevelSelect({ lang, setLang, onBack, onStart }) {
  const t = LS[lang];
  const rtl = lang === "ar";
  const [sel, setSel] = React.useState(4);
  return (
    <div dir={rtl ? "rtl" : "ltr"} style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,#6b4324,#3a2317)" }}>
      <StreetBackdrop />
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", zIndex: 2 }}>
        <header style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", padding: "var(--space-7) var(--space-9)" }}>
          <Button variant="quiet" size="sm" onClick={onBack} icon={<i className="ph-fill ph-arrow-left" data-ks-flip />}>{t.back}</Button>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ font: `400 ${rtl ? 34 : 32}px/1.1 var(--font-display)`, color: "var(--cream-50)" }}>{t.chapter}</span>
            <span style={{ font: `var(--fw-semibold) var(--fs-caption)/1 var(--font-ui)`, color: "var(--cream-300)", letterSpacing: "var(--ls-wide)" }}>{t.place}</span>
          </div>
          <div style={{ marginInlineStart: "auto", display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
            <StatReadout icon={<Icon name={KS_ICONS.money} />} label={t.money} value="1,240" />
            <StatReadout icon={<Icon name={KS_ICONS.reputation} />} label={t.rep} value="4.6" tone="herb" />
            <LangToggle lang={lang} onChange={setLang} />
          </div>
        </header>
        <div style={{ flex: 1, position: "relative", padding: "0 var(--space-9)" }}>
          {/* the quarter, drawn on a pasted paper map — node labels need a light ground */}
          <div style={{ position: "relative", height: "100%", borderRadius: "var(--radius-panel)", background: "linear-gradient(180deg, var(--cream-100), var(--cream-300))", border: "3px solid var(--cream-500)", boxShadow: "var(--shadow-rim), var(--shadow-3)", overflow: "hidden" }}>
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 70% at 50% 40%, transparent 55%, rgba(120,79,45,.16))" }} />
          {/* the path: a worn chalk line through the quarter */}
          <svg aria-hidden="true" viewBox="0 0 1120 260" preserveAspectRatio="none" style={{ position: "absolute", insetBlockStart: "54px", insetInline: "24px", height: "260px", width: "calc(100% - 48px)" }}>
              <path d="M60 180 C 200 60, 300 220, 430 130 S 660 40, 790 150 S 980 210, 1060 110" fill="none" stroke="rgba(120,79,45,.34)" strokeWidth="5" strokeDasharray="14 12" strokeLinecap="round" />
            </svg>
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "var(--space-7) var(--space-6) 0" }}>
            {LEVELS.map((l, i) => (
              <div key={l.n} style={{ transform: `translateY(${[54, 0, 96, 24, 74, 10][i]}px)` }}>
                <LevelNode number={rtl ? ["١", "٢", "٣", "٤", "٥", "٦"][i] : l.n} title={lang === "ar" ? l.ar : l.en}
                  titleAr={lang === "ar" ? null : l.ar} state={l.state} stars={l.stars}
                  event={l.event ? <i className="ph-fill ph-megaphone" /> : null}
                  onClick={() => l.state !== "locked" && setSel(l.n)}
                  style={sel === l.n && l.state !== "locked" ? { filter: "drop-shadow(0 0 16px rgba(227,176,75,.75))" } : null} />
              </div>
            ))}
            </div>
          </div>
        </div>
        <footer style={{ display: "flex", alignItems: "center", gap: "var(--space-7)", padding: "var(--space-7) var(--space-9) var(--space-9)" }}>
          <EventBanner tone="hazard" icon={<Icon name={KS_ICONS.event} />} title={t.event} detail={t.detail} modifier={t.mod} style={{ flex: 1 }} />
          <Button variant="brass" size="lg" onClick={onStart} icon={<Icon name={KS_ICONS.bowl} size="md" />} style={{ whiteSpace: "nowrap" }}>{t.start}</Button>
        </footer>
      </div>
    </div>
  );
}

Object.assign(window, { LevelSelect });
