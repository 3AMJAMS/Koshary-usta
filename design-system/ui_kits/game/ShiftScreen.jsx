const { Button, Icon, KS_ICONS, Badge, Panel, StatReadout, ComboMeter, EventBanner, PatienceMeter, CustomerCard, OrderTicket, IngredientVat, KosharyBowl, ServeFeedback } = window.KosharyUstaDesignSystem_f12ad9;

// mirrors patienceTone() in components/hud/PatienceMeter.jsx (lowercase exports
// aren't on the bundle namespace, so the thresholds are repeated here)
const toneFor = (p) => (p > 60 ? "var(--state-good)" : p > 30 ? "var(--state-warn)" : "var(--state-fail)");

const VATS = ["rice", "lentils", "pasta", "chickpeas", "sauce", "onion", "daqqa", "shatta"];

const QUEUE = [
  { id: 1, en: "Office worker", ar: "موظف", icon: "office", patience: 62, order: [{ key: "rice", qty: 2 }, { key: "lentils", qty: 1 }, { key: "pasta", qty: 1 }, { key: "sauce", qty: 1 }], note: { en: "Extra onion", ar: "بصل زيادة" } },
  { id: 2, en: "Tourist", ar: "سائح", icon: "tourist", patience: 88, order: [{ key: "rice", qty: 1 }, { key: "chickpeas", qty: 2 }, { key: "sauce", qty: 1 }], badge: { en: "First time", ar: "أول مرة" } },
  { id: 3, en: "Regular", ar: "زبون دايم", icon: "regular", patience: 47, order: [{ key: "rice", qty: 3 }, { key: "lentils", qty: 2 }, { key: "onion", qty: 1 }, { key: "shatta", qty: 1 }] },
  { id: 4, en: "Family", ar: "عيلة", icon: "family", patience: 74, order: [{ key: "rice", qty: 2 }, { key: "pasta", qty: 2 }, { key: "sauce", qty: 2 }, { key: "onion", qty: 1 }] },
  { id: 5, en: "Critic", ar: "ناقد", icon: "critic", patience: 30, order: [{ key: "rice", qty: 2 }, { key: "lentils", qty: 1 }, { key: "daqqa", qty: 1 }], note: { en: "No shatta", ar: "من غير شطة" }, badge: { en: "Critic", ar: "ناقد" } }
];

const S = {
  en: { money: "Pounds", rep: "Rep", left: "Orders", pause: "Pause", serve: "Serve", kemala: "Kemala", clear: "Clear bowl", event: "Friday rush", detail: "The queue fills twice as fast. Keep the rice vat topped up.", mod: "−20% patience", ticket: "Now serving", empty: "Scoop from the vats to build the bowl." },
  ar: { money: "جنيه", rep: "السمعة", left: "طلبات", pause: "وقفة", serve: "قدّم", kemala: "كمالة", clear: "فضّي الطبق", event: "زحمة الجمعة", detail: "الطابور بيمتلي بسرعة الضعف. خلي حلة الرز مليانة.", mod: "−٢٠٪ صبر", ticket: "بنحضّر دلوقتي", empty: "اغرف من الحلل عشان تبني الطبق." }
};

function moodFor(p) { return p > 80 ? "delighted" : p > 60 ? "happy" : p > 40 ? "neutral" : p > 20 ? "impatient" : "annoyed"; }

