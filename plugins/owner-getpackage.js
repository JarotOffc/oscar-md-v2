let fs = require('fs')

let handler = async (m, { conn, text }) => {
    m.reply('Tunggu Sebentar, Proses Getting File package-lock.json')
   // let seso = await fs.readFileSync('./index.js.data.json') // klo lu run di panel
    let sesi = await fs.readFileSync('./package-lock.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'package-lock.json' }, { quoted: m })
}
handler.help = ['getpackage']
handler.tags = ['owner']
handler.command = /^(g(et)?package?(lock)?(json)?)$/i

handler.rowner = true

module.exports = handler
