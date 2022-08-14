const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let owner = 6285850539404
let wa = '0'
let handler = async (m) => {
let jarot = `
*Hai kak @${m.sender.split('@')[0]} 👋*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya5)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: jarot,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '📮Note : Jika Kamu Menggunakan Wa Lama Atau Wa Mod, Dan Button Tidak Keliatan, Langsung Aja Ketik .? all',
           hydratedButtons: [{
             urlButton: {
               displayText: '📊GroupBot📊',
               url: 'https://chat.whatsapp.com/HfU2b0eC1Am4GZaIbg4gb4'
             }

           },
                {
               urlButton: {
               displayText: '🗿Website🗿',
               url: 'https://tasyaachann01.github.io/'
             }

           },
               {
             quickReplyButton: {
               displayText: 'RULES',
               id: '.snk',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Donasi',
               id: '.https://telegra.ph/file/211793132c832a5dea1e3.jpg',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'LIST COMMAND',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.customPrefix = /^(menu|help|.menu|.help)$/i
handler.help = ['.menu']
handler.command = new RegExp

module.exports = handler
