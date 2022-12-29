let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh, Maap kak Zx tadi ketiduran😊lll* ')
}

handler.tags = ['main']
handler.command = /^(zxon)$/i

handler.admin = true

export default handler