# formah

Instantly format any JS or TS file using the world's top 5 style standards — no config files, no setup.

```bash
formah myfile.js
```

---

## Install

```bash
npm install -g @wickedknock/formah
```

---

## Usage

```bash
formah <file>
```

**Examples:**

```bash
formah index.js
formah app.ts
formah components/Button.tsx
```

### Supported file types

`.js` `.jsx` `.mjs` `.cjs` `.ts` `.tsx`

---

## Formatting styles

When you run `formah`, you pick one of 5 styles from an interactive menu:

| Style | Quotes | Semicolons | Line Width | Indent | Trailing Commas |
|---|---|---|---|---|---|
| **Prettier** | double | yes | 80 | 2 spaces | yes |
| **Airbnb** | single | yes | 100 | 2 spaces | yes |
| **Standard JS** | single | no | 80 | 2 spaces | no |
| **Google** | single | yes | 80 | 2 spaces | no |
| **XO** | double | yes | 80 | tabs | yes |

The file is formatted and saved in-place.

---

## Example

**Before:**

```js
const fn = (a,b,c) => {
if(a){ return a+b+c }
return null
}
const obj = {foo: 'bar', baz: 'qux', another: 'value'}
```

**After — Standard JS:**

```js
const fn = (a, b, c) => {
  if (a) {
    return a + b + c
  }
  return null
}

const obj = {
  foo: 'bar',
  baz: 'qux',
  another: 'value'
}
```

**After — Prettier:**

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

---

## Why formah?

Most formatters require you to create `.prettierrc`, `.eslintrc`, or other config files just to try a style. `formah` skips all that — pick a style, see the result instantly.

---

## License

MIT © [wickedknock](https://www.npmjs.com/~wickedknock)
