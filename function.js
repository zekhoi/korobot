const axios = require('axios');

const getQuote = async () => {
    let quote = await axios.get('https://animechan.vercel.app/api/random')
    return quote.data
}

const getNeko = async (categoty) => {
    let neko = await axios.get("https://nekos.best/api/v1/" + categoty)
    // console.log(neko)
    return neko.data.url
}

const getWaifu = async (categoty) => {
    let waifu = await axios.get("https://api.waifu.pics/sfw/" + categoty)
    // console.log(waifu)
    return waifu.data.url
}

module.exports = {
    getQuote,
    getNeko,
    getWaifu
}