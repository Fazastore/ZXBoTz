let handler = function (m) {
  // this.sendContact(m.chat, '6285774869896', '𝚉𝚇𝙳𝙱𝙾𝚃𝚉', m)
  conn.sendContact(m.chat, '6285774869896', '𝐅𝐚𝐝𝐢𝐥𝐙𝐗', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(kontak)$/i

module.exports = handler
