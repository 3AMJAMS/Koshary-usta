The game's action button — use it in the bottom dock, in overlay card footers, and anywhere the player commits to something.

```jsx
<Button onClick={hand}>Hand it over</Button>
<Button variant="ghost" onClick={back}>Back</Button>
<Button variant="hot" onClick={turnAway}>Turn them away</Button>
<Button variant="go" wide sub="EGP 40" onClick={buy}>Buy</Button>
```

Brass is the default and should be the only brass button on screen. `ghost` is the muted secondary, `hot` refuses or dumps (salsa red), `go` confirms (green). The press is physical: 4px down, ink slab to zero — never restyle it. `pulse` marks the single next action during the tutorial; use it sparingly or it stops meaning anything.
