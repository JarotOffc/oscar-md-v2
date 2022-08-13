let handler = async function (m, { text, usedPrefix }) {
const { createHash } = require('crypto')
let sn = createHash('md5').update(m.sender).digest('hex')
let jarot = 'https://telegra.ph/file/71a092b5d033e5aad9864.jpg'
conn.sendButtonImg(m.chat, jarot, sn, wm, 'MENU', '.menu', m)
}
handler.help = ['ceksn']
handler.tags = ['exp']
handler.command = /^(ceksn)$/i
handler.premium = false
handler.register = true
module.exports = handler
