let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
await conn.send3But(m.chat, "*=====『 TAG TERDETEKSI 』=====*", '*📮: Ada yang bisa saya bantu?*', 'SEWA', '.sewa', 'STORE', '.store', 'KEMBALI', '.menu', m)
                        
}
handler.customPrefix = /@6285828764046/i
handler.command = new RegExp

module.exports = handler
