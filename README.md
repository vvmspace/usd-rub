# USD RUB NPM package

```bash
npm i usd-rub
```

## USAGE

```js
const usd = require('usd-rub');

(async () => {
    const OneDollar = await usd();
    const HundredDollars = await usd(100);
    console.log({
        OneDollar,
        HundredDollars
    })
})();
```