let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Bulan* :      *Rp 10000*
╠➥ *Permanen* : *Rp 15000*
╠➥ *Premium* :   *Rp 15000*
╠➥ *Sc Bot* :        *Masih Beta*
║
╠═〘 PEMBAYARAN 〙 ═
╠➥ Gopay, Dana, Dan Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2021 Rpg wabot-aq
╠═ Scrip original by Nurutomo
╠═〘 RAD BOT〙 ═`.trim(), '©RadBotZ', 'Dana', '#viadana', 'Pulsa', '#viapulsa', m)
}

handler.command = /^sewa(bot)?$/i

module.exports = handler