let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let rozi = 'https://telegra.ph/file/966adedcd3b40f50fa794.jpg'
await conn.send2ButtonImg(m.chat, rozi, "*BIMLEK🐦*", 'ngapain banh tag” dia', 'OWNER', '.owner', 'KEMBALI', '.menu', m)                        
}
handler.customPrefix = /@6285828764046/i
handler.command = new RegExp

module.exports = handler
