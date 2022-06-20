const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
MEDIA SOSIAL OWNER
Contact person Owner:
wa.me/${numberowner} (Owner)
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(donasi)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '📮 Silahkan pilih Command Dibawah ini',
           hydratedButtons: [{
             urlButton: {
               displayText: '📨Tiktok creator📨',
               url: gc
             }

           },
                {
               urlButton: {
               displayText: 'Youtube creator🔥',
               url: nomer
             }

           },
               {
urlButton: {
               displayText: 'Istagram Creator📸',
               url: web
             }

           },
               {
             quickReplyButton: {
               displayText: 'MENU',
               id: '.sewazifa',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'SEWA BOT',
               id: '.sewazifa',
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
handler.command = /^(mediasosial)$/i
handler.help = ['mediasosial']
module.exports = handler
