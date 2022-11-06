const axios = require("axios").default;
// const express = require("express");
// const app = express();
require("dotenv").config();
const urlBuilder = msg => (`https://api.telegram.org/${process.env.BOT_NUM}:${process.env.API_KEY}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${msg}`);


const sendMsg = async () => {
    let data = await axios.get("https://www.reddit.com/r/dankMemes/hot/.json?count=11");
    data = data.data.data.children;
    data = data.map(x => urlBuilder(x.data.url_overridden_by_dest)).filter((_, i) => i !== 1);
    // let request = urlBuilder(["Tzali I am going to beat the fucking shit out of you", ...data].join("\n"));
    await axios.get(urlBuilder("Tzali I am going to beat the fucking shit out of you")).catch(() => {
        console.log("Rate Limited");
    });
    data.forEach(link => axios.get(link).catch((_) => {
        console.log("Rate Limited");
    }));
}

const sendMsgServer = async (_, res) => {
    let data = await axios.get("https://www.reddit.com/r/dankMemes/hot/.json?count=11");
    data = data.data.data.children;
    data = data.map(x => urlBuilder(x.data.url_overridden_by_dest)).filter((_, i) => i !== 1);
    axios.get(urlBuilder("Tzali I am going to beat the fucking shit out of you"));
    data.forEach(link => axios.get(link));
    res.send("Messages sent")
}
// app.get("/", sendMsg);
//
// app.listen(process.env.PORT || 3000);
sendMsg();
