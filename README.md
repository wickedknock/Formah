# formah

Instantly format any JS or TS file to match popular style guides — no config files, no setup.

---

## Install

```bash
npm install -g @wickedknock/formah
```

---

## See it in action

**Before:**

```js
const fetchUser = async(userId,options)=>{
const res = await fetch('/api/users/'+userId,{method:'GET',headers:{'Content-Type':'application/json'}})
if(!res.ok){throw new Error('Request failed with status '+res.status)}
const data=await res.json()
return {id:data.id,name:data.name,email:data.email,role:data.role||'user'}
}
```

**Run:**

```bash
formah api.js
```

**After — Airbnb:**

```js
const fetchUser = async (userId, options) => {
  const res = await fetch(`/api/users/${userId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  const data = await res.json();

  return {
    id: data.id,
    name: data.name,
    email: data.email,
    role: data.role || 'user',
  };
};
```

The file is saved in-place. No config files, no extra steps.

---

## Supported styles

Choose one every time you run `formah`:

| Style | Quotes | Semicolons | Trailing Commas | Indent |
|---|---|---|---|---|
| **Airbnb** | single | yes | all | 2 spaces |
| **Standard JS** | single | no | none | 2 spaces |
| **Google** | single | yes | es5 | 2 spaces |
| **XO** | single | yes | all | tabs |

---

## Supported file types

`.js` `.jsx` `.mjs` `.cjs` `.ts` `.tsx`

---

## License

MIT © [wickedknock](https://www.npmjs.com/~wickedknock)
