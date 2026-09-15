const { Button, Icon, KS_ICONS, Badge, StarRating } = window.KosharyUstaDesignSystem_f12ad9;

const T = {
  en: { play: "Start Shift", cont: "Continue", shop: "Shop", tagline: "Run the busiest koshary counter in Cairo.", day: "Day 7 · Sayeda Zeinab", best: "Best day" },
  ar: { play: "ابدأ الورديّة", cont: "كمّل", shop: "المحل", tagline: "شغّل أشهر عربية كشري في القاهرة.", day: "اليوم ٧ · السيدة زينب", best: "أحسن يوم" }
};

function TitleScreen({ lang, setLang, onPlay, onShop }) {
  const t = T[lang];
  const rtl = lang === "ar";
  return (
    <div dir={rtl ? "rtl" : "ltr"} style={{ position: "absolute", inset: 0 }}>
      <StreetBackdrop />
      <ShopDressing />
      <div style={{ position: "absolute", insetBlockStart: "var(--space-7)", insetInlineEnd: "var(--space-8)", zIndex: 3 }}>
        <LangToggle lang={lang} onChange={setLang} />
      </div>
      <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", zIndex: 2 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-8)" }}>
          <div style={{ textAlign: "center", lineHeight: 0.9, textShadow: "0 6px 0 rgba(94,36,18,.55), 0 18px 40px rgba(0,0,0,.5)" }}>
            {rtl ? (
              <div style={{ font: `400 108px/1.12 var(--font-display)`, color: "var(--cream-50)" }}>كشري <span style={{ color: "var(--brass-300)" }}>أسطى</span></div>
            ) : (
              <>
                <div style={{ font: `400 96px/1 var(--font-display)`, color: "var(--cream-50)" }}>Koshary</div>
                <div style={{ font: `400 96px/1 var(--font-display)`, color: "var(--brass-300)" }}>Usta</div>
              </>
            )}
          </div>
          <p style={{ margin: 0, font: `var(--fw-semibold) var(--fs-body-lg)/${rtl ? 1.7 : 1.45} var(--font-ui)`, color: "var(--cream-200)", textAlign: "center", maxWidth: "520px" }}>{t.tagline}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", width: "300px", marginBlockStart: "var(--space-4)" }}>
            <Button variant="brass" size="lg" block onClick={onPlay} icon={<Icon name={KS_ICONS.bowl} size="md" />}>{t.play}</Button>
            <div style={{ display: "flex", gap: "var(--space-5)" }}>
              <Button variant="quiet" block onClick={onPlay}>{t.cont}</Button>
              <Button variant="quiet" block onClick={onShop} icon={<Icon name={KS_ICONS.shop} size="sm" />}>{t.shop}</Button>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", marginBlockStart: "var(--space-6)" }}>
            <Badge tone="night">{t.day}</Badge>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-3)", whiteSpace: "nowrap", font: `var(--fw-semibold) var(--fs-caption)/1 var(--font-ui)`, color: "var(--cream-300)" }}>
              {t.best} <StarRating value={3} size={16} />
            </span>
          </div>
        </div>
      </div>
      {/* counter lip: the title sits behind the shop, not on a flat poster */}
      <div aria-hidden="true" style={{
        position: "absolute", insetBlockEnd: 0, insetInline: 0, height: "76px",
        background: "linear-gradient(180deg,#a8703f,var(--surface-counter))",
        borderBlockStart: "4px solid #5e3a1c", boxShadow: "0 -14px 40px rgba(0,0,0,.45)"
      }} />
    </div>
  );
}

Object.assign(window, { TitleScreen });
