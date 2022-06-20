let fetch = require('node-fetch') 
let handler = async (m, { conn, text, usedPrefix, command }) => { 
let res = await (await fetch('https://raw.githubusercontent.com/Alfarqun/database/main/anime/kanna.json'))
 if (!res.ok) throw await `${res.status} ${res.statusText}`; 
 let json = await res.json(); 
 let url = json[Math.floor(Math.random() * json.length)] 
await conn.send2ButtonImg(m.chat, await (await fetch(url)).buffer(), 'Kawai > _<', watermark, 'selanjutnya', `${usedPrefix + command}`, 'owner', '.owner', m)
}

handler.help = ['kanna']
handler.tags = ['internet', 'anime'] 
handler.command = /^(kanna)$/i
handler.limit = false
handler.register = false

handler.limit = false

module.exports = handler
