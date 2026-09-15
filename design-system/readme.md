# Koshary Usta — Design System

A design system for **Koshary Usta**, a browser cooking/management game by **3AMJamGames** about running an Egyptian koshary counter. The player takes orders from a queue of walk-ins, layers rice, lentils, pasta, chickpeas, sauce and crispy onions into bowls on the beat, tops them up with a bonus *kemala* scoop, and tries not to spill before patience runs out.

This system covers the **visual redesign** of that game: away from the original flat-cartoon look (ink outlines, colour blobs, runtime-drawn shapes) and toward a warm, lived-in Cairo street-food scene — polished mobile/indie cooking sim, somewhere between Cooking Mama's tactility and Overcooked's under-pressure legibility.

---

## Sources & status

| Source | Status |
| --- | --- |
| `github.com/3AMJAMS/Koshary-usta` | **Not read.** GitHub was never connected in this session, so no repository file was accessed. |
| `https://claude.ai/code/artifact/0415c928-06b8-4469-a802-4e828dfbe32a` | **Not readable** — the link is authentication-gated. |
| Written brief (in chat) | **The ground truth used here.** Screens, systems, tone, palette direction and bilingual requirement all come from it. |

Everything in this project was authored from the written brief. It is a **redesign proposal**, not a recreation of the shipping build — the brief explicitly asks to replace the current art direction, so nothing here tries to match the existing flat-cartoon renderer.

> **Connect `3AMJAMS/Koshary-usta`** and the system can be reconciled against the real code: actual screen inventory, actual state machine, actual copy strings, and whatever art or audio the repo already holds. Explore that repository directly for anything you need to build against the real game.

### Known gaps

- **No logo.** No brand mark was supplied, so none was drawn. The brand is set in type (see `guidelines/brand-wordmark.html`). Replace it when a real mark exists.
- **No painted character or environment art.** Illustrated customer portraits and the painted counter are specified in words and held by labelled art slots (`CustomerCard` renders one when `portrait` is absent). The art itself must be commissioned or generated — this system defines the frames, moods, sizes and colour treatment around it.
- **Substituted fonts and icons** — see below. Both are flagged and swappable.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The one entry point consumers link. `@import` lines only. |
| `tokens/` | `colors` · `typography` · `space` · `radius` · `elevation` · `motion` · `ingredients` · `fonts` |
| `parts/` | `keyframes.css` (steam, pop, pulse, shimmer) · `interactions.css` (hover/press/focus, RTL rules) |
| `components/core/` | Button, Panel, Badge, Icon |
| `components/hud/` | StatReadout, PatienceMeter, ComboMeter, EventBanner |
| `components/game/` | CustomerCard, OrderTicket, IngredientVat, KosharyBowl, ServeFeedback |
| `components/progression/` | StarRating, LevelNode, UpgradeCard |
| `ui_kits/game/` | Click-through recreation of the five core screens |
| `templates/game-screen/` | Starting-point template consuming projects can copy |
| `assets/` | Empty — no binaries were supplied. `assets/README.md` says what belongs where. |
| `guidelines/` | 21 foundation specimen cards (Colors, Type, Spacing, Motion, Brand) |
| `thumbnail.html` | Homepage tile |
| `github.md` | Source association for `3AMJAMS/Koshary-usta` (nothing imported yet) |
| `SKILL.md` | Agent-skill wrapper for use outside this project |

---

## Components

Twenty-three primitives, grouped by concern. No source defined a component inventory, so this set is sized to the screens and systems the brief names — one component per thing the player has to read under time pressure.

**Core** — `Button`, `Panel`, `Badge`, `Icon`
**HUD** — `StatReadout`, `PatienceMeter`, `ComboMeter`, `EventBanner`, `StatRows`, `Meter`, `Toast`
**Game** — `CustomerCard`, `OrderTicket`, `IngredientVat`, `KosharyBowl`, `ServeFeedback`, `CustomerFigure`, `PrepCard`, `Shout`, `IconButton`, `ChapterCard`
**Progression** — `StarRating`, `LevelNode`, `UpgradeCard`

Every directory has a `<Name>.jsx`, a `<Name>.d.ts` props contract, a `<Name>.prompt.md` usage note, and one `@dsCard` HTML showing the variants together.

### Intentional additions

- **`Icon`** — a thin wrapper over the Phosphor webfont. Added because the brief asks for setting-specific iconography and no glyph set was supplied; the wrapper pins one glyph per concept in `KS_ICONS` so the mapping lives in one place and can be swapped for bespoke art in a single edit.
- **`KosharyBowl`** — not named in the brief as a UI element, but the layering mini-interaction has no readable target without it. It is the thing the player is actually building.

---

## Content fundamentals

**Voice: a busy colleague, not a narrator.** Short, warm, direct. The game never explains itself twice and never congratulates itself.

**Person.** Second person for instructions and effects — *"Hold twice as much rice, so the lunch rush never dries you out."* First person never appears. The player is *you*; the shop is *yours*.

