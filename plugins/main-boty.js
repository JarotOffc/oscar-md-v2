let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/9bc8b84760a433b4d26a3.jpg', m, { packname: "Oscarbotz", author: "@Jarot" })
}

handler.customPrefix = /^(boti|boty|boty binal)$/i
handler.command = new RegExp

module.exports = handler
