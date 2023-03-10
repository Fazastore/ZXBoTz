let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
โฆ @${nomorown.split`@`[0]} โฆ
------- ${nameown} -------

๐ฎ *Note:*
โข Owner menerima save contact
โข Owner tidak mempunyai hak blockir tanpa alasan
โข Berbicaralah yang sopan & tidak spam
โข No Telponยฒ`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *๐ Nama* : FadilZX
${htjava} *โ๏ธ Nama RL* : HAMBA ALLAH
${htjava} *โ๏ธ Gender* : Boys
${htjava} *๐ Agama* : Islam
${htjava} *โฐ Tanggal lahir* : Juli 21
${htjava} *๐จ Umur* : ?
${htjava} *๐งฎ Kelas* : ?
${htjava} *๐งฉ Hobby* : Belajar Mencoding "Learn Coding"
${htjava} *๐ฌ Sifat* : ASIK DAH KALAU DAH KENAL
${htjava} *๐บ๏ธ Tinggal* : Indonesia,Lamongan, Jawa Timur
${htjava} *โค๏ธ Waifu* : Elaina Dong Jelas

${htjava} *๐ฌ Group WhatsApp* : ${sgc}
${htjava} *๐ Github:* ${sgh}
โขยทโโโโโโโโโโโโโโโโโโโโโโโโโโยทโข
`
  let teks = 'Pilih dibawah kak ! o(ใ๏ผพโฝ๏ผพใ)o'
const sections = [
   {
	title: `${htjava} OWNER โโโโโโโโโยทโข`,
	rows: [
	{title: "๐ฑ โข Nomor Owner", rowId: ".owner nomor"},
	{title: "๐ฑ โข Pengembang", rowId: ".kontak"},
	{title: "๐จ โข Biodata", rowId: ".owner bio"},
	{title: "๐ โข Script", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME โโโโโโโยทโข`,
	rows: [
	    {title: "๐น โข Donasi", rowId: ".donasi"},
	{title: "๐ โข Sewa", rowId: ".sewa"},
	{title: "๐ โข Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sgc, "๐ฌ Group WhatsApp", nomorown, '๐น Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`โฎโฐ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner','creator,kontak']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator|kontak)/i

export default handler
