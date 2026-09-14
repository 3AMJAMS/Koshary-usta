# كشري الأسطى — Koshary Usta

A first-person Egyptian koshary counter simulator that runs from a single HTML
file. You stand behind the steel with a bowl in one hand and a long spoon in the
other: cook at dawn, take the counter at noon, and build the bowl in five
seconds.

Open `koshary_usta.html` in any modern browser. No build step, no assets, no
network — every illustration, sound and animation is generated at runtime.

Arabic (RTL) and English (LTR) are both first-class; the ♪ button mutes, the
EN/ع button switches language, and progress saves to `localStorage`.

## Playing

**The kitchen (morning).** Everything the shop serves is cooked before you open,
and each component is its own act of timing — toasting vermicelli to gold,
skimming foam off the lentils, holding the oil steady and lifting the basket at
the moment the onions turn. Your score on those becomes that batch's quality,
and that quality is literally what the customer tastes at noon.

**The counter (service).** Tap a vat; the spoon winds back, dips, and flicks the
scoop into the bowl with a clang off the rim. Read the ticket — counts, extras,
and "no ___" — and follow the documented assembly order: carbs, chickpeas,
sauce, onions on top. Speed matters. So does not overfilling.

**Keyboard.** `1`–`6` pick vats left to right, `Space` hands over, `C` dumps the
bowl, `X` declines a kemala, `Shift` holds the heat while frying.

## What's in it

| System | What it does |
| --- | --- |
| **Six chapters** | 1954 cart → 1969 shop → 1984 queue → 1999 neon → the 2015 record → endless "Kemala" mode |
| **Customer archetypes** | Walk-ins, office workers in a hurry, regulars who order in the house language, tourists who want the show, families taking a pot home, and critics who judge the cooking rather than your speed |
| **Kemala (كمالة)** | The documented top-up: serve a bowl well and some customers ask for one more scoop of one named thing. Exactly one, and nothing else |
| **The flood (الزحمة)** | Mid-service the queue reaches the pavement — patience shortens, the room fills, and the payout climbs |
| **Rhythm streak** | Scoops that follow each other build a streak; each clang rises a semitone and the tip multiplies. The shop tape is a bonus on top, never a tax |
| **Daily events** | One headline a morning — onion prices, a tour coach, a dead gas bottle, Ramadan hours, a school trip, a heatwave — each visibly changing the day |
| **Overfill & spill** | Scoop past the ticket and the bowl heaps; keep going and it goes over the side |
| **Takeaway bagging** | Salsa, daqqa and shatta go in separate bags beside the box, never into it |
| **Eighteen fittings** | Pans, blades, vats, spoons, a fan over the ward, a floor runner, a relay boy, a kemala pot, the usta's dais, a price board, neon, mirrors |
| **House slang** | The old Koshary El Tahrir counter code — ward, moona, kahraman, bondo', loz — as an optional label set, transliterated for English play |

## Notes on the art

Everything is drawn to `<canvas>` at runtime in a deliberate cartoon idiom:
heavy ink outlines on every solid shape, flat highlight blobs instead of
gradient meshes, squash-and-stretch on anything that moves, and faces that carry
the customer's patience so you can feel a queue souring without reading a bar.

## Accuracy

The shop, the vocabulary and the ritual follow `docs/field-guide.md`: a straight
steel counter rather than an L or a semicircle, a maestro who stands in one spot
and reaches, the flick-and-clang assembly at roughly five seconds a bowl, the
pay-first ticket, and sauces left to the customer. Where the research is
explicit that something is regional or unverified — "ورد" for the fried onions
is old-downtown insider slang, not the standard menu word — the game treats it
as flavour and defaults its labels to "تقلية".
