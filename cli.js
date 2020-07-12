const get = require('./index');

const count = process.argv[2] || 1;
(async() => {
    let r = await get(count);
    console.log(r);
})();