let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks\nContoh: .logokaneki Oscarbotz'
  m.reply('Proses...')
  let res = `https://rimurubotz-api.herokuapp.com/api/kaneki?text=${response[0]}`
  conn.sendFile(m.chat, res, 'kaneki.png', `Sudah Jadi`, m, false)
}
handler.help = ['logokaneki'].map(v => v + ' <text>')
handler.tags = ['nulis', 'anime']
handler.command = /^(logokaneki)$/i
handler.register = true

handler.limit = true

module.exports = handler
