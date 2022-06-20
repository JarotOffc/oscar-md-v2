let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Owner'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `*TENTANG ROZI:*
Contact person jasa run:
wa.me/${numberowner} (Owner)

*Follow Instagram ku juga kak😼*`
  conn.send2ButtonImg(m.chat, fla + teks, anu, instagram, 'Nomor Owner', '.owner2', 'Sosial Media', '.sosialmedia', m) 
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
