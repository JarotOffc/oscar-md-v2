const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
Hallo mypren 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┏━━━〔 ıll *DONATE* llı 〕━━❑
⬡ *DANA:* ${dana}
⬡ *GOPAY:* ${gopay}
⬡ *OVO:* ${pulsa}
┗━━━━━━━━━━━━━━━━━━❑
┏━━〔 ıll *THANKS TO* llı 〕━❑
⬡ team creator-creator
⬡ team yang sudah berdonasi
┗━━━━━━━━━━❑
Berapapun donasi kalian akan sangat berarti 👍
Terimakasih yang sudah mendonasikan untuk bot
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
               displayText: 'Dana🐈',
               url: '085850539404
             }

           },
                {
               urlButton: {
               displayText: '😼Whatsapp creator😼',
               url: 'wa.me//79609055704
             }

           },
               {
             quickReplyButton: {
               displayText: 'sewa',
               id: '.sewaoscar',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Runtime',
               id: '.runtime',
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
handler.customPrefix = /^(donasi|donate|.donasi|.donate)$/i
handler.command = new RegExp
handler.help = ['.donasi']
module.exports = handler
