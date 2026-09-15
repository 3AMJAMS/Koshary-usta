Glyph-only 32px button for the HUD rail — sound toggle, pause, and the EN/ع language switch.

```jsx
<IconButton label="Sound" onClick={toggleSound}>♪</IconButton>
<IconButton label="English" onClick={setLang}>EN</IconButton>
```

Thinner outline (2px) and a shorter 2px press than the dock Button, because it is chrome rather than an action. Always pass `label`.
