# Status — read before designing against this system

This system was generated in two passes that were never reconciled. Parts of it
contradict each other.

**`tokens/` and `components/` are current.** They were derived from the real game
(`koshary_usta.html`, commit bb23288) and use the shipped dark-cartoon palette:
`--ink`, `--night`, `--wall`, `--brass`, `--ward`, `--steel`. These match the
game's own `:root` variable names.

**`readme.md`, `github.md`, `guidelines/` and `ui_kits/` are from the earlier
pass** and were written against a different, lighter direction — clay/cream/herb
ramps, enamel-rim surfaces, a 1280×720 canvas. That direction was not carried
forward. 114 of the 138 CSS variables those files reference (`--clay-500`,
`--cream-50`, `--char-800`, `--state-good`, `--brass-400`, …) are **not defined**
in `tokens/`, so the UI-kit screens and guideline cards will not render as drawn.

`readme.md` also states the repository was never read. That is true of the first
pass only — the token and component files clearly reflect the real source.

## If you are designing against this

Use `tokens/` and `components/`. Treat `readme.md`'s prose on colour, surfaces,
type and layout as a proposal that was not adopted; its sections on voice,
content and bilingual writing still hold.

## To fix

Re-sync in Claude Design with the repository connected, so one pass regenerates
`guidelines/`, `ui_kits/` and `readme.md` against the tokens that shipped.