**Casing.** Title Case for button labels and screen titles (`Start Shift`, `Lunch Rush`). Sentence case for every sentence. ALL CAPS only inside `Badge`, and the component uppercases for you — write badge content in normal case.

**Punctuation.** No terminal full stop on labels, badges, or button text. Effect sentences get one. No exclamation marks except in judgement pops (`Perfect!`, `Kemala!`) — they are earned there and nowhere else.

**Numbers.** Always formatted before they reach a component (`1,240`, `×2`, `4.6`, `−20% patience`). Arabic uses Eastern Arabic numerals in narrative copy (`اليوم ٧`) but Western digits in HUD counters, so a player reading either language sees the same money climb.

**Naming.** Egyptian words stay Egyptian — *koshary*, *kemala*, *daqqa*, *shatta*, *usta*. They are never translated into "bonus scoop" or "hot sauce" in the English build; they are taught by context and by the icon beside them. That is the single strongest piece of flavour the copy has.

**Tone examples**

| Do | Don't |
| --- | --- |
| `Friday rush — The queue fills twice as fast. Keep the rice vat topped up.` | `Warning: Difficulty modifier active (patience -20%)` |
| `Kemala!` | `BONUS x1.5 COMBO ACHIEVED!!!` |
| `Widens the perfect-scoop window by a beat.` | `Increases timing tolerance by 15%.` |
| `Prep boy — Refills one vat for you between customers.` | `Hire Staff Member (Tier 2 Automation)` |

**Emoji: never.** The icon set carries every glyph. Emoji would break both the painted-sign look and the Arabic layout.

**Bilingual writing.** Arabic is Egyptian colloquial, not Modern Standard — *"خلي حلة الرز مليانة"*, not a formal register. It is written natively, never translated word-for-word from English; the two strings are allowed to differ in length and idiom. Layout must survive both (see Mirroring).

---

## Visual foundations

### Colour

Five ramps and a state vocabulary. **Clay** (terracotta) is the primary — awnings, CTAs, title plates. **Cream** is every readable surface: enamelware, paper tickets, tile. **Herb** is deep koshary green — secondary surfaces, success, owned. **Brass** is scarce and precious: coins, stars, *perfect*, *kemala*, and nothing else. **Char** is ink, type, and the night street. **Ember → Chili** carries patience draining, then failing.

One ramp drives every meter, ticket rim, portrait ring and judgement pop (`--state-*`), and the customer mood ramp (`--mood-*`) aliases straight onto it — so a face and a bar can never disagree. Patience thresholds are fixed system-wide: above 60 good, 60–30 warn, below 30 fail plus a pulse.

Ingredients each own a **face + shade pair** (`--ing-rice` / `--ing-rice-shade`). The vat fill, the ticket dot and the bowl layer all read the same pair, so a player learns "brown speckle = lentils" once.

Two background colours carry the whole game: cream for menus, warm wood for the counter. The street behind is a third, always blurred.

### Type

Two families, both bilingual, so Arabic and Latin share one voice.

- **Lalezar** (`--font-display`) — the title, level numbers, judgement pops. Nothing else. Chunky, poster-weight, evokes hand-painted Egyptian signage.
- **Cairo** (`--font-ui`) — every label, sentence, button and numeral. Weights 400 / 600 / 700 / 900. No italics anywhere; the Arabic face has none and a mixed build would fracture.

HUD numerals are tabular, black weight, and forced LTR via `[data-ks-numeric]` so a counter never jitters or flips. Arabic gets roughly +0.25 line-height and `--scale-arabic` on display sizes to match Latin x-height.

### Surfaces, borders, shadows

**The house detail is the enamel rim.** Every raised surface carries a lit top edge (white 55%) and a shaded bottom edge (ink 10%) *inside* it, plus a 2px solid rim in a darker tone of its own colour and a warm drop shadow. That inner bevel is what makes a panel read as painted enamelware rather than a coloured rectangle — it is the single change that most separates this direction from the old flat-cartoon look, which used a uniform black ink outline on flat fill.

Faces are two-stop vertical gradients (400 → 600 of their ramp), never flat. Shadows are warm — char at 12–42% — never neutral grey. Three lifts (`--shadow-1/2/3`), one sunken well (`--shadow-sunken`, for vats and empty trays), two glows (`--glow-brass` for reward, `--glow-danger` for spill). Glows mark state, never hierarchy.

**Corner radii are chunky.** Cards `lg` (20px), panels `xl` (28px), vats `2xl` (36px), buttons and chips fully pill. Order tickets are `md` (14px) — paper has corners. Nothing in the game is square.

**Cards** = cream 50→200 gradient, 2px `--line-rim`, enamel bevel, `--shadow-1`, 20px radius, 20px padding. Owned/success cards turn herb-green. Unaffordable cards stay visible at 60% opacity rather than hiding — the player should see what they are saving toward.

### Backgrounds & imagery

