const axios = require('axios')

export async function getMeme(){
    const res = await axios.get('https://memeapi.pythonanywhere.com/');
    return res.data.memes[0].url;
}

module.exports = getMeme