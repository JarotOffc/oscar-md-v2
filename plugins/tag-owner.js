let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
await conn.send3But(m.chat, "*📮: Ada yang bisa saya bantu?*", '', 'SEWA', '.sewa', 'STORE', '.store', 'KEMBALI', '.menu', m)
                        
}
handler.customPrefix = /@6285828377610|@6285828764046|@6282122977451/i
handler.command = new RegExp

module.exports = handler
