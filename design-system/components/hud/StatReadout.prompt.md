A chip on the HUD rail showing one live number — cash, reputation, or the day counter.

```jsx
<StatReadout kind="money" label="ج" value="1,240" bump={justPaid} />
<StatReadout kind="rep" label="سمعة" value="4.6" />
<StatReadout kind="day" label="Day" value="7" />
```

Cash is brass, reputation is ward-orange, the day is plain — that colour coding is how the player finds the number they want without reading. Format the value before passing it (`nf()` in the source does `toLocaleString('en-US')`); the chip renders whatever it is given and forces LTR so digits never flip in Arabic. Keep the rail to three chips plus chrome.
