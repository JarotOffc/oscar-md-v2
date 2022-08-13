let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/b9907b917e10db107e464.png', m, { packname: "oscarbotz", author: "@jarot" })
}

handler.customPrefix = /^(nyimak|menyimak)$/i
handler.command = new RegExp

module.exports = handler