function ShiftScreen({ lang, setLang, onPause, onFinish }) {
  const t = S[lang];
  const rtl = lang === "ar";
  const [queue, setQueue] = React.useState(QUEUE);
  const [bowl, setBowl] = React.useState([]);
  const [money, setMoney] = React.useState(1240);
  const [streak, setStreak] = React.useState(3);
  const [beat, setBeat] = React.useState(0);
  const [pop, setPop] = React.useState(null);
  const [armed, setArmed] = React.useState("rice");
  const active = queue[0];

  // the rhythm clock: one beat every 900ms, scooping near the top of it is "perfect"
  React.useEffect(() => {
    const id = setInterval(() => setBeat((b) => (b + 0.08) % 1), 72);
    return () => clearInterval(id);
  }, []);
  React.useEffect(() => {
    const id = setInterval(() => setQueue((q) => q.map((c, i) => ({ ...c, patience: Math.max(0, c.patience - (i === 0 ? 0.9 : 0.35)) }))), 1000);
    return () => clearInterval(id);
  }, []);

  const need = React.useMemo(() => {
    if (!active) return [];
    return active.order.map((l) => ({ ...l, filled: bowl.filter((b) => b.key === l.key).length }));
  }, [active, bowl]);
  const over = need.some((l) => l.filled > l.qty) || bowl.some((b) => !active?.order.find((l) => l.key === b.key));
  const done = need.every((l) => l.filled >= l.qty) && !over;

  function flash(kind, value) {
    setPop({ kind, value, at: Date.now() });
    setTimeout(() => setPop((p) => (p && p.at === Date.now() ? null : p)), 900);
  }
  function scoop(key) {
    const onBeat = beat < 0.22 || beat > 0.86;
    setArmed(key);
    setBowl((b) => [...b, { key }]);
    const spill = bowl.filter((x) => x.key === key).length >= (active?.order.find((l) => l.key === key)?.qty ?? 0);
    if (spill) { setStreak(0); flash("spill", null); }
    else if (onBeat) { setStreak((s) => s + 1); flash("perfect", `+${8 + streak * 2}`); }
    else { setStreak(0); flash("good", "+5"); }
  }
  function kemala() { setBowl((b) => [...b, { key: "onion" }]); setStreak((s) => s + 1); flash("kemala", "+15"); }
  function serve() {
    if (!active) return;
    const mult = streak >= 6 ? 2 : streak >= 3 ? 1.5 : 1;
    if (over) { flash("miss", null); setStreak(0); }
    else { setMoney((m) => m + Math.round(34 * mult)); flash("perfect", `+${Math.round(34 * mult)}`); }
    setBowl([]);
    setQueue((q) => q.slice(1));
  }

  // the shift ends when the last customer walks off
  React.useEffect(() => { if (!queue.length) { const id = setTimeout(onFinish, 800); return () => clearTimeout(id); } }, [queue.length, onFinish]);

  const multiplier = streak >= 6 ? 2 : streak >= 3 ? 1.5 : 1;

  return (
    <div dir={rtl ? "rtl" : "ltr"} style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <StreetBackdrop />
      <ShopDressing />
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", zIndex: 2 }}>
        {/* HUD bar — pinned, never more than four readouts */}
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-5)", padding: "var(--space-5) var(--space-7)" }}>
          <StatReadout icon={<Icon name={KS_ICONS.money} />} label={t.money} value={money.toLocaleString("en-US")} bump />
          <StatReadout icon={<Icon name={KS_ICONS.reputation} />} label={t.rep} value="4.6" tone="herb" />
          <StatReadout icon={<Icon name={KS_ICONS.ticket} />} label={t.left} value={queue.length} tone="clay" />
          <div style={{ marginInlineStart: "auto", display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
            <ComboMeter streak={streak} multiplier={multiplier} beat={beat} />
            <LangToggle lang={lang} onChange={setLang} />
            <Button variant="quiet" size="sm" onClick={onPause} icon={<Icon name={KS_ICONS.pause} size="sm" />} />
          </div>
        </div>
        <div style={{ padding: "0 var(--space-7)" }}>
          <EventBanner tone="hazard" icon={<Icon name={KS_ICONS.event} />} title={t.event} detail={t.detail} modifier={t.mod} />
        </div>
        {/* queue — flows along the top third, tickets live at the counter */}
        <div style={{ display: "flex", gap: "var(--space-5)", padding: "var(--space-6) var(--space-7) 0" }}>
          {queue.map((c, i) => (
            <CustomerCard key={c.id} compact selected={i === 0} archetype={lang === "ar" ? c.ar : c.en} archetypeAr={lang === "ar" ? null : c.ar}
              mood={moodFor(c.patience)} patience={c.patience}
              badge={c.badge ? <Badge tone={c.id === 5 ? "fail" : "brass"} size="sm">{lang === "ar" ? c.badge.ar : c.badge.en}</Badge> : null}
              portrait={<Icon name={KS_ICONS[c.icon]} size="44px" color="var(--char-500)" />} />
          ))}
        </div>
        {/* counter: a worn tiled slab. Vats and ticket labels are ink, so they need a light ground. */}
        <div style={{ marginBlockStart: "auto", position: "relative", borderBlockStart: "5px solid #8a5a2e", background: "linear-gradient(180deg, var(--cream-200), var(--cream-400))", boxShadow: "0 -18px 48px rgba(0,0,0,.5), inset 0 8px 18px rgba(255,255,255,.5)" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.5, backgroundImage: "linear-gradient(rgba(120,79,45,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(120,79,45,.16) 1px, transparent 1px)", backgroundSize: "58px 58px" }} />
          <div style={{ position: "relative", display: "flex", alignItems: "flex-end", gap: "var(--space-6)", padding: "var(--space-7) var(--space-7) var(--space-8)", minHeight: "278px" }}>
          {active ? (
            <OrderTicket index={1} archetype={lang === "ar" ? active.ar : active.en} items={need}
              note={active.note ? (lang === "ar" ? active.note.ar : active.note.en) : null} noteTone="warn" lang={lang}
              tone={toneFor(active.patience)} state={over ? "failed" : done ? "perfect" : "open"} style={{ width: "220px" }} />
          ) : null}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, auto)", gap: "var(--space-4) var(--space-4)", alignItems: "end" }}>
            {VATS.map((k) => {
              const line = active?.order.find((l) => l.key === k);
              const filled = bowl.filter((b) => b.key === k).length;
              return (
                <IngredientVat key={k} ingredient={k} level={62 + (k.length * 7) % 32}
                  steam={k === "rice" || k === "lentils" || k === "pasta" || k === "sauce"}
                  active={armed === k && !!line} overfill={!!line && filled > line.qty}
                  count={filled || null} lang={lang} onScoop={() => scoop(k)} />
              );
            })}
          </div>
          <div style={{ position: "relative", marginInlineStart: "auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)", padding: "var(--space-5) var(--space-6) var(--space-5)", borderRadius: "var(--radius-panel)", background: "linear-gradient(180deg, rgba(36,22,17,.14), rgba(36,22,17,.24))", boxShadow: "var(--shadow-sunken)" }}>
            {pop ? <div style={{ position: "absolute", insetBlockStart: "-58px", zIndex: 5 }}><ServeFeedback kind={pop.kind} value={pop.value} bilingual={rtl} /></div> : null}
            <KosharyBowl size={188} layers={bowl.length ? bowl : []} steam={bowl.length > 0} overfill={over} />
            {!bowl.length ? <span style={{ font: "var(--fw-semibold) var(--fs-caption)/1.4 var(--font-ui)", color: "var(--cream-100)", maxWidth: "180px", textAlign: "center", textShadow: "0 1px 2px rgba(36,22,17,.55)" }}>{t.empty}</span> : null}
            <div style={{ display: "flex", gap: "var(--space-4)" }}>
              <Button variant="quiet" size="sm" onClick={kemala} icon={<Icon name={KS_ICONS.kemala} size="sm" />}>{t.kemala}</Button>
              <Button variant={done ? "brass" : "primary"} onClick={serve} icon={<Icon name={KS_ICONS.serve} size="sm" />}>{t.serve}</Button>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" style={{ position: "absolute", insetBlockEnd: 0, insetInline: 0, height: "18px", background: "linear-gradient(180deg,#a8703f,var(--surface-counter))", borderBlockStart: "3px solid #5e3a1c", zIndex: 3 }} />
    </div>
  );
}

Object.assign(window, { ShiftScreen });
