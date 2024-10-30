const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "353899733723";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_18_10_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg1LFxuICAgICAgICA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU4LFxuICAgICAgICA2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTksXG4gICAgICAgIDYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMixcbiAgICAgICAgODksXG4gICAgICAgIDU4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTQxLFxuICAgICAgICA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyLFxuICAgICAgICA5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI3LFxuICAgICAgICA3LFxuICAgICAgICAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDMzLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTczLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDM0LFxuICAgICAgICA3MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkMvSGVjdDh0WEgvZ0ZXRVlWNTZ5SXF6ekV5RDFLTHlHU3FZbzNUNnN3cWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMzUzODk5NzMzNzIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUREOTYyQjkzNTVCNkVCOTdBQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzAzMDUxMTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSFdTT0ZseTFRdXlTN2tKMEhJMXdWUVwiLFxuICBcInBob25lSWRcIjogXCI0MmIxODNlOS05ZmM1LTQwNjAtYjcxNC0yN2I0YjU3ZTBiNjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDE0OSxcbiAgICAgIDEwOSxcbiAgICAgIDIwNCxcbiAgICAgIDkxLFxuICAgICAgNjgsXG4gICAgICA3MSxcbiAgICAgIDgyLFxuICAgICAgMjA1LFxuICAgICAgMjEsXG4gICAgICA4NCxcbiAgICAgIDEzMSxcbiAgICAgIDY0LFxuICAgICAgMTgyLFxuICAgICAgODYsXG4gICAgICAxNjEsXG4gICAgICAyMDQsXG4gICAgICAyNTAsXG4gICAgICA2LFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgMTUsXG4gICAgICA4LFxuICAgICAgMzksXG4gICAgICAzNCxcbiAgICAgIDQzLFxuICAgICAgMTcwLFxuICAgICAgMzUsXG4gICAgICAxNSxcbiAgICAgIDE0NSxcbiAgICAgIDEyMyxcbiAgICAgIDksXG4gICAgICA2LFxuICAgICAgNTYsXG4gICAgICAyMzcsXG4gICAgICAyMDAsXG4gICAgICA2MSxcbiAgICAgIDEwMixcbiAgICAgIDIwNixcbiAgICAgIDIwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDWFFIQlJYTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMzUzODk5NzMzNzIzOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBbGllbiBCb3RcIixcbiAgICBcImxpZFwiOiBcIjE2NTE2MzQ4NzQ4NjE3Nzo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1Biditkb0dFTkM0aWJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQlJxMDB5YThTSy9uRG1qRnB1SzYvaVFCbHR4V0w2SHc0Z0VHK3ZvK3Jnaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4RXBlSDV0MjJVcFFNcGg2Y3RSdjBGbmZTbjU4b045OXMyRFRBSVp4bXNRbm9CZHoybW9nemVPVkxCaFNRenhtRkJIbmo5bkFLbkRpdGJVckx3NmRCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRTEl0UGZnTkU2aC9SSGsrZmpVNUt1VXV2VnJJc0p3dFdHbnNkc0piQi9XZmtWNE5jbnprSTlaMGhTdmduNmdiRStzSXFuclR2NjliRkFpY3I1SzBodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIzNTM4OTk3MzM3MjM6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDMwNTExMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpoYVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmhhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRTI3d0VSYm51SGpNL1hTRVo2TDBYdWdwYWlEK2ZkbE1xMEFuZHg1dHlFST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODAxMzUzMjA2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAzMDUxMTEwMzJcIn0iCn0"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
