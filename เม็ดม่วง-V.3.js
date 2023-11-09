const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
const express = require('express')
const app = express();
const port = 8000
 
app.get('/' , (req,res) => res.send('RUN BY IKGA-SIURCE | discord.gg/ikgas '))
app.listen( port , () => 
  console.log(`Your app is listening a http://localhost:${port}`)
);

client.on('ready', () => {
  var startedAt = Date.now();
  console.log(`สำเร็จ ${client.user.username} กำลังออนไลน์`);

  setInterval(() => {

    const d = (new Discord.RichPresence)
    const r = new Discord.RichPresence()
      .setApplicationId('1121867777867788309')
      .setType('STREAMING')
      .setURL('https://www.twitch.tv/IKGA-SOURCE')
      .setState(`Discord |  รับทำบอท | เม็ดม่วง`) // ชื่อตรงกลาง
      .setName('เม็ดม่วง By IKGA-SOURCE') // ใส่ สถานะ ไม่เปลี่ยนก็ได้
      .setDetails(`🗓️ ${getDate()} ⏰ ${getCurrentTime()}`)
      .setStartTimestamp()
      .setAssetsLargeText(`Ping Server : ${Math.round(client.ws.ping)} ms`)
        // ใส่ลิ้งค์รูป 
 .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1116055698569166878/1116055828567429210/IKGA-SOURCE.gif')  
      // ใส่ลิ้งค์รูป
      .setAssetsSmallText(`Ping Server ${Math.round(client.ws.ping)} ms เม็ดม่วง IKGA-SOURCE`)
      .addButton('JOIN DISCORD', 'https://discord.gg/ikgas')
      // ใส่ชื่อ              //  ใส่ลิ้งค์อะไรก็ได้
    client.user.setActivity(r);
  }, 5000);
});
function getCurrentTime() {
  const a = new Date(Date.now());
  const c = { timeZone: "Asia/Bangkok", hour: "2-digit", minute: "2-digit", hour24: false };
  return a.toLocaleTimeString("th-TH", c);
  var hour = getMonthName(a.getMonth()+1);

  return b[0] + " / " + hour + " / " + b[2];
}
function getDate() {
  var a = new Date(Date.now());
  const c = { timeZone: "Asia/Bangkok", day: "2-digit", month: "2-digit", year: "numeric" };
  const b = a.toLocaleDateString("en-EN", c).split("/");
  function getMonthName(month) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    if (month >= 1 && month <= 12) {
      return monthNames[month - 1];
    } else {
      return "January";
    }
  }
  var month = getMonthName(a.getMonth()+1);

  return b[0] + " / " + month + " / " + b[2];
}


client.login(process.env.token);