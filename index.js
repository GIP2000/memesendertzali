const axios = require("axios").default; 
require("dotenv").config();
const ; 
const urlBuilder = msg=>(`https://api.telegram.org/${process.env.BOT_NUM}:${process.env.API_KEY}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${msg}`);


(async ()=>{
    data = await axios.get("https://www.reddit.com/r/dankMemes/hot/.json?count=11");
    data = data.data.data.children; 
    data = data.map(x=>urlBuilder(x.data.url_overridden_by_dest)).filter((_,i)=> i !== 1);
    axios.get(urlBuilder("Tzali I am going to beat the fucking shit out of you")); 
    data.forEach(link=>axios.get(link)); 
})()
