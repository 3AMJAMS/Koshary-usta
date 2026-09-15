Renders one of the game's real glyphs. There is no icon font in this product — customer archetypes are emoji and everything else is a typographic character.

```jsx
<Icon name="tourist" size="14px" label="Tourist" />
<Icon name="star" color="var(--brass-hi)" size="31px" />
<Icon name="beat" color="var(--combo)" />
```

The six archetype glyphs (🙂 ⏱ ★ 📷 👨‍👩‍👧 📝) are load-bearing: they are how a customer's type reads on the order slip at 10px. Do not swap them for drawn icons without redesigning the slip. Pass `label` when the glyph is the only carrier of meaning; leave it off when a text label sits beside it.
