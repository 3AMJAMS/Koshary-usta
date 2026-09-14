# Design notes

Where each system came from and why it is shaped the way it is. Section numbers
refer to `field-guide.md`.

## The counter is the whole game

The field guide is emphatic (§2) that the assembly counter is a **straight
line**, that the maestro **stands in one spot and reaches** rather than walking,
and that a full bowl is built in about **five seconds** with a long spoon banged
on each pot rim. Everything else is arranged around preserving that:

- Vats are laid out in two rows across a straight slab; nothing ever scrolls.
- The spoon has a four-phase animation — wind, reach, dip, flick — totalling
  roughly half a second, so a seven-scoop bowl lands near the five-second
  benchmark.
- The rim strike is synthesised per vat at its own pitch, and the pitch climbs a
  semitone per streak step, so a fast clean run literally plays a rising phrase
  on the pots. That is the "koshary symphony" the guide describes, made
  mechanical.
- Taps are buffered three deep rather than dropped. A player tapping out a full
  bowl was otherwise losing inputs they had clearly made.

## Scoring follows the documented sequence

The guide could not confirm the left-to-right order of the vats (§2, Caveats)
but is confident about the **assembly sequence**: carbs → chickpeas → sauce →
onions on top. So the sequence is what the game scores, not the geometry.
Scooping out of order costs a flat multiplier; the vats can sit wherever the
screen needs them.

Ingredient weights in scoring follow the guide's insistence that the fried
onions are "the whole game" — `taqleya` carries the heaviest weight of any
component, and its crispness decays across service unless a fan is running.

## Who walks in

§6 describes the real mix: an office lunch flood, regulars who order in the
shop's own language, tourists with cameras, families taking a hilla home. Each
archetype changes three numbers — patience, tip, reputation weight — plus one
thing about the order itself:

| Archetype | Patience | Tip | Rep | Wrinkle |
| --- | --- | --- | --- | --- |
| Walk-in | 1.00 | 1.00 | 1.00 | — |
| Office worker | 0.62 | 0.85 | 0.90 | Speed weighted harder in scoring |
| Regular | 1.30 | 1.35 | 1.45 | Always orders in house slang; asks for extras more |
| Tourist | 1.45 | 2.10 | 0.75 | Wants the show; photographs you |
| Family | 1.20 | 1.25 | 1.20 | Only takes the big sizes |
| Critic | 0.90 | 1.60 | 3.20 | Judges cooking quality, not speed; harsher curve |

Archetypes unlock by chapter, so the cart in 1954 serves only walk-ins.

## Kemala

§3 confirms **كمالة** as historic Koshary El Tahrir terminology for a small
extra top-up for someone still hungry, and §4 recommends it as a mechanic. It is
gated behind a fitting (the kemala pot), triggers only off a bowl scored above
0.74, and asks for exactly one scoop of one named component. Adding anything
else pays 40%. It is the only moment in the game where doing *less* is correct.

## The flood

§6 records the lunch rush as the defining pressure of the day. It fires once per
service, somewhere in the middle third, shortening patience by ~28% and filling
the room behind the counter. It is also the best window for a long streak, so it
reads as an opportunity rather than only a punishment.

## Daily events

Each is a real pressure on an Egyptian koshary shop, and each changes something
visible rather than only a hidden number: onion prices double the cost of frying
the ward; a weak gas bottle narrows every cooking window; Ramadan empties the
street and then floods it, with fewer customers, longer patience and a bigger
bill; a tour coach biases the queue toward tourists.

## Vocabulary

UI labels default to the standard terms — **تقلية** for the fried onions,
صغير/وسط/كبير and علبة/طبق/حلة for sizes. The El Tahrir counter code (ورد /
مونة / كهرمان / بندق / لوز) is an **opt-in label set** in the menu, exactly as
§4 recommends: authentic staff flavour, not the default, because it is
old-downtown insider slang rather than menu language. For English play the code
words are transliterated (ward, moona, kahraman, bondo', loz) so the easter egg
still lands.

## Sauces stay with the customer

§4: the tomato sauce goes on at the counter; the daqqa and shatta never do. Two
bottles live on the counter for dine-in, and a takeaway order has to have all
three bagged separately before the box is sealed — the guide is explicit that
pouring them in makes the food soggy.

## The cartoon pass

Three rules, applied everywhere:

1. **Every solid shape gets an ink outline** at a weight that scales with the
   viewport, so it reads the same on a phone as on a desktop.
2. **Highlights are flat blobs, not gradient meshes.** The old brushed-steel
   gradients had ten colour stops each and read as grey mush at phone size; two
   tone bands and one hard white stripe read as steel from a metre away.
3. **Anything that moves squashes and stretches.** The spoon winds back before
   reaching and stretches along its length on the flick; the bowl dips and
   rebounds when a scoop lands; a vat wobbles for a moment after you scoop from
   it.

Faces are the game's second HUD. Eyes, brows and mouth all key off the
customer's remaining patience — wide and smiling, then worried brows, then
narrowed slits with anger marks — so you can feel a queue souring in peripheral
vision without reading the bar.

## Bug fixed along the way

The title screen's "useless black rectangle" was not a styling problem. Card
illustrations were drawn to a `<canvas>` and then inserted with `.outerHTML`,
which serialises the tag and throws the bitmap away. Every card image in the
game — the title photo, all six chapter photos, and all fourteen upgrade icons —
was arriving blank, showing only the canvas background colour, which on the dark
title card looked like a deliberate black box. They are now baked to a data URL
and shipped as `<img>`.
