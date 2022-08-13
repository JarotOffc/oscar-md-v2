let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks\nContoh: .logowaifu Oscarbotz'
  m.reply('Proses...')
  let res = `https://rimurubotz-api.herokuapp.com/api/waifu?text=${response[0]}`
  conn.sendFile(m.chat, res, 'waifu.png', `*Sudah Jadi*`, m, false)
}
handler.help = ['logowaifu'].map(v => v + ' <text>')
handler.tags = ['nulis', 'anime']
handler.command = /^(logowaifu)$/i
handler.register = true

handler.limit = true

module.exports = handler
