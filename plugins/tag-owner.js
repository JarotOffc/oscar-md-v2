let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let jarot = 'https://telegra.ph/file/a871f2ca2c623c57b82dd.jpg'
await conn.send2ButtonImg(m.chat, jarot, "*BIMLEK🐦*", 'ngapain banh tag” dia', 'OWNER', '.owner', 'KEMBALI', '.menu', m)                        
}
handler.customPrefix = /@6283830815715,6283830815715/i
handler.command = new RegExp

module.exports = handler
