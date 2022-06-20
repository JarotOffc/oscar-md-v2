let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Owner'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `*––––––『 INFO ROZI 』––––––*
`
  conn.send2ButtonImg(m.chat, fla + teks, anu,watermark, 'Nomor Owner', '.owner2', 'Sosial Media', '.sosialmedia', m) 
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
