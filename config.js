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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_50_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDU1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcxLFxuICAgICAgICAyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NixcbiAgICAgICAgMjUxLFxuICAgICAgICA1OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkxLFxuICAgICAgICA4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDg3LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY2LFxuICAgICAgICA2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MixcbiAgICAgICAgMjQyLFxuICAgICAgICA0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk3LFxuICAgICAgICA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk3LFxuICAgICAgICA5MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUkliTCsvNEN5QVJnTDE0S3N5d3Z4ZE0ydXBVMnBsZVdkUitReTlKV294TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSmsyajAyb3hSSi03MUFEYl8tYXpMZ1wiLFxuICBcInBob25lSWRcIjogXCIyNTQ4YTM3Ni00YWE1LTRkMDAtYjJmNi02OWJmOTEyMjc5ZTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzYsXG4gICAgICAzNixcbiAgICAgIDg4LFxuICAgICAgMTkzLFxuICAgICAgMTQwLFxuICAgICAgMjAwLFxuICAgICAgMTk3LFxuICAgICAgMTg3LFxuICAgICAgMzYsXG4gICAgICAyMzEsXG4gICAgICAxNDIsXG4gICAgICAyMTMsXG4gICAgICAxOTgsXG4gICAgICAxOCxcbiAgICAgIDEyNSxcbiAgICAgIDE0NCxcbiAgICAgIDE5OSxcbiAgICAgIDQwLFxuICAgICAgMjEsXG4gICAgICAxODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgOTksXG4gICAgICAyNTIsXG4gICAgICA0MSxcbiAgICAgIDEzMSxcbiAgICAgIDE5MSxcbiAgICAgIDE3OCxcbiAgICAgIDIzMSxcbiAgICAgIDI0NSxcbiAgICAgIDE1MCxcbiAgICAgIDI1LFxuICAgICAgMTc3LFxuICAgICAgMTIxLFxuICAgICAgODksXG4gICAgICA5MCxcbiAgICAgIDAsXG4gICAgICAyNTEsXG4gICAgICAxMjMsXG4gICAgICAyMTIsXG4gICAgICAxNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEpHNUtOWkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjkwNTYyMDgxMDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTkzOTU2MDYwNjEyNzE6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUw2NzlFRkVNTGlzTG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsSW1JRlJoRmF1VnBYTE1qN3pEd2xvZVEvcjVrZHVMdnVXVy9ObVFUYzJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1VRUhHcjNyWVdhUkYxL1FlRzBxNHJLNUdSZ0ovNEkyeVU2eG9TVnFoMmJrQWQvSWRWSFo4MzNuRW8xRGVVak14MXR0L0JlN3o5azJEaS9vRXE3RERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlB3SUhQNy9aK1NiaTR4VkNHL2tMYVc1VE5oOTdZUzR2WERmblA1dS9YR21PUXlaVUlDc3I2akhMYnZPTFJwUTVxNElVSHZ3RDRoK1JtdFZMVDZmd2lnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjkwNTYyMDgxMDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMwNDY1OTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGNFdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUY0Vy5qc29uIjogIntcImtleURhdGFcIjpcIk41WlpRUVBaRXNBU1hncVpvOTVGam1Xb1hJelJvdHZGWWNJVUlqeTc3U0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUxMzg4MDg5NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMjkwNDg0ODUzNFwifSIKfQ=="  // PUT your SESSION_ID 


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
