let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `╭─❒ SCRIPT
│◦➛Base : Nurutomo Keknya:V
│◦➛Recode : *©RadBotZ*
│
└──────[ YOUTUBE ]──────❒
  │◦➛Script Ory : Nurutomo
  │◦➛https:-
  │◦➛Script Rc : Minta Ke Owner
  └──────────────────❒
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*HAMDEH*', 'status@broadcast') 
}
handler.help = ['github']
handler.tags = ['info']
handler.command = /^(github|sc|script)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

module.exports = handler