let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks\nContoh: .logogura Oscarbotz'
  m.reply('Proses...')
  let res = `https://rimurubotz-api.herokuapp.com/api/gura?text=${response[0]}`
  conn.sendFile(m.chat, res, 'kaneki.png', `*Sudah Jadi*`, m, false)
}
handler.help = ['logogura'].map(v => v + ' <text>')
handler.tags = ['nulis', 'anime']
handler.command = /^(logogura)$/i
handler.register = true

handler.limit = true

module.exports = handler