No flat colour fields behind gameplay. The scene is three layers: a blurred street backdrop (radial warm gradient, out-of-focus shopfronts and bulb lights, 9px blur), a warm haze lit **from the counter upward** (not from above), and a heavy inset vignette. Hanging rice and pasta sacks and a strung bulb line dress the top edge.

Imagery direction is **warm, golden-hour, slightly dusty** — never cool, never desaturated, never photoreal. Grain is used only in the `painted` finish variant. Ingredient surfaces get a dotted `radial-gradient` overlay at 45–50% multiply so rice reads as grains rather than a colour block; that texture is non-negotiable, it is what makes food look like food.

Painted character portraits sit in a rounded frame with a 3px mood-coloured ring and a 4px tint halo. Portraits never flip under RTL.

### Animation

Everything moves, briefly. Durations: instant 90 · fast 160 · base 240 · slow 400 · scene 700 · steam 3200ms. All collapse to 1ms under `prefers-reduced-motion`.

- `--ease-pop` `cubic-bezier(.34,1.56,.64,1)` **overshoots** — food landing in a bowl has weight. Every reward, every layer growing, every star.
- `--ease-out` for entrances, `--ease-inout` for scene changes, `--ease-steam` for ambient loops.
- **Steam**: three blurred cream blobs, 3.2s rise, 900ms stagger, opacity 0 → .85 → 0. Hot vats only; garnishes and shatta are cold.
- **Sparkle burst**: six brass dots, 40ms stagger, on `perfect` and `kemala` only. Scarcity is what makes kemala feel like a reward.
- Countdowns animate **linearly** — easing a timer reads as lag.

### Interaction states

Raised things behave physically. **Hover**: `translateY(-2px)` + brightness 1.04. **Press**: `translateY(+2px)` and the shadow collapses to `--shadow-press` — the button actually goes down. **Disabled**: 45% opacity, desaturated, `not-allowed`. **Focus**: a cream ring then a clay ring, so it reads on any ground. Flat targets (rows, tabs) tint to `--surface-accent-quiet` instead of lifting. All of this lives in `parts/interactions.css` behind `[data-ks-press]` / `[data-ks-tint]` — components opt in, nobody re-implements it.

### Transparency & blur

Used in exactly three places: the street backdrop (9px), HUD chips over the scene (dark char at ~92% so they never wash out), and the pause/overlay scrim (`--surface-overlay`, char at 68%). Never on content the player reads under time pressure, and never as decoration.

### Layout rules

The gameplay canvas is 1280×720. Fixed elements: the HUD bar pinned to the top, the counter lip pinned to the bottom, the language toggle at top inline-end on every screen. The queue flows along the top third, tickets beneath their customer, vats along the counter. Maximum four HUD readouts — beyond that the scene clutters.

**Mirroring.** Logical properties only: `padding-inline`, `inset-inline-start`, `margin-block`, `border-inline-start`. No `left`/`right` anywhere. Directional glyphs opt in to flipping with `[data-ks-flip]`; food, faces, portraits and numerals never flip. Every layout must survive `dir="rtl"` without a second stylesheet.

---

## Iconography

**Phosphor Icons, Fill weight** — solid only; outline glyphs read as disabled in this system. Loaded from CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/duotone/style.css">
```

⚠️ **Substitution.** No icon font, sprite or SVG set was available from the sources, so Phosphor stands in. It was chosen for its rounded, friendly, solid silhouettes — the closest CDN match to the warm painted look — and because it actually carries the food glyphs this game needs (`bowl-food`, `grains`, `pepper`, `coins`, `storefront`). **Replace with bespoke icons when they exist**; `KS_ICONS` in `components/core/Icon.jsx` is the single mapping to edit.

The brief asks for setting-specific iconography — a koshary bowl, a pound coin — rather than generic game UI. `bowl-food` and `coins` are the nearest stock equivalents. Custom-drawn replacements for at least **bowl, coin, kemala, and the six customer archetypes** are the highest-value art commission after the portraits.

- **No emoji**, ever.
- **No Unicode characters used as icons** — except the typographic faces in `CustomerCard`'s placeholder art slot, which exist only until real portraits land.
- **No hand-rolled SVG icons.** The only SVG in the project is the dashed level-select path, which is a layout line, not an icon.

---

## Fonts

⚠️ **Substitution.** No font binaries were supplied. Both families are loaded from Google Fonts and were chosen because each carries **Arabic and Latin in one design**, which the bilingual requirement makes non-negotiable:

- **Lalezar** — display. Chunky, poster-like, reads as painted signage.
- **Cairo** — UI. Four weights, excellent Arabic, neutral enough for dense HUD text.

If the game has licensed faces, drop the binaries into `assets/fonts/`, replace the `@import` in `tokens/fonts.css` with real `@font-face` rules, and nothing else changes — everything reads `--font-display` / `--font-ui`.

---

## Using this system

Link one file:

```html
<link rel="stylesheet" href="styles.css">
```

Then read components off the compiled bundle:

```html
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, CustomerCard, PatienceMeter } = window.KosharyUstaDesignSystem_f12ad9;
</script>
```
