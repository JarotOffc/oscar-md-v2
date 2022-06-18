let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/79993055034ad06052222.png', m, { packname: "zifabotz", author: "@rozi" })
}

handler.customPrefix = /^(makasih|terimakasih|thank|thanks|thanks you)$/i
handler.command = new RegExp

module.exports = handler
