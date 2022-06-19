let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            key: m.key,
          }})
  
  }
handler.customPrefix = /(bot|bang|banh|yes|ya|iya|Rozi|zi|zifa|zifabotz|s|sticker|stiker|kontol|memek|pepek|mmk|ppk|hii|hai|hei|halo|hallo|hello)/i
handler.command = new RegExp
  
handler.mods = false

module.exports = handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
