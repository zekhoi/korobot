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

// const wutNime = async (image_url) => {
//     let details
//     await axios.get( `https://api.trace.moe/search?url=${encodeURIComponent(image_url
//     )}`).then((result) => {
//         anime = result.data.result[0]
//         // console.log(anime)
//         details = {
//             title : anime.filename.split('] ').pop().split(' -')[0],
//             image : anime.image,
//             similarity : anime.similarity,
//             episode : anime.episode,
//             from : anime.from,
//             to : anime.to
//         }
//     })
    
//     return details
// }

const conSec = (second) => {
    return(second-(second%=60))/60+(9<second?':':':0')+Math.floor(second)
}

const toPercent = (decimal) => {
    return Math.floor(decimal * 100)
}

module.exports = {
    getQuote,
    getNeko,
    getWaifu
}