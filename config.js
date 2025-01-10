//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "243830461680";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEJoenlJdmROTDVaanduSTZNN3d6MklXeGhoaXdzQzUxeE95T1RXYTUyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUVHZ3c3Zjdua1ZhdEVLbWEzdzZtZXFJSmtDbEdqMmFENzJlektQNS9qST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyUG42c3AycHE3VXNCeGhkMzJQZzNYc0FMQUtvaWd2dzUyeXJONFZ4cTBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMZk9UbUY4OXEyRkZRVEQzWmxpTU1mUWJpK3Vwazd0cXFudWE2WU5Ub0NvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklORGxuL05kWDM0MENtYlRMNmozZS9wcm9DMXU0OWl3a0R1a21xK0RNbUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii8zMUNSdDA5cDhZTDJ6YmtNNldPanlIS2xOL1JFTW1GUmFPajZVd1NFeW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUlxZTZ1R2lPSlFhKzVLOCtkMndocEwvYmpRSXlxVzZVc0xvY1gyRWEwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU25ocEs0ckJNaUZhVjVnUmRrWjNzcnZZNVpoaWQ1dS9tMVpBKzRyU3ZXOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFsOGZIRVZNSnprTExjU29keHZqTFppRFc2dzB4MVJlTEw4SnNNMTNDYlRvRUtzTWFGeEFMOW5WTmRMVk4zSTk5MmpNamJoQ2JpY0xlV2N0VEN0T2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiJJalBPaE9MUmJ4aTNjSEVZVXVQMGZpWnlXREt4eDQ5MG93VDNLdXcvV0FnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQM3E3ZTBuX1JaQ1BhZnA5Zm1nYjNRIiwicGhvbmVJZCI6IjFmMDlmOWQzLWI5YmMtNDc3Ni1iNGU5LWU1Yjc2YzdkMzEwZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUTzlVVHhNYlo0QnJ6OURyWnZCMytrQnZIZTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVG94NXJQamp0b0pKZHF0ZFFqbmNTaVFCVEtnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhIMVNBTFFLIiwibWUiOnsiaWQiOiIyNDM4MzA0NjE2ODA6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBS0FHSEkyNDMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05XQnBZTUVFS2FmaEx3R0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNrQU9OcTJVNjkxdUYyeW5TblM0WGwrdC9pVHc5dzlKRTdIdzhsa2VneTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFGMGI5TVFyeWt4UHZsMUExUlh2S0VTYzIrSGtLK3MxNHIrNks0a3NsNmZ5eURPaFVLOHB3bU5ibjFGU0paTXdrdnJlZE8ya3JDWXR3VmtIYWlGbkFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDcFB3SExsQjJKV1Y0WmZlQm9QaFBqQWcrWTlmcTJIQ0VrK3VSYmhsVWp6cFQ5MDR3dDNEZnlSM3NBbmVVOVFrcTZjK3JmUnczeUk2NE9FYmN5cXBnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MzgzMDQ2MTY4MDozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJKQURqYXRsT3ZkYmhkc3AwcDB1RjVmcmY0azhQY1BTUk94OFBKWkhvTXQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzY1MTE0MTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSzdDIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
