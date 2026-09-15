const { Button, Icon, KS_ICONS, Badge, Panel, StatReadout, UpgradeCard } = window.KosharyUstaDesignSystem_f12ad9;

const UPGRADES = [
  { icon: "rice", en: "Big rice vat", ar: "حلة رز كبيرة", tier: "Equipment", tierAr: "معدات", desc: { en: "Hold twice as much rice, so the lunch rush never dries you out.", ar: "تشيل ضعف الرز، فـ زحمة الضهر عمرها ما تنشّفك." }, price: "320", level: 2, maxLevel: 4 },
  { icon: "kemala", en: "Generous hand", ar: "إيد كريمة", tier: "Skill", tierAr: "مهارة", desc: { en: "Widens the perfect-scoop window by a beat.", ar: "بتوسّع وقت الغرفة المظبوطة بضربة زيادة." }, price: "450", level: 1, maxLevel: 3 },
  { icon: "customer", en: "Prep boy", ar: "صبي التحضير", tier: "Staff", tierAr: "عمالة", desc: { en: "Refills one vat for you between customers.", ar: "بيملالك حلة واحدة بين الزباين." }, price: "780", affordable: false },
  { icon: "shop", en: "Painted awning", ar: "تندة مدهونة", tier: "Shopfront", tierAr: "الواجهة", desc: { en: "Shade out front. Walk-ins wait a little longer before they leave.", ar: "ضل قدام المحل. الزباين بتستنى شوية زيادة قبل ما تمشي." }, owned: true },
  { icon: "shatta", en: "House shatta", ar: "شطة البيت", tier: "Recipe", tierAr: "وصفة", desc: { en: "Regulars tip more when you finish with your own chilli.", ar: "الزباين الدايمة بتبقشش أكتر لما تخلص بشطتك." }, price: "540", affordable: false },
  { icon: "reputation", en: "Signboard", ar: "لافتة", tier: "Shopfront", tierAr: "الواجهة", desc: { en: "One more customer joins the queue each shift.", ar: "زبون زيادة بيدخل الطابور كل وردية." }, price: "260", level: 1, maxLevel: 2 }
];

const SH = {
  en: { title: "The Shop", sub: "Sayeda Zeinab · Day 7", back: "Back", money: "Pounds", buy: "Buy", owned: "Owned", next: "Start Shift" },
  ar: { title: "المحل", sub: "السيدة زينب · اليوم ٧", back: "رجوع", money: "جنيه", buy: "اشتري", owned: "عندك", next: "ابدأ الورديّة" }
};

function ShopScreen({ lang, setLang, onBack, onStart }) {
  const t = SH[lang];
  const rtl = lang === "ar";
  const [money, setMoney] = React.useState(1240);
  const [bought, setBought] = React.useState([]);
  return (
    <div dir={rtl ? "rtl" : "ltr"} style={{ position: "absolute", inset: 0, background: "var(--surface-page)", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(90% 70% at 50% 0%, rgba(227,176,75,.22), transparent 65%)" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", zIndex: 2 }}>
        <header style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", padding: "var(--space-7) var(--space-9) var(--space-5)" }}>
          <Button variant="quiet" size="sm" onClick={onBack} icon={<i className="ph-fill ph-arrow-left" data-ks-flip />}>{t.back}</Button>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ font: `400 ${rtl ? 36 : 34}px/1.1 var(--font-display)`, color: "var(--text-strong)" }}>{t.title}</span>
            <span style={{ font: "var(--fw-semibold) var(--fs-caption)/1 var(--font-ui)", color: "var(--text-muted)", letterSpacing: "var(--ls-wide)" }}>{t.sub}</span>
          </div>
          <div style={{ marginInlineStart: "auto", display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
            <StatReadout icon={<Icon name={KS_ICONS.money} />} label={t.money} value={money.toLocaleString("en-US")} size="lg" bump />
            <LangToggle lang={lang} onChange={setLang} />
          </div>
        </header>
        <div style={{ flex: 1, overflow: "auto", padding: "0 var(--space-9) var(--space-7)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
            {UPGRADES.map((u, i) => {
              const owned = u.owned || bought.includes(i);
              return (
                <UpgradeCard key={i} icon={<Icon name={KS_ICONS[u.icon]} size="lg" />}
                  title={lang === "ar" ? u.ar : u.en} titleAr={lang === "ar" ? null : u.ar}
                  tier={lang === "ar" ? u.tierAr : u.tier}
                  description={lang === "ar" ? u.desc.ar : u.desc.en}
                  price={u.price} owned={owned} affordable={u.affordable !== false}
                  level={u.level} maxLevel={u.maxLevel} buyLabel={owned ? t.owned : t.buy}
                  onBuy={() => { if (!owned && u.affordable !== false) { setBought((b) => [...b, i]); setMoney((m) => m - Number(u.price)); } }} />
              );
            })}
          </div>
        </div>
        <footer style={{ display: "flex", justifyContent: "flex-end", padding: "0 var(--space-9) var(--space-8)" }}>
          <Button variant="brass" size="lg" onClick={onStart} icon={<Icon name={KS_ICONS.bowl} size="md" />}>{t.next}</Button>
        </footer>
      </div>
    </div>
  );
}

Object.assign(window, { ShopScreen });
