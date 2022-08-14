const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: ZerooTwoo
item.ORG: Zeroo
item1.TEL;waid=6283830815715:6283830815715@s.whatsapp.net
item1.X-ABLabel:owner selalu ada 
item2.YOUTUBE;type=INTERNET: https://chat.whatsapp.com/HfU2b0eC1Am4GZaIbg4gb4
item2.X-ABLabel:GROUP
item3.ADR:;;🎍JEPANG;;;;
item3.X-ABADR:ac
item3.X-ABLabel:asal kota
item4.URL: https://tasyaachann01.github.io/ 
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER BOT', 
            contacts: [{ vcard }]  
        }
    }
)
let jarot = 'https://telegra.ph/file/bc5258e2d4359cc8996d1.jpg'
await conn.send3ButtonImg(m.chat, jarot, `*Hai kak @${m.sender.split('@')[0]} 👋,  Itu nomor owner gw…*`, '📮: jngn di spam kack', 'Store', '.store', 'Back', '.menu', 'Donasi', '.donasi', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

module.exports = handler
