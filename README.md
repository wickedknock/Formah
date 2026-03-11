# formah

Instantly format any JS or TS file to match popular style guides — no config files, no setup.

---

## Install

```bash
npm install -g @wickedknock/formah
```

---

## See it in action

**You have this messy file:**

```js
const fn = (a,b,c) => {
if(a){ return a+b+c }
return null
}
const obj = {foo: 'bar', baz: 'qux', another: 'value'}
```

**Run:**

```bash
formah myfile.js
```

**Pick a style from the menu, and the file is instantly cleaned up:**

```js
const fn = (a, b, c) => {
  if (a) {
    return a + b + c;
  }
  return null;
};

const obj = {
  foo: "bar",
  baz: "qux",
  another: "value",
};
```

The file is saved in-place. No config files, no extra steps.

---

## Supported styles

Choose one every time you run `formah`:

| Style | Quotes | Semicolons | Indent |
|---|---|---|---|
| **Prettier** | double | yes | 2 spaces |
| **Airbnb** | single | yes | 2 spaces |
| **Standard JS** | single | no | 2 spaces |
| **Google** | single | yes | 2 spaces |
| **XO** | double | yes | tabs |

---

## Supported file types

`.js` `.jsx` `.mjs` `.cjs` `.ts` `.tsx`

---

## License

MIT © [wickedknock](https://www.npmjs.com/~wickedknock)
