const axios = require('axios');

const get = async (count = 1) => {
    const daily = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
    return daily.data.Valute.USD.Value * count;
}

module.exports = get;